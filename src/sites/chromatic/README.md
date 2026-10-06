# Chromatic application site

**October 6 — shared banner, local:** This application now uses `Applications/IntroPanel/index.astro`: theme-aware official logos, one-sentence opening, and one alignment paragraph. Edit the target-role pill in `home.role` and banner copy in `home.panelHeading` and `home.introduction` in `site.json`; edit artwork and both logo sources in `Hero.astro`. The familiar homepage heading/pills precede it. The banner has natural height, `margin-y-6` internally, 25% artwork opacity, and no gradient. Relevant case studies has no extra introductory paragraph. This replaces the earlier hero treatment described below. Existing employer copy, project/article selections, résumé, and publication status are preserved. Hemingway is updated; Confluence awaits the later copy review.

**October 5 — current copy baseline:** Who I am, What I do, and the full About page use the latest main-site copy. Employer introductions and curated selections remain application-specific. There is no About override file; add one only for a requested future customization. The full-collection homepage link is removed. See [copy-review.md](copy-review.md) for Confluence/Hemingway synchronization and local-only status. Older tailored-About instructions below are historical.

**Current architecture — October 1, 2026:** Case studies now render directly from the shared `src/content/portfolio/*.mdx` sources. Edit them once for every site. `projects.json` contains only featured project IDs and their order. `articles.json` does the same for homepage articles; every site’s full Drawing Board reads the shared main collection. Complete cards, headers, case studies, and articles use the same sources/templates everywhere. Landing/About copy, artwork, selections, and résumé stay application-specific. The historical independent-copy instructions below are superseded. Current case-study writing belongs on the main Confluence pages linked in `context/case-studies.md`.

Local draft at `/chromatic`, branch `codex/chromatic-microsite`, September 26, 2026. Not published or submitted. Datadog's checkpoint is preserved at commit `4556e83` on its own branch and carried forward unchanged as part of this branch's base.

Read [application-brief.md](application-brief.md) and [job-evidence-map.md](job-evidence-map.md) for the complete-posting review, evidence, and open questions.

## Content

Independent main-site content copies live in `portfolio/` and `drawing-board/`. Featured projects: Natura11y, Visionlearning, NYC OTI, Phoenix. Featured articles: contrast themes, monorepo, navigation. Core narratives and figures retain approved wording; the Natura11y result drops the outdated CCF dependency claim. All article publication states are preserved.

`site.json` holds the introduction and summaries. `pages/about.mdx` leads with lived experience and describes hands-on systems work, adoption, research, and mentoring. The résumé download is still general; see [application-documents.md](application-documents.md).

## Official assets

Retrieved September 26, 2026:

- Dark-mode logo: inline Home-link SVG from [Chromatic's homepage](https://www.chromatic.com/), extracted to `public/chromatic/chromatic-logo-dark.svg`.
- Light-mode logo: inline Home-link SVG from [Chromatic's documentation](https://www.chromatic.com/docs/), extracted to `public/chromatic/chromatic-logo-light.svg`.
- Both original SVGs retain their `0 0 120 24` viewBox and path geometry. The official wordmark colors are white and `#2E3438`, respectively, with the original orange symbol. No redrawing or color substitution. Shared ApplicationHero styles provide a matching surface in forced colors.
- [Official chart-component illustration](https://www2.chromatic.com/_next/static/media/piechart.82d8b7f8.svg): linked from Chromatic's homepage. Preserved unchanged as `images/chromatic-chart-source.svg`; rasterized with Sharp to a 2000 × 2000 PNG for the existing image loader without redrawing or recoloring it. The Astro pipeline creates the standard 2:1 responsive crops. It is decorative employer artwork, not Carl's work. The landing-only layer stays at 20% opacity, scrolls, fades, and is hidden in forced colors.

Reuse the shared ApplicationHero, GlobalHeader, NavigationLinks, page templates, and SCSS. No employer-specific menu or layout implementation. Links stay within `/chromatic`, including the résumé and article navigation.

## Validation

Run `npm run build:review` for all draft routes and `npm run build` to check draft exclusion. Review the homepage, About, project order, mobile navigation, themes, images, and résumé URL. Keep publication and application submission separate from local draft review.

### Completed checks — September 26

- Review and production builds passed, including the existing test suite, Astro checks, and link/publication checks. Review output verified 121 pages and 88 application pages; production verified 55 pages, with only the published BNY application included.
- Desktop light/dark logos and introduction checked visually; mobile checked at 390 CSS pixels with no horizontal overflow. Shared flyout shows Home first, keeps links scoped, closes with Escape, and returns focus to Menu.
- About and Natura11y case-study pages omit the decorative background. About downloads `/chromatic/resume-carl-avidano.pdf`; the case study has no internal links outside the application or broken loaded images in the reviewed state.
- Logo SVGs match their official source markup byte-for-byte; general résumé copy matches its source. Article bodies remain unchanged from approved main-site copies.
- Forced-colors protection is inherited from the shared component and was inspected in code. Native Windows/forced-colors visual testing was not performed in this review.
