import { readFile, readdir, stat, unlink } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const listFiles = async (directory) => (await Promise.all(
  (await readdir(directory, { withFileTypes: true })).map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  })
)).flat();

// Astro may retain imported originals after producing optimized variants.
// This static site publishes only images referenced by its generated files.
export const pruneUnusedImages = async (directory, assets = '_astro') => {
  const files = await listFiles(directory);
  const references = (await Promise.all(files
    .filter((path) => /\.(html|css|js|mjs|json|xml|svg|webmanifest)$/i.test(path))
    .map((path) => readFile(path, 'utf8')))).join('\n');
  const removed = [];

  for (const path of files) {
    if (!path.startsWith(join(directory, assets) + '/') || !/\.(avif|gif|jpe?g|png|webp)$/i.test(path)) continue;
    const filename = basename(path);
    if ([filename, encodeURI(filename), encodeURIComponent(filename)].some((name) => references.includes(name))) continue;
    removed.push({ filename, bytes: (await stat(path)).size });
    await unlink(path);
  }

  return removed;
};

/** @returns {import('astro').AstroIntegration} */
export default () => {
  let assets;
  return {
    name: 'image-output',
    hooks: {
      'astro:config:done': ({ config }) => { assets = config.build.assets; },
      'astro:build:done': async ({ dir, logger }) => {
        const removed = await pruneUnusedImages(fileURLToPath(dir), assets);
        const megabytes = removed.reduce((sum, image) => sum + image.bytes, 0) / 1024 / 1024;
        logger.info(`Removed ${removed.length} unreferenced generated images (${megabytes.toFixed(1)} MB).`);
      }
    }
  };
};
