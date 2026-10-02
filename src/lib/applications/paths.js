import { applicationSites } from './registry.js';

const siteOrigin = 'https://carlavidano.com';
const pagePath = /^\/(?:case-studies|drawing-board|about|404)(?:\/|$)/;

export const getSiteId = (pathname) => {
  const segment = pathname.split('/')[1];
  return applicationSites.includes(segment) ? segment : 'main';
};

export const getSiteBase = (pathname) => {
  const siteId = getSiteId(pathname);
  return siteId === 'main' ? '' : `/${siteId}`;
};

/** Scope page links, leaving shared media, external sites, and local fragments intact. */
export const siteHref = (href, pathname) => {
  const base = getSiteBase(pathname);
  if (!base || !href || /^(?:#|\?|mailto:|tel:)/.test(href)) return href;

  const url = new URL(href, new URL(pathname, siteOrigin));
  if (url.origin !== siteOrigin) return href;
  if (url.pathname.replace(/\/$/, '') === '/case-studies' || url.pathname.replace(/\/$/, '') === `${base}/case-studies`) {
    return `${base}${url.search}${url.hash || '#projects'}`;
  }
  if (getSiteBase(url.pathname) === base) return href;

  if (url.pathname === '/' || pagePath.test(url.pathname) || url.pathname === '/resume-carl-avidano.pdf') {
    return `${base}${url.pathname === '/' ? '' : url.pathname}${url.search}${url.hash}`;
  }
  return href;
};