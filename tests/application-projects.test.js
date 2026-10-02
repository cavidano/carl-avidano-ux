import assert from 'node:assert/strict';
import test from 'node:test';
import { selectApplicationProjects, validateFeaturedProjects } from '../src/lib/applications/project-selection.js';

test('application curation reuses current case-study content and metadata while preserving its chosen order', () => {
  const projects = ['phoenix', 'natura11y', 'unicef'].map((slug) => ({
    slug,
    Content: () => `Current ${slug} body`,
    marqueeImage: { src: `${slug}.webp` },
    frontmatter: { title: slug, cardHeadline: `Current ${slug} heading`, description: 'Current description', isFeatured: true }
  }));
  const featured = ['unicef', 'phoenix'];
  const selected = selectApplicationProjects(projects, featured, 'example');
  assert.deepEqual(selected.map(({ slug }) => slug), ['unicef', 'phoenix', 'natura11y']);
  assert.deepEqual(selected.filter(({ frontmatter }) => frontmatter.isFeatured).map(({ slug }) => slug), featured);
  for (const project of selected) {
    const source = projects.find(({ slug }) => slug === project.slug);
    assert.equal(project.Content, source.Content);
    assert.equal(project.marqueeImage, source.marqueeImage);
    assert.deepEqual(project.frontmatter, { ...source.frontmatter, isFeatured: featured.includes(project.slug) });
  }
  projects[0].frontmatter.cardHeadline = 'Revised heading';
  projects[0].Content = () => 'Revised body';
  const updated = selectApplicationProjects(projects, featured, 'example').find(({ slug }) => slug === 'phoenix');
  assert.equal(updated.frontmatter.cardHeadline, 'Revised heading');
  assert.equal(updated.Content(), 'Revised body');
  assert.equal(projects[1].frontmatter.isFeatured, true, 'Application curation must not mutate the main selection');
});

test('application curation rejects missing, duplicate, or unknown case-study references', () => {
  for (const featured of [undefined, 'phoenix', ['missing'], ['phoenix', 'phoenix']]) {
    assert.throws(() => validateFeaturedProjects(featured, ['phoenix'], 'example'), /unique, existing/);
  }
  validateFeaturedProjects([], ['phoenix'], 'example');
});
