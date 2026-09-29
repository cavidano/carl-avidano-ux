# Project context

This folder holds the specific background, source material, and reusable guidelines for work in this project. Read this page at the start of a new conversation, then read the references relevant to Carl's request.

## Guides and source material

| File | Purpose |
| --- | --- |
| [Plain-language writing standard](plain-language.md) | Required writing guidance adapted from Digital.gov, with examples and a review checklist |
| [Jared Spool workshop guide](jared-spool-ux-portfolio-2026.md) | Paraphrased recommendations with page references and our application practices |
| [Nielsen Norman Group portfolio guidance](case-studies.md#nielsen-norman-group-portfolio-reference) | Saved 2019 article reference, seven-part case-study checklist, and how to apply it alongside Jared's guidance |
| [Portfolio selection and continuity correction](case-studies.md#september-28-selection-guidance-and-continuity-correction) | Main generalist portfolio versus application selection; UNICEF and Mr. Ellie Pooh retention discussion; supplied LinkedIn criteria; settled editing constraints |
| [Jared's original workshop PDF](Job-Search-2026-What-Makes-a-Great-UX-Portfolio.pdf) | Original source supplied by Carl; retained locally and excluded from Git |
| [Application sites](application-sites.md) | Setup, shared layout, documents, review, deployment, and retirement workflow |
| [Job search preferences and shortlist](job-search.md) | Carl's selection criteria and the dated employer discussion |
| [Case studies](case-studies.md) | Writing sources, main-site synchronization, compact project summaries, confirmed project evidence, review checkpoints, and portfolio comparisons with hiring evidence |
| [Visionlearning archive findings](case-studies.md#september-28-archive-review) | September 28 review of the old client archive: research, NGSS source annotations, scientific review, teaching/editor workflows, and visual evidence |
| [Case-study enhancement draft and corrections](case-studies.md#september-28-enhancement-draft-and-corrections) | Visionlearning story structure and visual selection, feedback map, confirmed module-authoring role and PNGs, and Phoenix peer-review figure removal |
| [LADRC restoration and collaboration](case-studies.md#september-28-ladrc-restoration-and-collaboration-correction) | Original compositions and backgrounds restored; limited wording changes, research-method clarity, and explicit team contributions |
| [Phoenix research wording and proto-personas](case-studies.md#september-28-phoenix-research-wording-and-proto-personas) | Restored methods list and Carl’s broad research composition replacing the Water Services emphasis; user stories separate; preserve approved structure |
| [Phoenix service-page section restored](case-studies.md#september-29-phoenix-service-page-section-restored) | User-supplied original heading and paragraph restored; payment-assistance journey removed; original wireframe collage retained |
| [Phoenix user stories and team alignment](case-studies.md#september-29-phoenix-user-stories-and-team-alignment) | User-story purpose clarified: shared understanding of users and coverage of needs by department |
| [One current Confluence copy per case study](case-studies.md#september-29-single-current-confluence-copy) | All eight main pages synchronized with current local work; four duplicate draft pages archived; revise main pages in place |
| [Phoenix wireframes and visual design](case-studies.md#september-29-wireframes-and-visual-design) | Approved section headings, department collage, original screenshot comparisons, and final launch-video placement |
| [Case-study graphic review list](case-study-graphics.md) | Phoenix, Visionlearning, and LADRC: exact preview locations, current graphics, source files, replacement candidates, and Carl’s review decisions |
| [The Drawing Board](drawing-board.md) | Writing conventions, article behavior, source evidence, and figure guidance |
| [Application tailoring evidence guide](application-tailoring-evidence-guide.md) | Additional research and our method for connecting job requirements to verified experience |

Keep durable context and guidelines here. Update an existing relevant file before creating another. Application writing lives in Confluence; employer-specific records stay in `src/sites/<application>/`. Keep shared technical guidance and useful editorial evidence in the relevant guide here; do not recreate `docs/` or add separate files for routine save/build logs. Dated notes describe the state when recorded and must not be treated as current approvals or instructions without checking.

## Application working context and continuity

The main website is Carl's generalist portfolio. Its homepage copy and markup live directly in [src/pages/index.astro](../src/pages/index.astro). Keep it straightforward to edit there. Application homepages use their own [template](../src/components/Applications/ApplicationHomePage.astro) and each employer's `site.json`; their setup must not force the main homepage through an application template or copy lookup. Project and article cards continue to use their corresponding MDX sources.

The main [Case Studies index](../src/pages/case-studies/index.astro) also owns its copy, metadata, and page markup directly. Carl requested this simplification on September 28, 2026, following the homepage change. Keep it directly editable; do not restore the removed `CaseStudiesPage` component or a separate JSON copy lookup. The shared card renderer reads the individual case-study MDX files.

Carl subsequently approved the same simplification for [About](../src/pages/about.astro) and [The Drawing Board](../src/pages/drawing-board/index.astro). Their main-site copy, metadata, and layout are directly editable in those files. Main topic routes reuse the Drawing Board index with filtered articles, keeping its introduction in one place. The former main About MDX and main `site.json` were removed; application About MDX and `site.json` files remain independent, rendered by templates under `src/components/Applications/`. This is a source-organization change preserving the existing wording and presentation; it has not yet been published. Production and review builds passed, including all 23 tests. A before/after comparison matched rendered content and checked attributes across 56 review pages and 23 production pages; browser checks confirmed the main pages at desktop/mobile widths, topic filtering, and BNY’s scoped About and résumé links.

**Release completed September 28, 2026:** The current website improvements are live at [carlavidano.com](https://carlavidano.com), initially deployed as `acb328b`; the subsequent separator adjustment is live as `593ed76`. See the [release verification](case-studies.md#recorded-editorial-state). Next: enhance the main case studies, then reuse them on the application sites with tailored landing pages and project selection.

**Current case-study workflow, September 29, 2026:** All eight main Confluence case-study pages match the current local work, including the Phoenix, Visionlearning, and LADRC revisions in progress. Four separate draft pages have been consolidated and archived. Edit the main pages in place; use their page history for earlier revisions. Research/source notes stay separate. This supersedes older instructions to edit enhanced drafts while retaining the main pages as a published baseline. See the [consolidation record](case-studies.md#september-29-single-current-confluence-copy). No website deployment or application-copy migration occurred.

**Current order of work, updated September 28, 2026:** Carl explicitly requested publication of the current website improvements before further case-study enhancements. That launch is complete, with existing application publication settings retained. Next, improve the main case studies and keep their Confluence pages aligned. For the later application update, tailor the landing page and select the most relevant projects, reusing the approved case studies without rewriting them for every employer. Existing application copies have not yet been migrated to this approach. A post-release reconciliation verified all eight main Confluence case studies and the listing on September 28, including the latest card headlines and page subtitles; see the [editorial state](case-studies.md#recorded-editorial-state) for scope and versions. The earlier headline/listing gaps are resolved. Synchronization does not mean every narrative has received a full rewrite; read the current sources again before later edits.

Carl confirmed on September 27, 2026 that he has **20+ years of experience**. He requested “15+ years of experience” for the homepage pill while discussing age bias in hiring. Treat that as a presentation choice, not a shortened career history; keep actual roles and dates accurate. The homepage pills also show “Based in New York” and an easily editable role, initially “Senior Product Designer.”

Carl is preparing a custom application for each job he pursues. His latest direction is to tailor the landing page and featured project selection, while reusing the approved case studies. Do not create a separate narrative rewrite for every employer unless he requests one. Carry this context into new conversations; read the saved guidance and relevant application records before asking Carl to repeat established information.

- **Writing workspace:** Draft and revise application copy in the **Carl Avidano UX (CAU)** Confluence space, under **Custom Applications**, with a separate page for each employer. Use the current Confluence copy and follow the [synchronization requirements](../AGENTS.md#writing-and-editorial-sources).
- **Tailoring approach:** Use [Jared Spool's saved workshop guide](jared-spool-ux-portfolio-2026.md) for each application. Start with the specific job requirements, connect them to verified experience, and make Carl's contributions, decisions, and supported results clear. The detailed workflow is in [Application sites](application-sites.md) and the [application tailoring evidence guide](application-tailoring-evidence-guide.md).
- **Working pace:** Follow Carl's pace. When he is establishing context or says no work is needed yet, stay with that discussion. Confirm the requested information without starting production or pressing him to choose the next employer or role.
- **Continuity:** Save durable application decisions and corrections in the relevant project instructions or application records as work proceeds. Preserve the distinction between discussion, draft, approval, publication, and submission. Recheck changing facts when needed; do not restart discovery of the established workflow in every conversation.

## Confluence page directory

The main website's [Homepage copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/31490050) and [About copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/31162379) were added on September 28, 2026, using the existing approved website text, metadata, buttons, and links. Both were read back and compared with the website source. Homepage card selections are a dated snapshot; update this copy when the featured projects or newest published articles change. The [Case Studies index](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24444930) and its eight main cases are synchronized, as recorded in the case-study guide. The [Drawing Board index](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954562) and all seven published article copies were checked too: card descriptions and source details were added, and obsolete case-study links were corrected. Existing draft status was preserved. These checks cover the main website; application-site reuse remains the next phase.

Access and the following direct child pages were verified on **September 27, 2026**. This is a navigation reference, not a statement of application or publication status. Read the live page before writing; check the parent for additions when needed.

- [Carl Avidano UX (CAU) space](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU)
- [Custom Applications](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28442625)

| Employer | Confluence writing page |
| --- | --- |
| Chromatic | [Chromatic — Application website copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28540930) |
| BNY | [BNY — Application website copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28540981) |
| Accenture / Work & Co | [Accenture / Work & Co — Application website copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28344323) |
| Datadog | [Datadog — Application website copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/28213264) |

## Deferred site improvement

On September 21, Carl discussed a compact global-footer contact area with email, LinkedIn, and the résumé download, using a shared source for About/footer contact details. Preserve copyright and Back to Top, and review the design on mobile and desktop before any authorized publication. This remains deferred; the September 27 source check found the existing copyright/Back to Top footer. Recording it here does not start that work.
