import { applicationSites } from './application-sites.js';

const siteOrigin = 'https://carlavidano.com';
const pagePath = /^\/(?:portfolio|drawing-board|about|404)(?:\/|$)/;

export function getSiteId(pathname) {
  const segment = pathname.split('/')[1];
  return applicationSites.includes(segment) ? segment : 'main';
}

export function getSiteBase(pathname) {
  const siteId = getSiteId(pathname);
  return siteId === 'main' ? '' : `/${siteId}`;
}

/** Scope page links, leaving shared media, external sites, and local fragments intact. */
export function siteHref(href, pathname) {
  const base = getSiteBase(pathname);
  if (!base || !href || /^(?:#|\?|mailto:|tel:)/.test(href)) return href;

  const url = new URL(href, new URL(pathname, siteOrigin));
  if (url.origin !== siteOrigin) return href;
  if (url.pathname.replace(/\/$/, '') === '/portfolio' || url.pathname.replace(/\/$/, '') === `${base}/portfolio`) {
    return `${base}${url.search}${url.hash || '#projects'}`;
  }
  if (getSiteBase(url.pathname) === base) return href;

  if (url.pathname === '/' || pagePath.test(url.pathname) || url.pathname === '/resume-carl-avidano.pdf') {
    return `${base}${url.pathname === '/' ? '' : url.pathname}${url.search}${url.hash}`;
  }
  return href;
}
