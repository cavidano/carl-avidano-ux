import mainCopy from '../content/pages/site.json';
import { applicationSites } from './application-sites.js';
import { getSiteId } from './site-paths.js';

/** @type {Record<string, typeof mainCopy & {home: typeof mainCopy.home & {introduction: string, projectsIntroduction: string, articlesIntroduction: string}}>} */
const copies = import.meta.glob('/src/sites/*/site.json', { eager: true, import: 'default' });

export function getSiteCopy(pathname) {
  const siteId = getSiteId(pathname);
  return siteId === 'main' ? mainCopy : copies[`${contentRoot(siteId)}/site.json`];
}

export function contentRoot(siteId = 'main') {
  if (siteId === 'main') return '/src/content';
  if (applicationSites.includes(siteId)) return `/src/sites/${siteId}`;
  throw new Error(`Unknown portfolio site: ${siteId}`);
}
