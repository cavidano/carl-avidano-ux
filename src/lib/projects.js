import { contentRoot } from './sites.js';

const projectModules = import.meta.glob(['/src/content/portfolio/*.mdx', '/src/sites/bny/portfolio/*.mdx'], { eager: true });
const imageModules = import.meta.glob('/src/images/**/*.{avif,gif,jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default'
});

export function resolveImage(imagePath) {
  if (!imagePath) return '';

  const normalizedPath = imagePath
    .replace(/^(\.\.\/)+images\//, '/src/images/')
    .replace(/^\/src\/images\//, '/src/images/');

  return imageModules[normalizedPath] || imagePath;
}

export function getAllProjects(siteId = 'main') {
  return Object.entries(projectModules)
    .filter(([path]) => path.startsWith(`${contentRoot(siteId)}/portfolio/`))
    .flatMap(([path, module]) => {
      const slug = path.match(/\/portfolio\/([^/]+)\.mdx$/)?.[1];

      if (!slug) return [];

      return [{
        id: path,
        slug,
        Content: module.default,
        frontmatter: module.frontmatter,
        marqueeImage: resolveImage(module.frontmatter?.marqueeImage)
      }];
    })
    .filter((project) => project.frontmatter?.published !== false)
    .sort((a, b) => (a.frontmatter.sortOrder ?? 999) - (b.frontmatter.sortOrder ?? 999));
}

export function getMainProjects(siteId = 'main') {
  return getAllProjects(siteId).filter((project) => project.frontmatter.isMainProject);
}

export function getFeaturedProjects(siteId = 'main') {
  return getAllProjects(siteId).filter((project) => project.frontmatter.isFeatured);
}

export function getProjectBySlug(slug, siteId = 'main') {
  return getAllProjects(siteId).find((project) => project.slug === slug);
}
