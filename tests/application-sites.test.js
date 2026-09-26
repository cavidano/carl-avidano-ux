import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { applications, selectApplicationSites, validateRetiredApplicationSites } from '../src/lib/application-sites.js';
import { cleanApplicationOutput } from '../scripts/application-build.mjs';

test('draft applications require an explicit preview while published sites remain included', () => {
  const registry = [{ id: 'example', status: 'draft' }, { id: 'submitted', status: 'published' }];
  assert.deepEqual(selectApplicationSites(registry), ['submitted']);
  assert.deepEqual(selectApplicationSites(registry, { includeDrafts: true }), ['example', 'submitted']);
  registry[0].status = 'published';
  assert.deepEqual(selectApplicationSites(registry), ['example', 'submitted']);
  assert.deepEqual(selectApplicationSites([]), []);
});

test('application registration rejects colliding routes, unsafe slugs, and unknown statuses', () => {
  for (const id of ['main', 'portfolio', 'drawing-board', 'media', '../other', '', 'Employer', 'my/site', undefined]) {
    assert.throws(() => selectApplicationSites([{ id, status: 'draft' }]), /URL slug/);
  }
  assert.throws(() => selectApplicationSites([{ id: 'example', status: 'draft' }, { id: 'example', status: 'published' }]), /URL slug/);
  assert.throws(() => selectApplicationSites([{ id: 'example', status: 'ready' }]), /status must be/);
});

test('retirement cannot target live applications, shared directories, or paths outside the site', () => {
  for (const id of ['bny', 'accenture', 'main', 'portfolio', 'drawing-board', 'media', '../other', '.', '', 'my/site']) {
    assert.throws(() => validateRetiredApplicationSites([id]), /Invalid retired application URL/);
  }
  assert.throws(() => validateRetiredApplicationSites(['old-employer', 'old-employer']), /Invalid retired application URL/);
  assert.deepEqual(validateRetiredApplicationSites(['old-employer']), ['old-employer']);
  assert.throws(() => selectApplicationSites([{ id: 'aclu', status: 'published' }]), /URL slug/);
});

for (const includeDrafts of [false, true]) {
  test(`build output ${includeDrafts ? 'retains' : 'excludes'} draft public assets along with draft pages`, (t) => {
    const directory = mkdtempSync(join(tmpdir(), 'portfolio-build-'));
    t.after(() => rmSync(directory, { recursive: true, force: true }));
    writeFileSync(join(directory, 'index.html'), 'main site');
    writeFileSync(join(directory, 'resume-carl-avidano.pdf'), 'main résumé');
    writeFileSync(join(directory, '.DS_Store'), 'Finder metadata');
    for (const { id } of applications) {
      mkdirSync(join(directory, id));
      for (const file of ['index.html', 'resume-carl-avidano.pdf', '.htaccess', '.DS_Store']) {
        writeFileSync(join(directory, id, file), file);
      }
    }
    cleanApplicationOutput(directory, { includeDrafts });
    assert.ok(existsSync(join(directory, 'index.html')));
    assert.ok(existsSync(join(directory, 'resume-carl-avidano.pdf')));
    assert.ok(!existsSync(join(directory, '.DS_Store')));
    for (const { id, status } of applications) {
      const included = includeDrafts || status === 'published';
      for (const file of ['index.html', 'resume-carl-avidano.pdf', '.htaccess']) {
        assert.equal(existsSync(join(directory, id, file)), included);
      }
      assert.ok(!existsSync(join(directory, id, '.DS_Store')));
    }
  });
}
