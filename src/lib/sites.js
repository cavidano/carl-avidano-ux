import mainCopy from '../content/pages/site.json';
import { applicationSites } from './application-sites.js';
import { getSiteId } from './site-paths.js';

/** @type {Record<string, typeof mainCopy & {home: Record<string, string>}>} */
const copies = import.meta.glob('/src/sites/*/site.json', { eager: true, import: 'default' });

export function getApplicationCopy(siteId) {
  const copy = copies[`/src/sites/${siteId}/site.json`];
  if (!copy) throw new Error(`Application ${siteId}: missing site.json.`);
  return copy;
}

export function getSiteCopy(pathname) {
  const siteId = getSiteId(pathname);
  return siteId === 'main' ? mainCopy : getApplicationCopy(siteId);
}

export function contentRoot(siteId = 'main') {
  if (siteId === 'main') return '/src/content';
  if (applicationSites.includes(siteId)) return `/src/sites/${siteId}`;
  throw new Error(`Unknown portfolio site: ${siteId}`);
}
