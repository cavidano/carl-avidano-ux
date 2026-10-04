import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';

const root = fileURLToPath(new URL('../', import.meta.url));
const directory = join(root, 'src/content/portfolio');
const output = join(root, 'output/hemingway');
mkdirSync(output, { recursive: true });

// Export authored prose, not figure captions, image descriptions, or MDX props.
const cleanProse = (value, slug) => {
  const cleaned = value
    .replace(/<FigureSingle\b[\s\S]*?<\/FigureSingle>/g, '')
    .replace(/<LinkOpenNew\b[^>]*\bLinkText=(['"])(.*?)\1[^>]*\/>/g, '$2')
    .replace(/(?<!!)\[([^\]]+)\]\([^\n)]+\)/g, '$1')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  assert(!/<\/?[A-Za-z][^>]*>|!\[/.test(cleaned), `${slug}: unsupported markup in prose; review the export before continuing.`);
  return cleaned;
};

const projects = readdirSync(directory).filter(file => file.endsWith('.mdx')).map(file => {
  const source = readFileSync(join(directory, file), 'utf8');
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  assert(frontmatter, `${file}: missing frontmatter`);
  return { slug: file.replace(/\.mdx$/, ''), source, data: parseYaml(frontmatter[1]) };
}).sort((a, b) => (a.data.sortOrder ?? 999) - (b.data.sortOrder ?? 999));

for (const { slug, source, data } of projects) {
  const blocks = [...source.matchAll(/<(TextBlock|CaseStudyOverview)\b[^>]*>([\s\S]*?)<\/\1>/g)];
  assert(blocks.length, `${slug}: no narrative blocks found`);
  const narrative = blocks.map(([, component, body]) => {
    const prose = cleanProse(body, slug);
    const results = component === 'CaseStudyOverview' ? data.caseStudy?.keyResults ?? [] : [];
    return [prose, ...results.map(({ stat, description }) => `- **${stat}:** ${description}`)].join(results.length ? '\n\n' : '');
  }).join('\n\n');
  const sourceHeadings = source.match(/^#{2,6} .+$/gm) ?? [];
  assert.deepEqual(narrative.match(/^#{2,6} .+$/gm) ?? [], sourceHeadings, `${slug}: heading was omitted or reordered`);
  const filename = `${slug}-case-study.md`;
  writeFileSync(join(output, filename), `# ${data.cardHeadline}\n\n${narrative}\n`);
  console.log(`${filename}: ${sourceHeadings.length} headings`);
}

const listing = readFileSync(join(root, 'src/pages/case-studies/index.astro'), 'utf8');
const heading = listing.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].trim();
const introduction = listing.match(/<header\b[^>]*>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/)?.[1].trim();
assert(heading && introduction, 'Case Studies heading or introduction is missing.');
const cards = projects.filter(({ data }) => data.isMainProject && data.published !== false);
const summaries = [`# ${heading}`, introduction, ...cards.map(({ data }) => `## ${data.title}\n\n### ${data.cardHeadline}\n\n${data.description}`)];
writeFileSync(join(output, 'case-study-summaries.md'), summaries.join('\n\n') + '\n');
console.log(`case-study-summaries.md: ${cards.length} cards in website order`);
