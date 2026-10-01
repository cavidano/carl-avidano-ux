/** @type {Record<string, import('astro').MDXInstance<{
 * title: string,
 * description: string,
 * portraitAlt: string,
 * profile: { name: string, pronouns: string, location: string, email: string, phone: string },
 * skills: string[]
 * }>>} */
const pages = import.meta.glob('/src/sites/*/pages/about.mdx', { eager: true });

export function hasApplicationAboutPage(siteId) {
  return Boolean(pages[`/src/sites/${siteId}/pages/about.mdx`]);
}

export function getApplicationAboutPage(siteId) {
  const page = pages[`/src/sites/${siteId}/pages/about.mdx`];
  if (!page) throw new Error(`Application ${siteId}: missing pages/about.mdx.`);
  return page;
}
