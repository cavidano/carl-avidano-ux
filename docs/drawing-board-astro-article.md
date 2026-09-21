# Goodbye Gatsby, hello Astro

Local editorial draft requested September 21, 2026. The subject is the **Natura11y documentation migration**, not the portfolio migration. The headline was supplied by the user. The matching [Confluence article](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23953409) was added under The Drawing Board on September 21, with the exact local text, July 8 date, body figure, caption, alt text, and links. It sits between the July 10 monorepo article and the March navigation article. The updated feature PNG with yellow hands is also attached; it remains separate from the article body, matching the website. The user approved making the corrected article live on September 21, 2026.

- Article: `src/content/drawing-board/goodbye-gatsby-hello-astro.mdx`
- Local route: `/drawing-board/goodbye-gatsby-hello-astro`
- `status: published` includes the approved article in local previews and production builds.
- Provisional editorial date: July 8, 2026, within the documented migration work and before the July 10 monorepo article. This is not a claim of a July 8 launch.
- The card description starts “How I…” and focuses on removing Gatsby-specific components and reusing Natura11y’s styles to simplify the documentation. The earlier “within days” framing has been removed. July 4–7 remains evidence of initial implementation work, not a claim that the entire project launched or was completed in four days.
- Feature: [Portfolio Figma frame 1252:1539](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1252-1539), 1800 × 900. Existing frame name is `drawing-board-goodby-gatsby-hello-astro`; the local PNG corrects “goodbye.” Exported through the native Figma PNG export because the connector's render omitted both emoji. Artwork is unchanged.
- Body figure: existing `natura11y-docs-masonry.jpg`, also used by the case study. It shows the rebuilt Backdrop and Color pages, not a before-and-after comparison.

## Evidence

Canonical source: `/Users/carlavidano/Sites/natura11y`.

- `518d1437` (July 4): Astro scaffolding, initially under `apps/docs-astro`.
- `10cb7689`, `dd2aa552`, `623b9645` (July 4): MDX content collection, layouts, and initial component examples.
- July 4–7 history: documentation conversion and component-by-component review, including code formatting, figures, copy behavior, and search.
- `8fb9b75c` (July 6): Expressive Code setup.
- Original author and commit timestamps agree: first Astro scaffold `518d1437` is July 4 at 06:29 EDT; documentation cleanup `d087aa08` and search work `8fe1c851` are July 7. These verify the work period, not the exact public launch date.
- Current `apps/docs/src/content.config.ts`, `layouts/DocsLayout.astro`, `components/ui/FigureExample/FigureExample.astro`, `components/ui/CodeBlock/CodeBlock.astro`, and `scripts/natura11y.ts`: content structure, code presentation, and Core behavior.
- Current `components/ui/SearchDocs/SearchDocs.astro`: React search island.
- Current Accordion documentation and the [Astro overview](https://docs.astro.build/en/concepts/why-astro/) checked September 21.

The user clarified the migration’s purpose on September 21: Gatsby had become a large, cumbersome dependency to update; Astro simplified maintenance and allowed the documentation interface to use Natura11y’s own styles directly, removing styles duplicated for the Gatsby setup. The goal is to make documentation easier to keep current as monorepo and AI-assisted workflows develop. Guidance and working examples were already presented together before the migration. Do not present that existing experience as a migration outcome, generalize this project’s maintenance experience to every Gatsby site, or invent performance measurements, quantified time savings, or user-testing results.

The user further confirmed that the migration removed the entire set of custom Gatsby-specific components in favor of lighter Astro components, retaining React islands where needed. Reducing unnecessary code and simplifying the system are the principal wins; preserve the relationship to the shared library ecosystem and monorepo. Current `SearchDocs.astro` renders `SearchDocsIsland` with `client:load`.

The revised article uses “Removing Gatsby-specific code” and “Keeping documentation close to the code” as its two sections. The figure caption identifies the post-migration pages without implying that examples and guidance were first brought together in Astro. The canonical docs entry point, `apps/docs/src/styles/global.scss`, imports `@natura11y/core/src/scss/index` directly. Preserve this distinction between reusing the system’s styles and introducing new documentation features.

## Local verification

### Rovo editorial review — September 21, 2026

The user supplied a Rovo narration transcript for this article. It is preserved, including transcription errors and repeated passages, on the separate child page [Rovo summary and editorial notes — Goodbye Gatsby, hello Astro](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24215553). That page also contains an edited summary, the selected refinements, and evidence notes. No recording file or audio URL was supplied; this is the transcript record.

Three paragraphs were refined in the MDX article and Confluence version 6: explain the search React island in plain language, connect shared styles to consistency, and tighten the goal of making documentation updates routine. The introduction still states that guidance and examples were already paired before the migration. The title, dates, image, caption, useful links, and monorepo context are unchanged. The current canonical search component and Core stylesheet import were rechecked. The summary introduces no new historical or measured claims.

Confluence read-back matches the revised local paragraphs, and the existing figure and alt text are preserved. The child page's original transcript matches the supplied text. The local production build passes. The user approved publishing these editorial refinements together with the shared Drawing Board listing cleanup on September 21, 2026.

### Earlier publication check

The corrected migration account was synchronized to Confluence version 5 on September 21. All article paragraphs, headings, the figure caption, and image description were compared against the MDX source after saving. The local preview renders the corrected copy. The build after the rewrite passes with zero errors, warnings, or hints; this validates rendering, not the historical claims, which are grounded in the user's account and the evidence above.

`npm run build` passes with zero errors, warnings, or hints. The draft route renders, the list orders July 8 between July 10 and March 9, and the generated canonical URL, article date, BlogPosting metadata, and 1200 × 600 social image match the frontmatter. The original feature PNG is 1800 × 900 and includes both waving hands.
