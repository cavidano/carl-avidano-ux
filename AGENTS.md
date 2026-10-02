# Project context

At the start of a new conversation in this project, read [the context index](context/README.md). It records the application workflow, Confluence writing pages, Jared Spool references, and Carl's working preferences. Follow Carl's pace and use the saved context instead of asking him to repeat established information.

Save durable background and reusable guidelines in `context/`, updating the relevant existing file and its index. Keep employer-specific records with their application. When Carl is only establishing context or says no work is needed yet, confirm the requested information without starting production or pressing for the next role.

Keep the main homepage's copy and markup directly editable in `src/pages/index.astro`. Carl asked for simple, readable source. Share reusable components where useful, but do not route the main homepage through the application homepage template or move its prose into application configuration.

Keep the main Case Studies index's copy, metadata, and page markup directly editable in `src/pages/case-studies/index.astro` too. Do not recreate a `CaseStudiesPage` wrapper or move this page's prose into `site.json`. Reuse the shared project-card renderer and individual case-study MDX sources.

Keep main-page SEO wording in frontmatter variables named `seoTitle` and `seoDescription`, then pass those values to `Layout` through its `title` and `description` props. The page owns its metadata wording; the layout renders the tags. Preserve existing wording when making organization-only changes.

The main About page and Drawing Board listing follow the same rule: edit `src/pages/about.astro` and `src/pages/drawing-board/index.astro` directly. Every main and application Drawing Board listing and topic route reuses that index, passing filtered posts when needed. Do not recreate an application Drawing Board template or per-application listing copy. Keep the optional application About template in `src/components/Applications/`, with its heading spacing styled there rather than through a single-heading component. Do not restore the removed main About MDX or main `site.json` copy lookup.

# Writing and editorial sources

## Component organization

- Keep reusable components focused on meaningful layout, content, or behavior. Do not create a component solely to add a spacing class to one element.
- Going forward, use `ComponentName/index.astro` for the main component in a dedicated component folder, with `style.scss` alongside it when needed. Keep supporting components descriptively named. Use explicit `/index.astro` imports. Apply this when creating or reorganizing a component folder; existing filenames do not require a bulk rename.
- Keep the Drawing Board's row card and stacked card as separate templates in `DrawingBoard/PostCard/`: `PostCardRow.astro` for listings and `index.astro` for homepage and related-article grids. Both read the same dynamic article data and use Natura11y's responsive utilities. Do not combine their different layouts behind a `compact` flag or another presentation switch.
- Prefer `const` arrow functions for JavaScript helpers and callbacks where behavior permits, including exported helpers. Retain other function forms when required for dynamic `this`, `arguments`, construction, generators, or necessary hoisting. Check initialization order when converting declarations; preserve readable bodies and existing behavior.
- Group related helper files by feature within `src/lib/`, with filenames that describe their responsibilities. The Drawing Board helpers live together in `src/lib/drawing-board/` as `loader.js` and `rules.js`. Apply this convention consistently as related code is added or revised; avoid vague pairs such as `drawing-board.js` and `drawing-board-content.js`.
- Keep application helpers together in `src/lib/applications/`: `registry.js` for registered and retired sites, `paths.js` for scoped links, `copy.js` for landing-page copy loading, `about.js` for optional About overrides, and `project-selection.js` for featured project selection. The shared case-study loader remains in `src/lib/projects.js`.
- Keep component-specific styling in adjacent Sass files, following the `GlobalHeader`, `KeyResults`, and `CaseStudyOverview` folders. Keep the metadata description list inside `CaseStudyOverview`, with its styles in that component's Sass; it does not need a separate component. Put fixed layout values in Sass; use inline CSS custom properties when values genuinely come from page data, such as each project's theme colors.

## Case-study editing and Figma exports

- Keep case-study figure markup simple. Use the shared figure and theme components directly; do not add review-only divs, graphic IDs, or bookkeeping comments. Put source and review notes in `context/` and link to existing heading anchors. Retain containers required for layout, backgrounds, or behavior.
- Preserve approved section structure, research-method lists, and wording outside the requested edit. Shortening an example does not authorize removing a list or narrowing the project's story to that example. Identify the exact edits instead of silently expanding scope.
- Figma previews and screenshots are for inspection only. Never use them as website graphics. Export the original frame as a production asset at sufficient resolution for its rendered size and high-density displays; preserve its composition, transparency, backgrounds, and proportions. Verify the exported file dimensions and the browser's selected responsive image before reporting completion.
- In `FigureSingle`, standalone images must render directly inside `<figure>`. The native Astro MDX processor applies `scripts/figure-images.mjs` before image optimization to remove image-only Markdown paragraph wrappers. Keep ordinary text paragraphs and caption paragraphs; fix figure structure at the compiler stage rather than hiding an image wrapper with CSS. The generated-site check guards this behavior.

Before drafting or revising any audience-facing copy for this website, read the current relevant Confluence pages in the **Carl Avidano UX (CAU)** space. This applies to Drawing Board articles, case studies, listing descriptions, and other website copy.

