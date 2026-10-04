import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applicationSites, getApplicationSites, retiredApplicationSites } from '../src/lib/applications/registry.js';
import { getSiteId, siteHref } from '../src/lib/applications/paths.js';

assert.ok(process.argv.slice(2).every((arg) => arg === '--review'), 'Usage: node scripts/check-site-links.mjs [--review]');
const includeDrafts = process.argv.includes('--review');
const includedSites = getApplicationSites({ includeDrafts });
const dist = fileURLToPath(new URL(includeDrafts ? '../dist-review/' : '../dist/', import.meta.url));
const origin = 'https://carlavidano.com';
const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value.replaceAll('&amp;', '&')])
);
const present = (path) => [join(dist, path), join(dist, path, 'index.html')]
  .some((file) => existsSync(file) && statSync(file).isFile());
assert.ok(existsSync(dist), 'Build the site before checking links.');
assert.ok(present('/case-studies'), 'Main case-study listing is missing.');
for (const base of ['', ...applicationSites.map((site) => `/${site}`)]) {
  assert.ok(!existsSync(join(dist, base, 'portfolio')), `${base || 'main'}: old portfolio routes remain in the build`);
}
assert.deepEqual(JSON.parse(readFileSync(join(dist, '.retired-applications.json'), 'utf8')), retiredApplicationSites, 'Deployment removal list must match the application registry.');
for (const site of retiredApplicationSites) {
  assert.ok(!existsSync(join(dist, site)), `${site}: retired application remains in the build`);
}
for (const site of applicationSites) {
  if (includedSites.includes(site)) {
    for (const page of ['', '/about', '/drawing-board', '/404']) {
      assert.ok(present(`/${site}${page}`), `${site}: missing required page ${page || '/'}`);
    }
    assert.ok(present(`/${site}/resume-carl-avidano.pdf`), `${site}: missing résumé download`);
    assert.ok(present(`/${site}/background.css`), `${site}: missing background stylesheet`);
    const background = readFileSync(join(dist, site, 'background.css'), 'utf8');
    const images = [...background.matchAll(/url\("([^"]+)"\)/g)];
    assert.ok(images.length > 0, `${site}: background stylesheet has no image assets`);
    for (const [, image] of images) {
      assert.ok(present(decodeURIComponent(image)), `${site}: missing optimized background ${image}`);
    }
  } else {
    assert.ok(!existsSync(join(dist, site)), `${site}: draft application pages or assets leaked into the production build`);
  }
}
const pages = walk(dist).filter((path) => path.endsWith('.html'));
const caseStudyListing = readFileSync(join(dist, 'case-studies/index.html'), 'utf8');
const projectCards = (html) => [...html.matchAll(/<section\b[^>]*aria-labelledby="project-([^"]+)"[^>]*>[\s\S]*?<\/section>/g)];
const sharedCards = new Map(projectCards(caseStudyListing).map(([html, slug]) => [slug, html]));
// Heading depth and image loading priority follow placement; card content and layout stay shared.
const normalizeCard = (html) => html
  .replace(/<h[23]\b[^>]*id="project-([^"]+)"[^>]*>/g, '<h2 id="project-$1">')
  .replace(/<\/h[23]>/g, '</h2>')
  .replace(/ (?:loading|fetchpriority)="[^"]*"/g, '');
