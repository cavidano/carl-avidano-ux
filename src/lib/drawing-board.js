import { resolveImage } from './projects.js';
import { prepareDrawingBoardPosts, groupDrawingBoardTags } from './drawing-board-content.js';

const postModules = import.meta.glob('/src/content/drawing-board/*.mdx', { eager: true });
const posts = prepareDrawingBoardPosts(Object.values(postModules), {
  includePreviews: import.meta.env.DEV
}).map((post) => ({
  ...post,
  image: resolveImage(post.frontmatter.image)
}));
const tags = groupDrawingBoardTags(posts);

export function getDrawingBoardImageOptions(image) {
  // Match the project marquees' 2:1 ratio without enlarging the source image.
  const width = 2 * Math.floor(Math.min(1200, image.width, image.height * 2) / 2);
  return { src: image, width, height: width / 2, fit: 'cover', position: 'center' };
}

export function getDrawingBoardTags() {
  return tags;
}

export function getDrawingBoardPosts() {
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
