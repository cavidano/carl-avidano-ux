import { resolveImage } from './projects.js';

const postModules = import.meta.glob('/src/content/drawing-board/*.mdx', { eager: true });
const drawingBoardTopics = new Set(['User Experience', 'Design Systems', 'Accessibility']);

export function getDrawingBoardImageOptions(image) {
  // Match the project marquees' 2:1 ratio without enlarging the source image.
  const width = 2 * Math.floor(Math.min(1200, image.width, image.height * 2) / 2);
  return { src: image, width, height: width / 2, fit: 'cover', position: 'center' };
}

function createDrawingBoardSlug(title) {
  return title
    .normalize('NFKD')
    .replace(/\p{Mark}/gu, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getDrawingBoardTopics() {
  return [...drawingBoardTopics].map((name) => ({
    name,
    slug: createDrawingBoardSlug(name),
    href: `/drawing-board/topics/${createDrawingBoardSlug(name)}`
  }));
}

export function getDrawingBoardPosts() {
  const posts = Object.values(postModules)
    .filter(({ frontmatter }) => {
      const status = frontmatter.status ?? 'draft';
      if (status !== 'draft' && status !== 'published') {
        throw new Error(`The Drawing Board status must be draft or published: ${frontmatter.title}`);
      }
      return status === 'published';
    })
    .map((module) => ({
      slug: createDrawingBoardSlug(module.frontmatter.title),
      Content: module.default,
      frontmatter: module.frontmatter,
      image: resolveImage(module.frontmatter.image)
    }))
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  const slugs = new Set();
  for (const post of posts) {
    const { topic } = post.frontmatter;
    if (typeof topic !== 'string' || !drawingBoardTopics.has(topic)) {
      throw new Error(`The Drawing Board needs one primary topic: User Experience, Design Systems, or Accessibility: ${post.frontmatter.title}`);
    }
    if (!post.slug || slugs.has(post.slug)) {
      throw new Error(`The Drawing Board title needs a unique, nonempty URL slug: ${post.frontmatter.title}`);
    }
    slugs.add(post.slug);
  }

  return posts;
}

export function formatDrawingBoardDate(date) {
  const fullDate = date.length === 7 ? `${date}-01` : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${fullDate}T00:00:00Z`));
}
