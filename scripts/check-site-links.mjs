import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const origin = 'https://carlavidano.com';
const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value.replaceAll('&amp;', '&')])
);
const present = (path) => existsSync(join(dist, path)) || existsSync(join(dist, path, 'index.html'));
const pages = walk(join(dist, 'bny')).filter((path) => path.endsWith('.html'));
assert.ok(pages.length > 0, 'Build the site before checking application links.');

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const path = `/${relative(dist, file).replace(/\/index\.html$/, '')}`;
  if (path === '/bny/portfolio') {
    assert.match(html, /http-equiv="refresh"[^>]*content="[^"]*url=\/bny#projects"/, 'Old BNY listing redirects to homepage projects');
    continue;
  }
  const tags = [...html.matchAll(/<(?:a|img|source|video|script|link|meta)\b[^>]*>/g)].map(([tag]) => ({
    name: tag.match(/^<(\w+)/)[1], ...attributes(tag)
  }));
  assert.ok(tags.some((tag) => tag.name === 'robots' && tag.content === 'noindex, follow'), `${path}: noindex`);
  assert.ok(tags.some((tag) => tag.rel === 'canonical' && tag.href === origin + path), `${path}: canonical`);
  assert.ok(tags.some((tag) => tag['aria-label'] === 'Carl Avidano home' && tag.href === '/bny'), `${path}: home link`);
  assert.ok(!tags.some((tag) => tag.name === 'a' && /^\/bny\/portfolio\/?(?:[?#]|$)/.test(tag.href ?? '')), `${path}: no separate portfolio listing links`);
  assert.ok(!/<nav\b[^>]*id="primary-navigation"[^>]*>[\s\S]*?nav__text">Portfolio</.test(html), `${path}: no Portfolio navigation item`);

  for (const tag of tags) {
    const values = tag.name === 'a' ? [tag.href] : [tag.src, tag.poster, tag.rel === 'stylesheet' ? tag.href : undefined];
    for (const value of values.filter(Boolean)) {
      if (/^(?:#|mailto:|tel:|data:)/.test(value)) continue;
      const url = new URL(value, origin + path);
      if (url.origin !== origin) continue;
      if (tag.name === 'a') {
        assert.ok(!/^\/(?:portfolio|drawing-board|about)(?:\/|$)/.test(url.pathname) && url.pathname !== '/', `${path}: link leaves BNY: ${value}`);
      }
      assert.ok(present(decodeURIComponent(url.pathname)), `${path}: missing file for ${value}`);
    }
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    const schema = JSON.parse(json);
    assert.equal(schema.url, origin + path);
    assert.equal(schema.author.url, `${origin}/bny/about`);
    assert.equal(schema.isPartOf.url, `${origin}/bny/drawing-board`);
  }
}

for (const file of readdirSync(dist).filter((name) => /^sitemap.*\.xml$/.test(name))) {
  assert.ok(!readFileSync(join(dist, file), 'utf8').includes(`${origin}/bny`), 'BNY is excluded from the sitemap');
}
for (const file of walk(dist).filter((path) => path.endsWith('.html') && !path.startsWith(join(dist, 'bny') + '/'))) {
  const html = readFileSync(file, 'utf8');
  assert.ok(!/href="(?:https:\/\/carlavidano.com)?\/bny(?:[\/"#?])/.test(html), `${relative(dist, file)}: main site links into BNY`);
}
console.log(`Verified ${pages.length} BNY pages: navigation, assets, metadata, sitemap exclusion, and main-site isolation.`);
