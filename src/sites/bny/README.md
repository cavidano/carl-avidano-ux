# BNY application site

**Current architecture — October 1, 2026:** Case studies now render directly from the shared `src/content/portfolio/*.mdx` sources. Edit them once for every site. `projects.json` contains only featured project IDs and their order. `articles.json` does the same for homepage articles; every site’s full Drawing Board reads the shared main collection. Complete cards, headers, case studies, and articles use the same sources/templates everywhere. Landing/About copy, artwork, selections, and résumé stay application-specific. The historical independent-copy instructions below are superseded. Current case-study writing belongs on the main Confluence pages linked in `context/case-studies.md`.

Preview: http://127.0.0.1:4321/bny

This is an independently editable content copy of the public portfolio. The homepage has a BNY-branded NYC backdrop and an introduction connecting the role to Carl’s approach to product design and systems thinking. There is no separate Case Studies navigation item or listing step; the curated case studies are at `/bny#projects`. Changes in this folder do not change the main site's content.

The local case-study drafts feature NYC OTI, UNICEF, Natura11y, and Phoenix, in that order. Carl approved this selection on September 22, 2026. Each uses the shared Challenge, Solution, Results, and My role opening, followed by supporting work and a reflection. The copy emphasizes complex workflows, collaboration, reusable systems, and research. Existing figures, captions, and project colors are preserved. Detailed mentorship and technical-tradeoff examples are deferred until Carl is ready to supply them; this pass establishes the structure and overall story. Other copied case studies remain available for later editing but are not featured on the homepage.

## Where to edit

| Content | File |
| --- | --- |
| Homepage headline, introduction, related-project introduction, buttons, and SEO description | `site.json` → `home` (`projectsIntroduction` controls the sentence above the case studies) |
| Curated homepage article introduction | `site.json` → `home.articlesIntroduction` |
| Full Drawing Board introduction | `site.json` → `drawingBoard.introduction` |
| About copy, skills, role title, contact information | `pages/about.mdx` |
| Case studies and card descriptions | `portfolio/*.mdx` |
| Articles and their card descriptions | `drawing-board/*.mdx` |
| Decorative skyline image | `site.json` → `backgroundImage` |
| Shared background dimensions, crop, opacity, and fade | `../../components/Applications/style.scss` and `../../pages/[site]/background.css.ts` |
| Logo placement | `Hero.astro` |
| Maximum logo width in pixels (both themes) | `Hero.astro` → `logoMaxWidth` (currently `840`; height is calculated automatically and the logo shrinks to fit smaller screens) |
| BNY-specific résumé | `../../../public/bny/resume-carl-avidano.pdf` |

In a case study's frontmatter, `isFeatured: true` selects it for the homepage project feed, and `sortOrder` controls its position. Set `published: false` to omit it from this application site entirely. The copied `isMainProject` values and `site.json` → `caseStudies` listing text do not control this microsite's homepage; they belong to the original site's separate listing structure.

All published Drawing Board articles remain available under `/bny/drawing-board`, newest first, with tags and related articles drawn from the full collection. For the curated homepage, add `isFeatured: true` and a numeric `sortOrder` to a BNY article's frontmatter, just as with case studies. The homepage currently features the AI-ready monorepo, navigation components, and contrast themes, in that order. Homepage selection is independent of publication dates and does not limit the article routes or archives. Article publication rules still apply: `status: published` / `status: draft` and local `preview: true`; featuring a draft does not publish it. Article URLs come from their titles. The main homepage continues to show its three newest articles.

The shared header, page templates, Natura11y styles, image components, and interaction behavior remain in `src/components` and `src/layouts`. They are shared deliberately: a navigation or accessibility fix should apply everywhere. Edit content here; edit shared components only when the change should affect both sites. The introduction lives in `src/components/Applications/ApplicationHero.astro`, and `ApplicationBackground.astro` supplies the decorative CSS artwork. Their shared styles live in the adjacent `style.scss`. `Hero.astro` keeps BNY’s editable logo size and copy. The image path lives in `site.json` → `backgroundImage`; shared SCSS controls the same background treatment for every employer. A BNY-only layout addition belongs in this folder.

