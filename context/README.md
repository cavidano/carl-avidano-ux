# Project context

This folder holds the specific background, source material, and reusable guidelines for work in this project. Read this page at the start of a new conversation, then read the references relevant to Carl's request.

## Guides and source material

| File | Purpose |
| --- | --- |
| [Plain-language writing standard](plain-language.md) | Required writing guidance adapted from Digital.gov, with examples and a review checklist |
| [Jared Spool workshop guide](jared-spool-ux-portfolio-2026.md) | Paraphrased recommendations with page references and our application practices |
| [Jared's original workshop PDF](Job-Search-2026-What-Makes-a-Great-UX-Portfolio.pdf) | Original source supplied by Carl; retained locally and excluded from Git |
| [Application sites](application-sites.md) | Setup, shared layout, documents, review, deployment, and retirement workflow |
| [Job search preferences and shortlist](job-search.md) | Carl's selection criteria and the dated employer discussion |
| [Case studies](case-studies.md) | Writing sources, structure, confirmed project evidence, review checkpoints, and portfolio comparisons with hiring evidence |
| [The Drawing Board](drawing-board.md) | Writing conventions, article behavior, source evidence, and figure guidance |
| [Application tailoring evidence guide](application-tailoring-evidence-guide.md) | Additional research and our method for connecting job requirements to verified experience |

Keep durable context and guidelines here. Update an existing relevant file before creating another. Application writing lives in Confluence; employer-specific records stay in `src/sites/<application>/`. Keep shared technical guidance and useful editorial evidence in the relevant guide here; do not recreate `docs/` or add separate files for routine save/build logs. Dated notes describe the state when recorded and must not be treated as current approvals or instructions without checking.

## Application working context and continuity

The main website is Carl's generalist portfolio. Its homepage copy and markup live directly in [src/pages/index.astro](../src/pages/index.astro). Keep it straightforward to edit there. Application homepages use their own [template](../src/components/Applications/ApplicationHomePage.astro) and each employer's `site.json`; their setup must not force the main homepage through an application template or copy lookup. Project and article cards continue to use their corresponding MDX sources.

Carl confirmed on September 27, 2026 that he has **20+ years of experience**. He requested “15+ years of experience” for the homepage pill while discussing age bias in hiring. Treat that as a presentation choice, not a shortened career history; keep actual roles and dates accurate. The homepage pills also show “Based in New York” and an easily editable role, initially “Senior Product Designer.”

Carl is preparing a custom application for each job he pursues. Reuse the approved case studies and tailor their wording and emphasis to the specific role; a new application does not require rewriting every case study. Carry this context into new conversations; read the saved guidance and relevant application records before asking Carl to repeat established information.

- **Writing workspace:** Draft and revise application copy in the **Carl Avidano UX (CAU)** Confluence space, under **Custom Applications**, with a separate page for each employer. Use the current Confluence copy and follow the [synchronization requirements](../AGENTS.md#writing-and-editorial-sources).
- **Tailoring approach:** Use [Jared Spool's saved workshop guide](jared-spool-ux-portfolio-2026.md) for each application. Start with the specific job requirements, connect them to verified experience, and make Carl's contributions, decisions, and supported results clear. The detailed workflow is in [Application sites](application-sites.md) and the [application tailoring evidence guide](application-tailoring-evidence-guide.md).
- **Working pace:** Follow Carl's pace. When he is establishing context or says no work is needed yet, stay with that discussion. Confirm the requested information without starting production or pressing him to choose the next employer or role.
- **Continuity:** Save durable application decisions and corrections in the relevant project instructions or application records as work proceeds. Preserve the distinction between discussion, draft, approval, publication, and submission. Recheck changing facts when needed; do not restart discovery of the established workflow in every conversation.

## Confluence page directory

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
