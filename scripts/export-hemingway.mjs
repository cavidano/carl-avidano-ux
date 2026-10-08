import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { prepareDrawingBoardPosts } from '../src/lib/drawing-board/rules.js';
import { applicationSites } from '../src/lib/applications/registry.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'output/hemingway');
const caseStudyOutput = join(output, 'case-studies');
const drawingBoardOutput = join(output, 'drawing-board');
for (const directory of [caseStudyOutput, drawingBoardOutput]) mkdirSync(directory, { recursive: true });

// Export authored prose, not figure captions, image descriptions, or MDX props.
const cleanProse = (value, slug) => {
  const cleaned = value
    .replace(/<FigureSingle\b[\s\S]*?<\/FigureSingle>/g, '')
    .replace(/<\/?ColumnList\b[^>]*>/g, '')
    .replace(/<LinkOpenNew\b[^>]*\bLinkText=(['"])(.*?)\1[^>]*\/>/g, '$2')
    .replace(/(?<!!)\[([^\]]+)\]\([^\n)]+\)/g, '$1')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  assert(!/<\/?[A-Za-z][^>]*>|!\[/.test(cleaned), `${slug}: unsupported markup in prose; review the export before continuing.`);
  return cleaned;
};

const readCollection = (collection) => {
  const directory = join(root, 'src/content', collection);
  return readdirSync(directory).filter(file => file.endsWith('.mdx')).map(file => {
    const source = readFileSync(join(directory, file), 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    assert(frontmatter, `${file}: missing frontmatter`);
    return { slug: file.replace(/\.mdx$/, ''), source, data: parseYaml(frontmatter[1]) };
  });
};

const exportNarrative = ({ slug, source, data }, directory, filename, title) => {
  assert(typeof title === 'string' && title.trim(), `${slug}: missing headline`);
  const blocks = [...source.matchAll(/<(TextBlock|CaseStudyOverview)\b[^>]*>([\s\S]*?)<\/\1>/g)];
  assert(blocks.length, `${slug}: no narrative blocks found`);
  const narrative = blocks.map(([, component, body]) => {
    const prose = cleanProse(body, slug);
    const results = component === 'CaseStudyOverview' ? data.caseStudy?.keyResults ?? [] : [];
    return [prose, ...results.map(({ stat, description }) => `- **${stat}:** ${description}`)].join(results.length ? '\n\n' : '');
  }).join('\n\n');
  const sourceHeadings = source.match(/^#{2,6} .+$/gm) ?? [];
  assert.deepEqual(narrative.match(/^#{2,6} .+$/gm) ?? [], sourceHeadings, `${slug}: heading was omitted or reordered`);
  writeFileSync(join(directory, filename), `# ${title}\n\n${narrative}\n`);
  console.log(`${filename}: ${sourceHeadings.length} headings`);
};

const projects = readCollection('portfolio').sort((a, b) => (a.data.sortOrder ?? 999) - (b.data.sortOrder ?? 999));
for (const project of projects) {
  exportNarrative(project, caseStudyOutput, `${project.slug}-case-study.md`, project.data.cardHeadline);
}

const listing = readFileSync(join(root, 'src/pages/case-studies/index.astro'), 'utf8');
const heading = listing.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].trim();
const introduction = listing.match(/<header\b[^>]*>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/)?.[1].trim();
assert(heading && introduction, 'Case Studies heading or introduction is missing.');
const cards = projects.filter(({ data }) => data.isMainProject && data.published !== false);
const summaries = [`# ${heading}`, introduction, ...cards.map(({ data }) => `## ${data.title}\n\n### ${data.cardHeadline}\n\n${data.description}`)];
writeFileSync(join(caseStudyOutput, 'case-study-summaries.md'), summaries.join('\n\n') + '\n');
console.log(`case-study-summaries.md: ${cards.length} cards in website order`);

// Include drafts for editing without changing their website publication state.
const articles = readCollection('drawing-board');
// Carl excluded this article from Hemingway only; retain its local MDX draft.
const excludedArticles = new Set(['refreshing-the-ccf-logo']);
for (const article of articles.filter(({ slug }) => !excludedArticles.has(slug))) {
  exportNarrative(article, drawingBoardOutput, `${article.slug}.md`, article.data.title);
}

const articleListing = readFileSync(join(root, 'src/pages/drawing-board/index.astro'), 'utf8');
const articleHeading = articleListing.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].trim();
const articleIntroduction = articleListing.match(/^const introduction = '([^\n]*)';$/m)?.[1];
assert(articleHeading && articleIntroduction, 'Drawing Board heading or introduction is missing.');
const publishedArticles = prepareDrawingBoardPosts(articles.map(({ data }) => ({ frontmatter: data })));
const articleSummaries = [
  `# ${articleHeading}`,
  articleIntroduction,
  ...publishedArticles.map(({ frontmatter }) => `## ${frontmatter.title}\n\n${frontmatter.description}`)
];
writeFileSync(join(drawingBoardOutput, 'drawing-board-summaries.md'), articleSummaries.join('\n\n') + '\n');
console.log(`drawing-board-summaries.md: ${publishedArticles.length} cards in website order`);

// Keep the main site's homepage introduction, blurbs, and About copy together for writing review.
const homepageSource = readFileSync(join(root, 'src/pages/index.astro'), 'utf8');
const homepageHeadline = homepageSource.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].trim();
const homepageBadges = [...homepageSource.matchAll(/<span class="badge\b[^"]*">([^<]+)<\/span>/g)].map(([, text]) => text);
assert(homepageHeadline && homepageBadges.length, 'Main homepage headline or badges are missing.');
const homepageBlurbs = [...homepageSource.matchAll(/<h3\b[^>]*>(Who I am|What I do)<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/g)];
assert.deepEqual(homepageBlurbs.map(([, title]) => title), ['Who I am', 'What I do'], 'Main homepage blurbs are missing or reordered.');

const aboutSource = readFileSync(join(root, 'src/content/pages/about.mdx'), 'utf8');
const aboutFrontmatter = aboutSource.match(/^---\r?\n([\s\S]*?)\r?\n---/);
assert(aboutFrontmatter, 'Main About frontmatter is missing.');
const aboutData = parseYaml(aboutFrontmatter[1]);
const aboutNarrative = cleanProse(aboutSource.slice(aboutFrontmatter[0].length), 'main-about');
assert(!/^#{5,6} /m.test(aboutNarrative), 'About headings are too deeply nested for the combined export.');
assert(Array.isArray(aboutData.skills) && aboutData.skills.every(skill => typeof skill === 'string'), 'Main About skills are missing.');
const { name, pronouns, role, experience, location, email, phone } = aboutData.profile;
assert([name, pronouns, role, experience, location, email, phone].every(value => typeof value === 'string'), 'Main About profile is incomplete.');

const aboutPage = readFileSync(join(root, 'src/pages/about.astro'), 'utf8');
const skillsHeading = aboutPage.match(/id="skills-and-expertise"[\s\S]*?<h2\b[^>]*>([^<]+)<\/h2>/)?.[1].trim();
const workHistoryHeading = aboutPage.match(/id="work-history"[\s\S]*?<h2\b[^>]*>([^<]+)<\/h2>/)?.[1].trim();
const toolsHeading = aboutPage.match(/id="skills-and-software"[\s\S]*?<h2\b[^>]*>([^<]+)<\/h2>/)?.[1].trim();
const contactHeading = aboutPage.match(/id="get-in-touch"[\s\S]*?<h2\b[^>]*>([^<]+)<\/h2>/)?.[1].trim();
const resumeLabel = aboutPage.match(/<span class="button__text">([^<]+)<\/span>/)?.[1];
const linkedinLabel = aboutPage.match(/<SiteLink\b[^>]*href="https:\/\/www\.linkedin\.com\/[^"]+"[^>]*>([^<]+)<\/SiteLink>/)?.[1];
assert(skillsHeading && workHistoryHeading && toolsHeading && contactHeading && resumeLabel && linkedinLabel, 'Main About page labels are missing.');
assert(Array.isArray(aboutData.workHistory) && aboutData.workHistory.every(({ organization, role, period, highlights }) =>
  [organization, role, period].every(value => typeof value === 'string') &&
  Array.isArray(highlights) && highlights.every(value => typeof value === 'string')
), 'Main About work history is incomplete.');
assert(Array.isArray(aboutData.tools) && aboutData.tools.every(tool => typeof tool === 'string'), 'Main About tools are incomplete.');

const aboutCopy = (data, narrative) => [
  '## About',
  `${data.profile.name}\n\n${data.profile.pronouns}`,
  [data.profile.experience, `Based in ${data.profile.location}`].map(label => `- ${label}`).join('\n'),
  narrative.replace(/^(#{1,4}) /gm, '##$1 '),
  `### ${skillsHeading}\n\n${data.skills.map(skill => `- ${skill}`).join('\n')}`,
  `### ${toolsHeading}\n\n${data.tools.map(tool => `- ${tool}`).join('\n')}`,
  `### ${workHistoryHeading}`,
  ...data.workHistory.map(({ organization, role, period, highlights }) =>
    `#### ${role} | ${organization}\n\n${period}\n\n${highlights.map(highlight => `- ${highlight}`).join('\n')}`
  ),
  `### ${contactHeading}\n\n- ${data.profile.email}\n- ${linkedinLabel}\n- ${data.profile.phone}`,
  resumeLabel
];
const mainSiteCopy = [
  '# Main website copy',
  '## Homepage',
  `### ${homepageHeadline}`,
  homepageBadges.map(text => `- ${text}`).join('\n'),
  ...homepageBlurbs.map(([, title, body]) => `### ${title}\n\n${cleanProse(body, 'main-homepage')}`),
  ...aboutCopy(aboutData, aboutNarrative)
];
writeFileSync(join(output, 'main-site.md'), mainSiteCopy.join('\n\n') + '\n');
console.log(`main-site.md: homepage introduction and blurbs, full About narrative, ${aboutData.skills.length} skills, ${aboutData.tools.length} tools, and ${aboutData.workHistory.length} experience entries`);

// Include every application, preserving its introduction and any future About override.
const applicationOutput = join(output, 'applications');
mkdirSync(applicationOutput, { recursive: true });
for (const siteId of applicationSites) {
  const { home } = JSON.parse(readFileSync(join(root, `src/sites/${siteId}/site.json`), 'utf8'));
  const applicationName = home.title.split(' • ')[0];
  const overridePath = join(root, `src/sites/${siteId}/pages/about.mdx`);
  let applicationAboutData = aboutData;
  let applicationAboutNarrative = aboutNarrative;
  if (existsSync(overridePath)) {
    const source = readFileSync(overridePath, 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    assert(frontmatter, `${siteId} About frontmatter is missing.`);
    const overrides = parseYaml(frontmatter[1]);
    applicationAboutData = { ...aboutData, ...overrides, profile: { ...aboutData.profile, ...overrides.profile } };
    applicationAboutNarrative = cleanProse(source.slice(frontmatter[0].length), `${siteId}-about`);
  }
  writeFileSync(join(applicationOutput, `${siteId}.md`), [
    `# ${applicationName} website copy`,
    '## Homepage',
    ...(!home.panelHeading ? [[home.profileGreeting ?? aboutData.profile.name, home.experience, home.location].join(' · ')] : []),
    `### ${home.headline}`,
    ...(home.panelHeading ? [
      [home.role, home.experience, home.location].join(' · '),
      `### ${home.panelHeading}`
    ] : []),
    ...(home.introduction ? [cleanProse(home.introduction, `${siteId}-introduction`)] : []),
    `### ${home.projectsHeading}`,
    `### ${home.whoHeading}\n\n${home.who}`,
    `### ${home.whatHeading}\n\n${home.what}`,
    ...aboutCopy(applicationAboutData, applicationAboutNarrative)
  ].join('\n\n') + '\n');
  console.log(`applications/${siteId}.md: application introduction, two homepage blurbs, and full About copy`);
}
