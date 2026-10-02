import test from 'node:test';
import assert from 'node:assert/strict';
import { applicationSites } from '../src/lib/applications/registry.js';
import { getSiteId, siteHref } from '../src/lib/applications/paths.js';

test('application scope respects URL path boundaries', () => {
  for (const site of applicationSites) {
    for (const path of [`/${site}`, `/${site}/`, `/${site}/case-studies/phoenix`]) {
      assert.equal(getSiteId(path), site);
    }
    assert.equal(getSiteId(`/${site}-other`), 'main');
  }
  for (const path of ['/', '/about', '/bny-other', '/case-studies/bny']) {
    assert.equal(getSiteId(path), 'main');
  }
});

for (const site of applicationSites) {
test(`${site}: page links and resume stay inside the application site`, () => {
  const current = `/${site}/case-studies/phoenix`;
  for (const [href, expected] of [
    ['/', `/${site}`],
    ['/about#skills-and-expertise', `/${site}/about#skills-and-expertise`],
    ['/case-studies?view=all', `/${site}?view=all#projects`],
    [`/${site}/case-studies/`, `/${site}#projects`],
    ['https://carlavidano.com/case-studies', `/${site}#projects`],
    ['/case-studies/visionlearning', `/${site}/case-studies/visionlearning`],
    ['/drawing-board/topics/design-systems', `/${site}/drawing-board/topics/design-systems`],
    ['/resume-carl-avidano.pdf', `/${site}/resume-carl-avidano.pdf`],
    ['https://carlavidano.com/drawing-board?tag=ux#posts', `/${site}/drawing-board?tag=ux#posts`]
  ]) assert.equal(siteHref(href, current), expected);
});

test(`${site}: shared assets, external links, and page-local navigation keep their targets`, () => {
  for (const href of [
    '/media/drawing-board/demo.mp4', '/_astro/image.webp',
    '#results', '?view=all', 'mailto:hello@example.com', 'tel:+12125551234',
    'https://gonatura11y.com/docs/', 'https://example.com/about',
    `/${site}/case-studies/phoenix`, `https://carlavidano.com/${site}/about`,
    '/about-something-else'
  ]) assert.equal(siteHref(href, `/${site}/about`), href);
});

}

test('main site links are not rewritten', () => {
  for (const href of ['/', '/case-studies/phoenix', '/drawing-board', '/resume-carl-avidano.pdf']) {
    assert.equal(siteHref(href, '/about'), href);
  }
});
