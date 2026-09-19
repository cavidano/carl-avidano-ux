import { resolveImage } from './projects.js';

const postModules = import.meta.glob('/src/content/desk/*.mdx', { eager: true });
const deskTopics = new Set(['User Experience', 'Design Systems', 'Accessibility']);

export function getDeskImageOptions(image) {
  // Match the project marquees' 2:1 ratio without enlarging the source image.
  const width = 2 * Math.floor(Math.min(1200, image.width, image.height * 2) / 2);
  return { src: image, width, height: width / 2, fit: 'cover', position: 'center' };
}

function createDeskSlug(title) {
  return title
    .normalize('NFKD')
    .replace(/\p{Mark}/gu, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getDeskPosts() {
  const posts = Object.values(postModules)
    .map((module) => ({
      slug: createDeskSlug(module.frontmatter.title),
      Content: module.default,
      frontmatter: module.frontmatter,
      image: resolveImage(module.frontmatter.image)
    }))
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  const slugs = new Set();
  for (const post of posts) {
    if (!deskTopics.has(post.frontmatter.topic)) {
      throw new Error(`The Drawing Board topic must be User Experience, Design Systems, or Accessibility: ${post.frontmatter.title}`);
    }
    if (!post.slug || slugs.has(post.slug)) {
      throw new Error(`The Drawing Board title needs a unique, nonempty URL slug: ${post.frontmatter.title}`);
    }
    slugs.add(post.slug);
  }

  return posts;
}

export function formatDeskDate(date) {
  const fullDate = date.length === 7 ? `${date}-01` : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${fullDate}T00:00:00Z`));
}
