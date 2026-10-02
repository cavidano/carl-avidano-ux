import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pruneUnusedImages } from '../scripts/image-build.mjs';

test('image output keeps responsive, lightbox, CSS and script assets while pruning unused generated copies', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-images-'));
  try {
    await mkdir(join(directory, '_astro'));
    await mkdir(join(directory, 'media'));
    const images = ['thumbnail.webp', 'responsive.webp', 'full.webp', 'background.png', 'script-image.jpg', 'with space.webp', 'unused-original.png'];
    for (const image of images) await writeFile(join(directory, '_astro', image), 'image');
    await writeFile(join(directory, 'media', 'public-image.png'), 'public asset');
    await writeFile(join(directory, 'index.html'), '<img src="/_astro/thumbnail.webp" srcset="/_astro/responsive.webp 1200w"><button data-lightbox-src="/_astro/full.webp"></button><img src="/_astro/with%20space.webp">');
    await writeFile(join(directory, '_astro', 'style.css'), 'body { background: url(./background.png) }');
    await writeFile(join(directory, '_astro', 'page.js'), 'const image = "/_astro/script-image.jpg";');
    assert.deepEqual(await pruneUnusedImages(directory), [{ filename: 'unused-original.png', bytes: 5 }]);
    assert.deepEqual((await readdir(join(directory, '_astro'))).filter((name) => /\.(webp|jpg|png)$/.test(name)).sort(), images.filter((name) => name !== 'unused-original.png').sort());
    assert.deepEqual(await readdir(join(directory, 'media')), ['public-image.png']);
    assert.deepEqual(await pruneUnusedImages(directory), []);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
