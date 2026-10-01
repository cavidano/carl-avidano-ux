import { resolveImage } from './projects.js';
import { prepareDrawingBoardPosts, groupDrawingBoardTags, featureApplicationArticles } from './drawing-board-content.js';
import { applicationSites } from './application-sites.js';

const postModules = import.meta.glob('/src/content/drawing-board/*.mdx', { eager: true });
const selections = import.meta.glob('/src/sites/*/articles.json', { eager: true, import: 'default' });

export function getDrawingBoardImageOptions(image) {
  // Match the project marquees' 2:1 ratio without enlarging the source image.
  const width = 2 * Math.floor(Math.min(1200, image.width, image.height * 2) / 2);
  return { src: image, width, height: width / 2, fit: 'cover', position: 'center' };
}

export function getDrawingBoardTags(siteId = 'main') {
  return groupDrawingBoardTags(getDrawingBoardPosts(siteId));
}

export function getDrawingBoardPosts(siteId = 'main') {
  const modules = Object.entries(postModules).map(([path, module]) => ({
    ...module,
    id: path.split('/').at(-1).replace(/\.mdx$/, '')
  }));
  if (siteId !== 'main' && !applicationSites.includes(siteId)) throw new Error(`Unknown portfolio site: ${siteId}`);
  const selected = siteId === 'main' ? modules : featureApplicationArticles(
    modules, selections[`/src/sites/${siteId}/articles.json`]?.featured, siteId
  );
  return prepareDrawingBoardPosts(selected, {
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