let applicationPages = 0;
let sharedCaseStudies = 0;
let sharedArticles = 0;

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const path = `/${relative(dist, file).replace(/(^|\/)index\.html$/, '')}`.replace(/\/$/, '') || '/';
  const site = getSiteId(path);
  const base = `/${site}`;
  if (site !== 'main') applicationPages++;
  if (path === base && site !== 'main') {
    const selection = JSON.parse(readFileSync(new URL(`../src/sites/${site}/projects.json`, import.meta.url), 'utf8'));
    const cards = projectCards(html);
    const publishedSelection = selection.featured.filter((slug) => sharedCards.has(slug));
    assert.deepEqual(cards.map(([, slug]) => slug), publishedSelection, `${site}: curated case-study order`);
    for (const [card, slug] of cards) {
      const expected = sharedCards.get(slug).replace(/href="([^"]*)"/g, (_, href) => `href="${siteHref(href, path)}"`);
      assert.ok(normalizeCard(card) === normalizeCard(expected), `${site}/${slug}: card title, headline, description, image, theme, or button differs from the shared card`);
    }
  }
  const tags = [...html.matchAll(/<(?:a|img|source|video|script|link|meta)\b[^>]*>/g)].map(([tag]) => ({
    element: tag.match(/^<(\w+)/)[1], ...attributes(tag)
  }));
  if (site !== 'main') {
    if (path === base) {
      const allCaseStudiesLinks = tags.filter((tag) => tag.element === 'a' && tag.href === `${origin}/case-studies`);
      assert.equal(allCaseStudiesLinks.length, 1, `${site}: curated work needs one link to the full main-site collection`);
      assert.equal(allCaseStudiesLinks[0].target, '_blank', `${site}: full collection opens in a new tab`);
    }
    assert.equal(tags.some((tag) => tag.rel === 'stylesheet' && tag.href === `${base}/background.css`), path === base, `${path}: application artwork appears only on the landing page`);
    assert.ok(tags.some((tag) => tag.name === 'robots' && tag.content === 'noindex, follow'), `${path}: noindex`);
    assert.ok(tags.some((tag) => tag.rel === 'canonical' && tag.href === origin + path), `${path}: canonical`);
    assert.ok(tags.some((tag) => tag['aria-label'] === 'Carl Avidano home' && tag.href === base), `${path}: home link`);
    assert.ok(!tags.some((tag) => tag.element === 'a' && new RegExp(`^${base}/case-studies/?(?:[?#]|$)`).test(tag.href ?? '')), `${path}: case-study listing links go to the application homepage`);
    assert.ok(!/<nav\b[^>]*id="primary-navigation"[^>]*>[\s\S]*?nav__text">Case Studies</.test(html), `${path}: no separate Case Studies navigation item`);
    assert.ok(tags.some((tag) => tag.element === 'a' && tag.href === base && tag.class?.includes('global-header__logo')), `${path}: shared global header`);
  }

  const caseStudyBase = site === 'main' ? '/case-studies' : `${base}/case-studies`;
  if (path === caseStudyBase || path.startsWith(`${caseStudyBase}/`)) {
    assert.ok(tags.some((tag) => tag.rel === 'canonical' && tag.href === origin + path), `${path}: case-study canonical`);
    assert.ok(tags.some((tag) => tag.property === 'og:url' && tag.content === origin + path), `${path}: case-study sharing URL`);
    assert.ok(/<title>[^<]*Case Stud(?:y|ies)[^<]*<\/title>/.test(html), `${path}: case-study page title`);
    if (site !== 'main' && path.startsWith(`${caseStudyBase}/`)) {
      const mainPath = path.slice(base.length);
      const shared = readFileSync(join(dist, mainPath, 'index.html'), 'utf8');
      for (const [label, pattern] of [
        ['header', /<header class="marquee">[\s\S]*?<\/header>/],
        ['body and figures', /<article class="margin-y-5">[\s\S]*?<\/article>/]
      ]) {
        const expected = shared.match(pattern)?.[0];
        assert.ok(expected, `${mainPath}: missing case-study ${label}`);
        const scoped = expected.replace(/href="([^"]*)"/g, (_, href) => `href="${siteHref(href, path)}"`);
        assert.ok(html.match(pattern)?.[0] === scoped, `${path}: case-study ${label} differs from the shared main source`);
      }
      const description = tags.find((tag) => tag.name === 'description')?.content;
      assert.equal(description, attributes(shared.match(/<meta name="description"[^>]*>/)?.[0] ?? '').content, `${path}: stale case-study description`);
      sharedCaseStudies++;
      assert.ok(/<div class="theme-primary overflow-hidden"[^>]*>\s*<div>\s*<div class="global-header-surface">/.test(html), `${path}: the case-study theme must include the global header`);
    }
  }

  if (site !== 'main' && (path === `${base}/drawing-board` || path.startsWith(`${base}/drawing-board/topics/`))) {
    const mainPath = path.slice(base.length);
    const shared = readFileSync(join(dist, mainPath, 'index.html'), 'utf8');
    const expected = shared.match(/<main\b[\s\S]*?<\/main>/)?.[0];
    assert.ok(expected, `${mainPath}: missing Drawing Board listing`);
    const scoped = expected.replace(/href="([^"]*)"/g, (_, href) => `href="${siteHref(href, path)}"`);
    assert.equal(html.match(/<main\b[\s\S]*?<\/main>/)?.[0], scoped, `${path}: Drawing Board listing must use the main page's copy and layout`);
    assert.equal(html.match(/<title>[^<]*<\/title>/)?.[0], shared.match(/<title>[^<]*<\/title>/)?.[0], `${path}: shared Drawing Board title`);
    assert.equal(tags.find((tag) => tag.name === 'description')?.content, attributes(shared.match(/<meta name="description"[^>]*>/)?.[0] ?? '').content, `${path}: shared Drawing Board description`);
  }

  if (site !== 'main' && path.startsWith(`${base}/drawing-board/`) && !path.startsWith(`${base}/drawing-board/topics/`)) {
    const mainPath = path.slice(base.length);
    const shared = readFileSync(join(dist, mainPath, 'index.html'), 'utf8');
    const pattern = /<article class="margin-y-6"[^>]*>[\s\S]*?<\/article>/;
    const expected = shared.match(pattern)?.[0];
    assert.ok(expected, `${mainPath}: missing shared article`);
    const scoped = expected.replace(/href="([^"]*)"/g, (_, href) => `href="${siteHref(href, path)}"`);
    assert.ok(html.match(pattern)?.[0] === scoped, `${path}: article header, body, images or links differ from the shared main source`);
    assert.equal(tags.find((tag) => tag.name === 'description')?.content, attributes(shared.match(/<meta name="description"[^>]*>/)?.[0] ?? '').content, `${path}: stale article description`);
    sharedArticles++;
  }

  for (const [figure] of html.matchAll(/<figure\b[^>]*>[\s\S]*?<\/figure>/g)) {
    assert.ok(
      !/<p\b[^>]*>\s*(?:<img\b[^>]*>|<a\b[^>]*>\s*<img\b[^>]*>\s*<\/a>)\s*<\/p>/.test(figure),
      `${path}: a figure image has an unnecessary paragraph wrapper`
    );
  }

  for (const tag of tags) {
    const values = tag.element === 'a' ? [tag.href] : [
      tag.src, tag.poster, tag.rel === 'stylesheet' ? tag.href : undefined,
      ...(tag.srcset && !tag.srcset.startsWith('data:') ? tag.srcset.split(',').map((candidate) => candidate.trim().split(/\s+/)[0]) : [])
    ];
    for (const value of values.filter(Boolean)) {
      if (/^(?:#|mailto:|tel:|data:)/.test(value)) continue;
      const url = new URL(value, origin + path);
      if (url.origin !== origin) continue;
      assert.ok(!/^\/(?:[^/]+\/)?portfolio(?:\/|$)/.test(url.pathname), `${path}: old portfolio URL remains: ${value}`);
      if (tag.element === 'a' && site !== 'main') {
        const targetSite = getSiteId(url.pathname);
        const fullCollectionLink = path === base && value === `${origin}/case-studies`;
        assert.ok(fullCollectionLink || targetSite === site || (targetSite === 'main' && !/^\/(?:case-studies|drawing-board|about|404)(?:\/|$)/.test(url.pathname) && url.pathname !== '/' && url.pathname !== '/resume-carl-avidano.pdf'), `${path}: link leaves ${site}: ${value}`);
      }
      if (tag.element === 'a' && site === 'main') {
        assert.equal(getSiteId(url.pathname), 'main', `${path}: main site links into an application: ${value}`);
      }
      assert.ok(present(decodeURIComponent(url.pathname)), `${path}: missing file for ${value}`);
    }
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    const schema = JSON.parse(json);
    const prefix = site === 'main' ? '' : base;
    assert.equal(schema.url, origin + path);
    assert.equal(schema.author.url, `${origin}${prefix}/about`);
    assert.equal(schema.isPartOf.url, `${origin}${prefix}/drawing-board`);
  }
}

const mainArticleRoutes = walk(join(dist, 'drawing-board'))
  .filter((path) => path.endsWith('.html') && !/<meta http-equiv="refresh"/i.test(readFileSync(path, 'utf8')))
  .map((path) => relative(join(dist, 'drawing-board'), path)).sort();
for (const site of includedSites) {
  const articleRoutes = walk(join(dist, site, 'drawing-board')).filter((path) => path.endsWith('.html')).map((path) => relative(join(dist, site, 'drawing-board'), path)).sort();
  assert.deepEqual(articleRoutes, mainArticleRoutes, `${site}: Drawing Board articles and topic routes must match the shared collection`);
}

for (const file of readdirSync(dist).filter((name) => /^sitemap.*\.xml$/.test(name))) {
  assert.ok(!readFileSync(join(dist, file), 'utf8').includes(`${origin}/portfolio`), 'Sitemaps must use case-study URLs.');
  for (const site of applicationSites) {
    assert.ok(!readFileSync(join(dist, file), 'utf8').includes(`${origin}/${site}`), `${site} is excluded from the sitemap`);
  }
}
console.log(`Verified ${pages.length} pages, including ${applicationPages} application pages (${includedSites.join(', ') || 'none'}), ${sharedCaseStudies} shared case studies and ${sharedArticles} shared articles: matching headers, bodies, figures and article collections; links, responsive images, metadata, publication status, and site isolation.`);
