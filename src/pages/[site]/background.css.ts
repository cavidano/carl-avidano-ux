import type { APIRoute, ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { getApplicationSites } from '../../lib/application-sites.js';

const settings = import.meta.glob<{ backgroundImage: string }>('../../sites/*/site.json', { eager: true, import: 'default' });
const images = import.meta.glob<ImageMetadata>('../../sites/*/images/*.{png,jpg,jpeg,webp,avif}', { import: 'default' });

export function getStaticPaths() {
  return getApplicationSites({ includeDrafts: import.meta.env.DEV || process.env.APPLICATION_PREVIEW === 'true' })
    .map((site) => ({ params: { site } }));
}

// Keep optimized artwork in an external stylesheet, shared by every page of a site.
export const GET: APIRoute = async ({ params }) => {
  const site = params.site!;
  const file = settings[`../../sites/${site}/site.json`].backgroundImage;
  const loadImage = images[`../../sites/${site}/${file}`];
  if (!loadImage) throw new Error(`Application ${site}: missing background image ${file}.`);
  const src = await loadImage();
  // Every employer uses the same 2:1 frame and top crop; keep originals intact.
  const widths = [640, 1280, 1920, 2000];
  const artwork = await Promise.all(widths.map((width) => getImage({
    src, width, height: width / 2, fit: 'cover', position: 'top', format: 'webp'
  })));
  const css = artwork.map((image, index) => {
    const retinaIndex = Math.min(index + 1, artwork.length - 1);
    const retina = artwork[retinaIndex];
    const density = widths[retinaIndex] / widths[index];
    const imageSet = retinaIndex === index
      ? `url("${image.src}")`
      : `image-set(url("${image.src}") 1x, url("${retina.src}") ${density}x)`;
    const rule = `body[data-application="${site}"] { --application-background-image: ${imageSet}; }`;
    return index === 0 ? rule : `@media (min-width: ${widths[index - 1] + 1}px) { ${rule} }`;
  }).join('\n');
  return new Response(css, { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
};
