/** @type {Record<string, import('astro').MDXInstance<{
 * title?: string,
 * description?: string,
 * portraitAlt?: string,
 * profile?: { name?: string, pronouns?: string, location?: string, email?: string, phone?: string },
 * skills?: string[],
 * workHistory?: { organization: string, role: string, period: string, highlights: string[] }[],
 * softwareSkills?: { category: string, items: string[] }[]
 * }>>} */
const pages = import.meta.glob('/src/sites/?*/pages/about.mdx', {
  eager: true,
});

export const getApplicationAboutPage = (siteId) => {
  return pages[`/src/sites/${siteId}/pages/about.mdx`];
};
