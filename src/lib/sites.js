import mainCopy from '../content/pages/site.json';
import bnyCopy from '../sites/bny/site.json';
import { getSiteId } from './site-paths.js';

const copies = { main: mainCopy, bny: bnyCopy };

export function getSiteCopy(pathname) {
  return copies[getSiteId(pathname)];
}

export function contentRoot(siteId = 'main') {
  if (siteId === 'main') return '/src/content';
  if (siteId === 'bny') return '/src/sites/bny';
  throw new Error(`Unknown portfolio site: ${siteId}`);
}
