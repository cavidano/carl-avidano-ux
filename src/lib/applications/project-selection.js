export const validateFeaturedProjects = (featured, slugs, siteId) => {
  if (!Array.isArray(featured) || featured.some((slug) => !slugs.includes(slug)) || new Set(featured).size !== featured.length) {
    throw new Error(`${siteId}: projects.json featured must contain unique, existing case-study slugs.`);
  }
};

/**
 * Applications curate projects; their content always comes from the shared MDX.
 * @template {{ slug: string, frontmatter: Record<string, any> }} T
 * @param {T[]} projects
 * @param {string[]} featured
 * @param {string} siteId
 */

export const selectApplicationProjects = (projects, featured, siteId) => {
  validateFeaturedProjects(featured, projects.map(({ slug }) => slug), siteId);
  
  return projects
    .map((project) => ({
      ...project,
      frontmatter: {
        ...project.frontmatter,
        isFeatured: featured.includes(project.slug)
      }
    }))
    .sort((a, b) => {
      const position = (slug) => featured.includes(slug) ? featured.indexOf(slug) : featured.length;
      return position(a.slug) - position(b.slug);
    });
};