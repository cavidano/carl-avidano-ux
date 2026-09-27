# Chromatic copy review

September 26, 2026. Branch: `codex/application-copy-review`.

## Current editable copy

[Chromatic — Application website copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28540930), under [Custom Applications](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28442625).

The page contains the full landing and About copy, featured project descriptions, all eight complete case studies, role statements, results, captions, and image descriptions. A separate editorial table connects job requirements to the evidence. Approved Drawing Board article bodies remain in their existing collection; application selections are recorded on the application page.

The Confluence copy was exported from the rendered local review build and read back after saving. All prose, heading text, captions, image descriptions, and links were checked against the export. Formatting whitespace differs; substantive text matches. Read the current Confluence page before future edits because Carl may revise it there. Synchronization is explicit, not automatic.

## Editorial direction

- Open conversationally with the specific role and a credible connection to Carl's experience.
- Keep the greeting in the paragraph, with a capability-focused main headline.
- Introduce the curated work once. Use capability/problem-focused card headlines, with the project name retained as a smaller label.
- Give each card a contribution and supported outcome. Preserve the landing page’s Who I am and What I do sections, with their About Me button, before the Drawing Board.
- Avoid repeating the disability story and framework names throughout the opening. The Datadog About page contains one relevant disability statement; the other introductions do not use it.
- Preserve detailed project evidence and credit collaborators. Distinguish research recommendations from shipped results and client-reported metrics from individual causal claims.
- Preserve the existing featured project order. All eight cases remain independently editable in this application.

## September 27 restoration

Restored the original Who I am / What I do section and About Me button position across all four applications. Restored Chromatic’s third featured Drawing Board article. The earlier removal was an unauthorized structural change during a copy revision; it is not the intended design. The approved greeting, revised case-study copy, and card titles remain. The Confluence landing-page copy was synchronized to this restored structure.

## Status and validation

The application site remains a local draft. No publication or application submission occurred.

Website copy only: no résumé or cover-letter source, export, or download asset was changed. The main website's writing and canonical Confluence case-study pages remain unchanged.

Both review and production builds passed the existing 23 tests, Astro checks, and site-link/isolation checks. The review build checked 121 pages across the main website and four applications; production checked 55 pages and included BNY only. Desktop/mobile visual review checked the revised introductions and cards.

## Local sources

- `site.json`: introduction, curated-work introduction, metadata, and navigation labels.
- `pages/about.mdx`: background, skills, and contact details.
- `portfolio/*.mdx`: card titles/descriptions, case-study headings, narrative, role, and results.
- `job-evidence-map.md`: requirement mapping and known limitations.

Current shared components keep all links in this application's URL space. These copy edits do not authorize a deployment.
