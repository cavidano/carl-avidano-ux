# Chromatic copy review

**October 5 — shared copy baseline (Confluence v8, local review):** Carl requested resetting Who I am, What I do, and About across all four application sites to the latest main-site copy. The two homepage blurbs match `src/pages/index.astro` exactly. All applications inherit the full default About page from `src/content/pages/about.mdx`; removed the Accenture, Datadog, and Chromatic overrides. Removed the full-collection link from every application homepage. Employer introductions, branding, curated selections, résumé files, and publication status are preserved. Current and saved editor Confluence copies match the requested changes. Hemingway now exports all four applications to `output/hemingway/applications/`. Review build passed 27 tests, zero Astro diagnostics, and the 117-page audit; full rendered About text and scoped résumé links match across all four sites. Not committed or deployed. This supersedes the older tailored-About and collection-link directions below.

**October 4 — curated collection link (Confluence v7):** Changed the project introduction from “tailored” to “selected” and added “View all case studies on my main website,” linking to `https://carlavidano.com/case-studies`. Main and saved editor copies were updated. Existing project selection, About, and other employer copy are preserved. Mr. Ellie Pooh is not featured; shared case-study routes remain available. The shared update is included in release `c8e5631`. BNY is live and verified; the other application sites retain their draft publication status.


**Current architecture — October 1, 2026 (Confluence v6 verified):** Case studies now render directly from the shared `src/content/portfolio/*.mdx` sources. Edit them once for every site. `projects.json` contains only featured project IDs and their order. `articles.json` does the same for homepage articles; every site’s full Drawing Board reads the shared main collection. Complete cards, headers, case studies, and articles use the same sources/templates everywhere. Landing/About copy, artwork, selections, and résumé stay application-specific. The historical independent-copy instructions below are superseded. Current case-study writing belongs on the main Confluence pages linked in `context/case-studies.md`.

Updated September 27, 2026. Branch: `codex/application-copy-review`.

## Current editable copy

[Chromatic — Application website copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28540930), under [Custom Applications](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28442625).

The page contains the landing and About copy, featured project descriptions, and links to the eight shared main case studies. The main pages own the narrative, role, results, captions, and image descriptions. A separate editorial table connects job requirements to the evidence. Approved Drawing Board article bodies remain in their existing collection; application selections are recorded on the application page.

The Confluence copy was exported from the rendered local review build and read back after saving. All prose, heading text, captions, image descriptions, and links were checked against the export. Formatting whitespace differs; substantive text matches. Read the current Confluence page before future edits because Carl may revise it there. Synchronization is explicit, not automatic.

## Editorial direction

- Open conversationally with the specific role and a credible connection to Carl's experience.
- Keep the greeting in the paragraph, with a capability-focused main headline.
- Introduce the curated work once. Use the same complete card as the main site, with the project name, shared headline, description, image, and button.
- Give each card a contribution and supported outcome. Preserve the landing page’s Who I am and What I do sections, with their About Me button, before the Drawing Board.
- Avoid repeating the disability story and framework names throughout the opening. The Datadog About page contains one relevant disability statement; the other introductions do not use it.
- Preserve detailed project evidence and credit collaborators. Distinguish research recommendations from shipped results and client-reported metrics from individual causal claims.
- Preserve the existing featured project order. All cases render from the shared main MDX; `projects.json` controls the featured selection.

## September 27 restoration

Restored the original Who I am / What I do section and About Me button position across all four applications. Restored Chromatic’s third featured Drawing Board article. The earlier removal was an unauthorized structural change during a copy revision; it is not the intended design. The approved greeting remains. The case-study and card restoration below supersedes the subsequent rewrite. The Confluence landing-page copy was synchronized to this restored structure.

## September 27 case-study recovery

At Carl’s request, restored all eight application case-study MDX files exactly from `0e0b4fe`, the checkpoint immediately before the broad copy rewrite in `de71dec`. That checkpoint already includes this application’s earlier tailoring. Restored `ProjectListView.astro` and `Pages/ProjectPage.astro` from the same checkpoint, returning project names to the card headings. Across the four applications, all 32 MDX files and both components were verified byte for byte against that commit.

The approved greeting, Who I am / What I do sections, About Me button position, three featured Drawing Board articles, and current About-page copy are preserved. Only the featured-card and complete-case-study portions of this application’s Confluence page were replaced, then read back and checked against the restored rendered copy. The surrounding Confluence copy is preserved.

## Status and validation

The application site remains a local draft. No publication or application submission occurred.

Website copy only: no résumé or cover-letter source, export, or download asset was changed. The main website's writing and canonical Confluence case-study pages remain unchanged.

Both review and production builds passed the existing 23 tests, Astro checks, and site-link/isolation checks. The review build checked 121 pages across the main website and four applications; production checked 55 pages and included BNY only. Desktop/mobile visual review checked the revised introductions and cards.

## Local sources

- `site.json`: introduction, curated-work introduction, metadata, and navigation labels.
- `pages/about.mdx`: background, skills, and contact details.
- `projects.json` and `articles.json`: ordered homepage selections. The canonical `src/content/` collections hold all case-study and article copy.
- `job-evidence-map.md`: requirement mapping and known limitations.

Current shared components keep all links in this application's URL space. These copy edits do not authorize a deployment.
