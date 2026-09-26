import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applicationSites, getApplicationSites, retiredApplicationSites } from '../src/lib/application-sites.js';

export function validateApplicationFiles(root) {
  const sitesRoot = join(root, 'src/sites');
  const folders = readdirSync(sitesRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map(({ name }) => name);
  assert.deepEqual(folders.sort(), [...applicationSites].sort(), 'Every src/sites directory must be registered in src/lib/application-sites.js.');
  const mainCopy = JSON.parse(readFileSync(join(root, 'src/content/pages/site.json'), 'utf8'));

  for (const site of retiredApplicationSites) {
    for (const path of [`src/pages/${site}.astro`, `src/sites/${site}`, `public/${site}`]) {
      assert.ok(!existsSync(join(root, path)), `${site}: remove retired application source at ${path}`);
    }
  }

  for (const site of applicationSites) {
    const directory = join(sitesRoot, site);
    for (const file of ['site.json', 'Hero.astro', 'pages/about.mdx', 'portfolio', 'drawing-board', 'README.md', 'application-brief.md']) {
      assert.ok(existsSync(join(directory, file)), `${site}: missing src/sites/${site}/${file}`);
    }
    assert.ok(existsSync(join(root, 'public', site, 'resume-carl-avidano.pdf')), `${site}: missing its independent résumé asset.`);

    const copy = JSON.parse(readFileSync(join(directory, 'site.json'), 'utf8'));
    for (const [section, fields] of Object.entries(mainCopy)) {
      for (const field of Object.keys(fields)) {
        assert.ok(typeof copy[section]?.[field] === 'string' && copy[section][field].trim(), `${site}: missing text at site.json → ${section}.${field}`);
      }
    }
    for (const field of ['introduction', 'projectsIntroduction']) {
      assert.ok(typeof copy.home[field] === 'string' && copy.home[field].trim(), `${site}: missing text at site.json → home.${field}`);
    }
  }
}

function removeFinderFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) removeFinderFiles(path);
    else if (entry.name === '.DS_Store') rmSync(path);
  }
}

export function cleanApplicationOutput(directory, { includeDrafts = false } = {}) {
  const included = getApplicationSites({ includeDrafts });
  for (const site of applicationSites.filter((id) => !included.includes(id))) {
    // Astro also copies public/ assets; omitting routes alone would expose draft PDFs.
    rmSync(join(directory, site), { recursive: true, force: true });
  }
  removeFinderFiles(directory);
  for (const site of retiredApplicationSites) {
    assert.ok(!existsSync(join(directory, site)), `${site}: retired application appears in the build output`);
  }
  writeFileSync(join(directory, '.retired-applications.json'), JSON.stringify(retiredApplicationSites, null, 2) + '\n');
}

/** @returns {import('astro').AstroIntegration} */
export default function applicationBuild({ includeDrafts = false } = {}) {
  return {
    name: 'application-sites',
    hooks: {
      'astro:config:setup': ({ config, command, updateConfig }) => {
        validateApplicationFiles(fileURLToPath(config.root));
        const sites = getApplicationSites({ includeDrafts: command === 'dev' || includeDrafts });
        updateConfig({ redirects: Object.fromEntries(sites.map((site) => [`/${site}/portfolio`, `/${site}#projects`])) });
      },
      'astro:build:done': ({ dir, logger }) => {
        cleanApplicationOutput(fileURLToPath(dir), { includeDrafts });
        logger.info(`Included applications: ${getApplicationSites({ includeDrafts }).join(', ') || 'none'}${includeDrafts ? ' (local review)' : ''}.`);
      }
    }
  };
}
