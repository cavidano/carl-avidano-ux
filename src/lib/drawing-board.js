import { resolveImage } from './projects.js';
import { prepareDrawingBoardPosts, groupDrawingBoardTags } from './drawing-board-content.js';
import { contentRoot } from './sites.js';

const postModules = import.meta.glob(['/src/content/drawing-board/*.mdx', '/src/sites/*/drawing-board/*.mdx'], { eager: true });

export function getDrawingBoardImageOptions(image) {
  // Match the project marquees' 2:1 ratio without enlarging the source image.
  const width = 2 * Math.floor(Math.min(1200, image.width, image.height * 2) / 2);
  return { src: image, width, height: width / 2, fit: 'cover', position: 'center' };
}

export function getDrawingBoardTags(siteId = 'main') {
  return groupDrawingBoardTags(getDrawingBoardPosts(siteId));
}

export function getDrawingBoardPosts(siteId = 'main') {
  const modules = Object.entries(postModules)
    .filter(([path]) => path.startsWith(`${contentRoot(siteId)}/drawing-board/`))
    .map(([, module]) => module);
  return prepareDrawingBoardPosts(modules, {
    includePreviews: import.meta.env.DEV
  }).map((post) => ({ ...post, image: resolveImage(post.frontmatter.image) }));
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