## Links and media

Write ordinary internal links such as `/case-studies/phoenix`, `/about`, or `/drawing-board`. `SiteLink.astro` scopes them to `/bny` at build time, including the logo, navigation, cards, tags, related articles, Markdown links, and résumé download. A link to the `/case-studies` listing resolves to the homepage's `#projects` section instead. Individual case-study URLs stay under `/bny/case-studies/`. New custom components should use `SiteLink` for links too. External links and same-page anchors keep their destinations.

Images and animations initially use the existing shared assets. If an image needs a BNY-specific edit, save a new file and update the BNY MDX reference; do not overwrite a shared original. The résumé already has a separate copy under `public/bny`.

### Résumé download

The BNY About page downloads `/bny/resume-carl-avidano.pdf`, served directly from `public/bny/resume-carl-avidano.pdf`. This is the tailored résumé for job 82305, copied on September 22, 2026 from `/Users/carlavidano/Projects/Job Applications/CVs/BNY/_PDF/carl-avidano-resume-bny-82305.pdf`. The main site continues to use `public/resume-carl-avidano.pdf`.

After exporting an updated BNY résumé from InDesign, replace the BNY public file with that PDF. Keep the public filename unchanged so the existing download button and direct links continue to work. The InDesign export and the website asset are separate files; exporting from InDesign alone does not update the site.

Create a new branch for each future application site and use an official SVG logo with light- and dark-mode variants. Follow the same résumé convention: `public/<application>/resume-carl-avidano.pdf`, with its résumé links scoped to `/<application>/resume-carl-avidano.pdf`. Add its tailored export before publishing, and verify that its About page downloads that file rather than the main site's résumé.

All generated BNY pages are `noindex, follow` and excluded from the sitemap. This is search-indexing control, not authentication. The site is local until Carl requests deployment. `/bny/404` is available, but an unknown URL on a static production host still uses that host's configured error page.

## Review and verification

1. Run `npm run dev` and review `/bny`.
2. Run `npm run build` for unit tests, Astro checks, and production output.
3. Run `npm run check:site-links` to audit generated BNY pages, links, assets, metadata, and sitemap exclusion.

The job requirements and evidence map are in [application-brief.md](application-brief.md). Before rewriting audience-facing copy, follow the root `AGENTS.md`: read the relevant current Confluence pages, preserve approved facts, and use Jared Spool's portfolio guidance.

## Logo source

`public/bny/bny-logo-light.svg` and `bny-logo-dark.svg` preserve the SVG paths from the light and dark header logos on [BNY's official website](https://www.bny.com/corporate/global/en.html), retrieved September 22, 2026. `Hero.astro` displays the navy wordmark in light mode and the white wordmark in dark mode using the site's existing theme classes.

## Background and introduction

The skyline is a decorative CSS background only on the BNY landing page. It uses a viewport-height frame at the top of the document with a downward fade. Interior pages omit the decorative layer and its image stylesheet. It scrolls out of view with the page. The shared component hides this empty decorative layer from assistive technology and removes it in forced-colors mode; the logo remains a named image with its matching protected surface.

The introduction uses normal-flow flex layout, `justify-content: space-between`, and `min-height: 85svh`. The header stays at the top and the introduction at the bottom when space allows; longer content grows the section. A gradient on the header wrapper protects navigation readability. The wide container, logo dimensions, content padding, and following divider retain their original spacing. Application pages allow reflow at 320 CSS pixels.

The skyline uses the common 20% opacity in both themes and a top-aligned cover crop. `/<application>/background.css` supplies Astro-optimized 2:1 WebP variants at 640×320, 1280×640, 1920×960, and 2000×1000; shared `Applications/style.scss` controls presentation. No new navigation or theme JavaScript is added.

Photograph supplied by Carl on September 22, 2026: `images/new-york-city-at-night.png`. The original file is preserved unchanged; Astro produces responsive WebP variants. Photographer attribution has not been supplied. This replaces the initial Unsplash image and its credit.