- Start with [The Drawing Board](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954562/The+Drawing+Board) for articles. For case studies and other website pages, find and read the corresponding main page in the same space.
- Read the relevant main page and comparable approved examples to understand the writing voice, level of detail, and structure. Read the matching local source too. Local notes and Rovo summaries do not substitute for checking the current Confluence copy.
- Follow the user's latest instructions and preserve approved wording unless a revision is requested. If the sources disagree, establish which revision was approved; do not silently overwrite newer work.
- Use the `avidano-writing` skill and read [the plain-language standard](context/plain-language.md) before drafting or revising copy. Apply it to Confluence application pages, portfolio copy, résumés, and cover letters. For articles, also follow [The Drawing Board conventions](context/drawing-board.md). Keep prose clear, conversational, specific, and supported by the user's account and verified work. Do not invent motivations, chronology, testing, or outcomes.
- Maintain one current working Confluence page per main case study, using the main pages linked in `context/case-studies.md`. Update those pages in place; do not create separate revised or enhanced draft pages. Use page history for earlier versions. Keep research and editorial source notes separate.
- Keep approved revisions synchronized between Confluence and the local website. Verify saved headings, paragraphs, links, figures, captions, and image descriptions. Use matching asset names and preserve original image proportions. Keep Rovo transcripts and editorial notes on separate reference pages.
- A Confluence working copy does not authorize publishing a website draft. Preserve its publication status until the user requests a launch.
- If Confluence cannot be reached, say so clearly. Do not claim to have reviewed its current writing or silently treat a cached copy as current.

These instructions supplement the user's global project and design-system requirements.

# Application microsites

- Every application must load case studies from the shared `src/content/portfolio/*.mdx` sources, including card names, headlines, descriptions, images, buttons, page headings, figures, captions, and results. Do not copy case-study MDX into application folders. Tailor landing pages and project selection; keep ordered featured slugs in each application’s `projects.json`. Case-study edits apply everywhere on the next publish.

- All Drawing Board listings and articles must read the shared `src/content/drawing-board/*.mdx` collection. New published articles and edits appear across every site on the next publish. Store only ordered homepage article IDs in each application’s `articles.json`; never copy article MDX.
- For copy revisions, preserve the existing page sections, their order, buttons, and featured article selection unless Carl asks to change them. The landing pages include “Who I am” and “What I do,” followed by their About Me button, before the Drawing Board. Use the same complete case-study cards as the main site, including project name, headline, description, image, and button. Tailor the landing introduction and project selection only; About copy may also differ by application: provide `pages/about.mdx` for an override, or omit it to reuse the main About page with scoped links. Do not turn a writing request into a layout redesign or rename projects.
- Keep employer-specific writing under [Custom Applications](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28442625) in Confluence, on a separate subpage for each employer. Read that application's current page and matching local sources before revising it. Keep the main website's Case Studies and Drawing Board collections separate; do not overwrite their copy with an employer-specific variant. The page links and latest synchronization status are in each application's `copy-review.md`.
- Create a new `codex/<application>-microsite` branch before starting each new application site. Keep existing work safe and separate; do not publish until Carl requests it.
- Use an SVG logo from the employer's official website or brand assets. Record its source, preserve its geometry, and verify the appropriate light- and dark-mode versions, including forced colors.
- Keep each application's content and résumé asset independently editable under `src/sites/<application>` and `public/<application>`. Share layout, Natura11y behavior, and link scoping. The logo's home link, navigation, cards, articles, and résumé download must stay within that application's URL space.
- Reuse `GlobalHeader` and its `NavigationLinks` component across the main site and every application. Mobile navigation uses Natura11y's standard flyout, with Home first and links scoped to the current site. Do not create separate menu implementations per application.
- When Carl confirms a rejection, remove that employer's applicant site from the project: its routes/content, dedicated public assets, unused employer-specific images, and obsolete site working notes. Preserve shared portfolio work and the separate Job Applications document archive. Remove its active registry entry and add its slug to `retiredApplicationSites` so the next authorized deployment removes the old server directory too. Follow `context/application-sites.md` and verify that the retired route is absent from both builds.

# Application documents

- Use the [Avidano job application documents skill](/Users/carlavidano/.codex/skills/avidano-job-applications/SKILL.md) for tailored résumés, cover letters, and InDesign/PDF work. Create a new folder for each application in the Job Applications collection; the current document root is `/Users/carlavidano/Projects/Job Applications/CVs/`. Keep the editable source and that application's `_PDF` exports together.
- Before reporting document status or starting edits, read `src/sites/<application>/application-documents.md` when present and the current application brief. Record exact source/export paths and distinguish copied layouts, tailored drafts, approved copy, verified PDFs, and submitted attachments. Exporting a résumé does not update its website download automatically.

# Portfolio positioning reference

For portfolio positioning, hiring-focused reviews, and case-study selection or structure, read [Jared Spool's September 2026 portfolio workshop guide](context/jared-spool-ux-portfolio-2026.md). Carl asked to keep this as an ongoing reference. Use it alongside the target job description, verified project evidence, current Confluence copy, and Carl's latest instructions.
