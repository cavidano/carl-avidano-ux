import test from 'node:test';
import assert from 'node:assert/strict';
import { getSiteId, siteHref } from '../src/lib/site-paths.js';

test('application scope respects URL path boundaries', () => {
  for (const path of ['/bny', '/bny/', '/bny/portfolio/phoenix']) {
    assert.equal(getSiteId(path), 'bny');
  }
  for (const path of ['/', '/about', '/bny-other', '/portfolio/bny']) {
    assert.equal(getSiteId(path), 'main');
  }
});

test('page links and resume stay inside the application site', () => {
  const current = '/bny/portfolio/phoenix';
  for (const [href, expected] of [
    ['/', '/bny'],
    ['/about#skills-and-expertise', '/bny/about#skills-and-expertise'],
    ['/portfolio?view=all', '/bny?view=all#projects'],
    ['/bny/portfolio/', '/bny#projects'],
    ['https://carlavidano.com/portfolio', '/bny#projects'],
    ['/portfolio/visionlearning', '/bny/portfolio/visionlearning'],
    ['/drawing-board/topics/design-systems', '/bny/drawing-board/topics/design-systems'],
    ['/resume-carl-avidano.pdf', '/bny/resume-carl-avidano.pdf'],
    ['https://carlavidano.com/drawing-board?tag=ux#posts', '/bny/drawing-board?tag=ux#posts']
  ]) assert.equal(siteHref(href, current), expected);
});

test('shared assets, external links, and page-local navigation keep their targets', () => {
  for (const href of [
    '/media/drawing-board/demo.mp4', '/_astro/image.webp',
    '#results', '?view=all', 'mailto:hello@example.com', 'tel:+12125551234',
    'https://gonatura11y.com/docs/', 'https://example.com/about',
    '/bny/portfolio/phoenix', 'https://carlavidano.com/bny/about',
    '/about-something-else'
  ]) assert.equal(siteHref(href, '/bny/about'), href);
});

test('main site links are not rewritten', () => {
  for (const href of ['/', '/portfolio/phoenix', '/drawing-board', '/resume-carl-avidano.pdf']) {
    assert.equal(siteHref(href, '/about'), href);
  }
});
