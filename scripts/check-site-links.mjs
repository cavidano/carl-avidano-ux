import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applicationSites, getApplicationSites, retiredApplicationSites } from '../src/lib/application-sites.js';
import { getSiteId } from '../src/lib/site-paths.js';

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
assert.deepEqual(JSON.parse(readFileSync(join(dist, '.retired-applications.json'), 'utf8')), retiredApplicationSites, 'Deployment removal list must match the application registry.');
for (const site of retiredApplicationSites) {
  assert.ok(!existsSync(join(dist, site)), `${site}: retired application remains in the build`);
}
for (const site of applicationSites) {
  if (includedSites.includes(site)) {
    for (const page of ['', '/about', '/drawing-board', '/404', '/portfolio']) {
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
let applicationPages = 0;

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const path = `/${relative(dist, file).replace(/(^|\/)index\.html$/, '')}`.replace(/\/$/, '') || '/';
  const site = getSiteId(path);
  const base = `/${site}`;
  if (site !== 'main') applicationPages++;
  if (site !== 'main' && path === `${base}/portfolio`) {
    assert.ok(html.includes(`url=${base}#projects`), `${site}: portfolio listing redirects to homepage projects`);
    continue;
  }
  const tags = [...html.matchAll(/<(?:a|img|source|video|script|link|meta)\b[^>]*>/g)].map(([tag]) => ({
    element: tag.match(/^<(\w+)/)[1], ...attributes(tag)
  }));
  if (site !== 'main') {
    assert.equal(tags.some((tag) => tag.rel === 'stylesheet' && tag.href === `${base}/background.css`), path === base, `${path}: application artwork appears only on the landing page`);
    assert.ok(tags.some((tag) => tag.name === 'robots' && tag.content === 'noindex, follow'), `${path}: noindex`);
    assert.ok(tags.some((tag) => tag.rel === 'canonical' && tag.href === origin + path), `${path}: canonical`);
    assert.ok(tags.some((tag) => tag['aria-label'] === 'Carl Avidano home' && tag.href === base), `${path}: home link`);
    assert.ok(!tags.some((tag) => tag.element === 'a' && new RegExp(`^${base}/portfolio/?(?:[?#]|$)`).test(tag.href ?? '')), `${path}: no separate portfolio listing links`);
    assert.ok(!/<nav\b[^>]*id="primary-navigation"[^>]*>[\s\S]*?nav__text">Portfolio</.test(html), `${path}: no Portfolio navigation item`);
    assert.ok(tags.some((tag) => tag.element === 'a' && tag.href === base && tag.class?.includes('global-header__logo')), `${path}: shared global header`);
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
      if (tag.element === 'a' && site !== 'main') {
        const targetSite = getSiteId(url.pathname);
        assert.ok(targetSite === site || (targetSite === 'main' && !/^\/(?:portfolio|drawing-board|about|404)(?:\/|$)/.test(url.pathname) && url.pathname !== '/' && url.pathname !== '/resume-carl-avidano.pdf'), `${path}: link leaves ${site}: ${value}`);
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

for (const file of readdirSync(dist).filter((name) => /^sitemap.*\.xml$/.test(name))) {
  for (const site of applicationSites) {
    assert.ok(!readFileSync(join(dist, file), 'utf8').includes(`${origin}/${site}`), `${site} is excluded from the sitemap`);
  }
}
console.log(`Verified ${pages.length} pages, including ${applicationPages} application pages (${includedSites.join(', ') || 'none'}): links, responsive images, metadata, publication status, and site isolation.`);
