import { contentRoot } from './sites.js';

/** @type {Record<string, typeof import('../content/pages/about.mdx')>} */
const pages = import.meta.glob(['/src/content/pages/about.mdx', '/src/sites/bny/pages/about.mdx'], { eager: true });

export function getAboutPage(siteId = 'main') {
  return pages[`${contentRoot(siteId)}/pages/about.mdx`];
}
