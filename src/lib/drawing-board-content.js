function createSlug(value) {
  return value
    .normalize('NFKD')
    .replace(/\p{Mark}/gu, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function prepareDrawingBoardPosts(modules) {
  const slugs = new Set();
  const tagNames = new Map();
  const posts = [];

  for (const module of modules) {
    const { frontmatter } = module;
    const { title, status = 'draft', tags: names = [] } = frontmatter;
    if (status !== 'draft' && status !== 'published') {
      throw new Error(`The Drawing Board status must be draft or published: ${title}`);
    }
    if (status === 'draft') continue;

    const slug = createSlug(title);
    if (!slug || slugs.has(slug)) {
      throw new Error(`The Drawing Board title needs a unique, nonempty URL slug: ${title}`);
    }
    slugs.add(slug);

    if (!Array.isArray(names)) {
      throw new Error(`The Drawing Board tags must be a list: ${title}`);
    }
    const postTagSlugs = new Set();
    const tags = names.map((value) => {
      if (typeof value !== 'string' || !value.trim()) {
        throw new Error(`The Drawing Board tags must have nonempty names: ${title}`);
      }
      const name = value.trim().replace(/\s+/g, ' ');
      const tagSlug = createSlug(name);
      if (!tagSlug || postTagSlugs.has(tagSlug)) {
        throw new Error(`The Drawing Board tag needs a unique, nonempty URL slug: ${name} in ${title}`);
      }
      const existingName = tagNames.get(tagSlug);
      if (existingName && existingName !== name) {
        throw new Error(`The Drawing Board tags "${existingName}" and "${name}" share the URL "${tagSlug}". Use one consistent name.`);
      }
      postTagSlugs.add(tagSlug);
      tagNames.set(tagSlug, name);
      return { name, slug: tagSlug, href: `/drawing-board/topics/${tagSlug}` };
    });

    posts.push({ slug, Content: module.default, frontmatter, tags });
  }

  return posts.sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

/**
 * @template {{ tags: { name: string, slug: string, href: string }[] }} T
 * @param {T[]} posts
 */
export function groupDrawingBoardTags(posts) {
  /** @type {Map<string, { name: string, slug: string, href: string, posts: T[] }>} */
  const tags = new Map();
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!tags.has(tag.slug)) tags.set(tag.slug, { ...tag, posts: [] });
      tags.get(tag.slug).posts.push(post);
    }
  }
  return [...tags.values()].sort((a, b) => a.name.localeCompare(b.name, 'en'));
}
