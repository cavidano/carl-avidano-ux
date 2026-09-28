import { applicationSites } from './application-sites.js';

/** @type {Record<string, { home: Record<string, string>, drawingBoard: { headline: string, title: string, introduction: string } }>} */
const copies = import.meta.glob('/src/sites/*/site.json', { eager: true, import: 'default' });

export function getApplicationCopy(siteId) {
  const copy = copies[`/src/sites/${siteId}/site.json`];
  if (!copy) throw new Error(`Application ${siteId}: missing site.json.`);
  return copy;
}

export function contentRoot(siteId = 'main') {
  if (siteId === 'main') return '/src/content';
  if (applicationSites.includes(siteId)) return `/src/sites/${siteId}`;
  throw new Error(`Unknown portfolio site: ${siteId}`);
}
