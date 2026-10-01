import { applicationSites } from './application-sites.js';
import { selectApplicationProjects } from './application-projects.js';

const projectModules = import.meta.glob('/src/content/portfolio/*.mdx', { eager: true });
const selections = import.meta.glob('/src/sites/*/projects.json', { eager: true, import: 'default' });
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
  const projects = Object.entries(projectModules)
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
    .sort((a, b) => (a.frontmatter.sortOrder ?? 999) - (b.frontmatter.sortOrder ?? 999));

  if (siteId === 'main') return projects.filter((project) => project.frontmatter.published !== false);
  if (!applicationSites.includes(siteId)) throw new Error(`Unknown portfolio site: ${siteId}`);
  const selection = selections[`/src/sites/${siteId}/projects.json`];
  return selectApplicationProjects(projects, selection?.featured, siteId)
    .filter((project) => project.frontmatter.published !== false);
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
