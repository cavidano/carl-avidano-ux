import assert from 'node:assert/strict';
import test from 'node:test';
import { prepareDrawingBoardPosts, groupDrawingBoardTags, featureApplicationArticles } from '../src/lib/drawing-board-content.js';

const article = (title, tags, options = {}) => ({
  frontmatter: { title, tags, date: '2026-09-01', status: 'published', ...options }
});
const index = (modules) => groupDrawingBoardTags(prepareDrawingBoardPosts(modules));

test('applications receive edited and newly published articles regardless of homepage selection', () => {
  const modules = [
    { id: 'chosen', default: () => 'Original article', ...article('Chosen article', ['Accessibility'], { date: '2026-09-01' }) },
    { id: 'upcoming', default: () => 'Upcoming article', ...article('Upcoming article', ['Design Systems'], { date: '2026-10-01', status: 'draft' }) }
  ];
  const selected = () => prepareDrawingBoardPosts(featureApplicationArticles(modules, ['chosen'], 'example'));
  assert.deepEqual(selected().map(({ slug }) => slug), ['chosen-article']);
  modules[0].frontmatter.title = 'Updated article';
  modules[0].default = () => 'Updated body';
  modules[1].frontmatter.status = 'published';
  const posts = selected();
  assert.deepEqual(posts.map(({ slug }) => slug), ['upcoming-article', 'updated-article']);
  assert.equal(posts[1].Content(), 'Updated body');
  assert.equal(posts[1].frontmatter.isFeatured, true, 'Featuring follows the source file when the headline changes');
  assert.equal(posts[0].frontmatter.isFeatured, false, 'A new article appears in the collection without changing the curated homepage');
  assert.equal(modules[0].frontmatter.isFeatured, undefined, 'Application curation must not mutate shared metadata');
  modules[1].frontmatter.status = 'draft';
  assert.deepEqual(selected().map(({ slug }) => slug), ['updated-article']);
  for (const featured of [undefined, ['missing'], ['chosen', 'chosen']]) {
    assert.throws(() => featureApplicationArticles(modules, featured, 'example'), /unique, existing/);
  }
});

test('only published articles contribute tags and archive entries', () => {
  const tags = index([
    article('Published', ['Accessibility']),
    article('Draft', ['User Experience'], { status: 'draft' }),
    article('Unspecified status', ['Research'], { status: undefined })
  ]);
  assert.deepEqual(tags.map(({ name }) => name), ['Accessibility']);
  assert.deepEqual(tags[0].posts.map(({ slug }) => slug), ['published']);
});

test('articles can belong to multiple tags and each archive stays newest first', () => {
  const tags = index([
    article('Older', ['Accessibility', 'Design Systems'], { date: '2026-03-09' }),
    article('Newer', ['Design Systems'], { date: '2026-09-16' })
  ]);
  assert.deepEqual(tags.map(({ name }) => name), ['Accessibility', 'Design Systems']);
  assert.deepEqual(tags[0].posts.map(({ slug }) => slug), ['older']);
  assert.deepEqual(tags[1].posts.map(({ slug }) => slug), ['newer', 'older']);
});

test('draft previews are opt-in and never included by default', () => {
  const modules = [
    article('Published', ['Accessibility']),
    article('Local preview', ['Education'], { status: 'draft', preview: true }),
    article('Private draft', ['Research'], { status: 'draft' }),
    article('Invalid preview flag', ['Research'], { status: 'draft', preview: 'true' })
  ];
  assert.deepEqual(prepareDrawingBoardPosts(modules).map(({ slug }) => slug), ['published']);
  assert.deepEqual(index(modules).map(({ name }) => name), ['Accessibility']);
  const previews = prepareDrawingBoardPosts(modules, { includePreviews: true });
  assert.deepEqual(previews.map(({ slug }) => slug), ['published', 'local-preview']);
  assert.deepEqual(groupDrawingBoardTags(previews).map(({ name }) => name), ['Accessibility', 'Education']);
});

test('a new tag creates a usable archive URL without a hardcoded registry', () => {
  const [tag] = index([article('An article', ['  Content   Strategy  '])]);
  assert.equal(tag.name, 'Content Strategy');
  assert.equal(tag.slug, 'content-strategy');
  assert.equal(tag.href, '/drawing-board/topics/content-strategy');
  assert.deepEqual(tag.posts[0].tags, [{ name: tag.name, slug: tag.slug, href: tag.href }]);
});

test('removing or unpublishing the last matching article removes the tag', () => {
  const modules = [article('One article', ['Research'])];
  assert.equal(index(modules).length, 1);
  modules[0].frontmatter.status = 'draft';
  assert.deepEqual(index(modules), []);
  assert.deepEqual(index([]), []);
});

test('untagged articles remain published without inventing a tag', () => {
  const posts = prepareDrawingBoardPosts([article('Untagged', undefined)]);
  assert.equal(posts.length, 1);
  assert.deepEqual(posts[0].tags, []);
  assert.deepEqual(groupDrawingBoardTags(posts), []);
});

test('invalid tag data fails clearly instead of creating broken or duplicate links', () => {
  for (const invalid of ['Accessibility', null, [null], [''], ['!!!'], ['Accessibility', 'Accessibility']]) {
    assert.throws(() => index([article('Invalid tags', invalid)]), /Drawing Board tag/);
  }
  assert.throws(() => index([
    article('First', ['Design Systems']),
    article('Second', ['Design-Systems'])
  ]), /share the URL/);
});

test('publishing rejects unsupported statuses and colliding article URLs', () => {
  assert.throws(() => index([article('Invalid', [], { status: 'publish' })]), /status must be/);
  assert.throws(() => index([article('Same title', []), article('Same-title', [])]), /unique, nonempty URL slug/);
});
