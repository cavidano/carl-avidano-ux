import { resolveImage } from './projects.js';

const postModules = import.meta.glob('/src/content/desk/*.mdx', { eager: true });

export function getDeskPosts() {
  return Object.entries(postModules)
    .map(([path, module]) => ({
      slug: path.split('/').pop().replace(/\.mdx$/, ''),
      Content: module.default,
      frontmatter: module.frontmatter,
      image: resolveImage(module.frontmatter.image)
    }))
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export function formatDeskDate(date) {
  const fullDate = date.length === 7 ? `${date}-01` : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${fullDate}T00:00:00Z`));
}
