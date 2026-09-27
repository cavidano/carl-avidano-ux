# Project context

At the start of a new conversation in this project, read [the context index](context/README.md). It records the application workflow, Confluence writing pages, Jared Spool references, and Carl's working preferences. Follow Carl's pace and use the saved context instead of asking him to repeat established information.

Save durable background and reusable guidelines in `context/`, updating the relevant existing file and its index. Keep employer-specific records with their application. When Carl is only establishing context or says no work is needed yet, confirm the requested information without starting production or pressing for the next role.

# Writing and editorial sources

Before drafting or revising any audience-facing copy for this website, read the current relevant Confluence pages in the **Carl Avidano UX (CAU)** space. This applies to Drawing Board articles, case studies, listing descriptions, and other website copy.

- Start with [The Drawing Board](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954562/The+Drawing+Board) for articles. For case studies and other website pages, find and read the corresponding main page in the same space.
- Read the relevant main page and comparable approved examples to understand the writing voice, level of detail, and structure. Read the matching local source too. Local notes and Rovo summaries do not substitute for checking the current Confluence copy.
- Follow the user's latest instructions and preserve approved wording unless a revision is requested. If the sources disagree, establish which revision was approved; do not silently overwrite newer work.
- Use the `avidano-writing` skill and read [the plain-language standard](context/plain-language.md) before drafting or revising copy. Apply it to Confluence application pages, portfolio copy, résumés, and cover letters. For articles, also follow [The Drawing Board conventions](context/drawing-board.md). Keep prose clear, conversational, specific, and supported by the user's account and verified work. Do not invent motivations, chronology, testing, or outcomes.
- Keep approved revisions synchronized between Confluence and the local website. Verify saved headings, paragraphs, links, figures, captions, and image descriptions. Use matching asset names and preserve original image proportions. Keep Rovo transcripts and editorial notes on separate reference pages.
- A Confluence working copy does not authorize publishing a website draft. Preserve its publication status until the user requests a launch.
- If Confluence cannot be reached, say so clearly. Do not claim to have reviewed its current writing or silently treat a cached copy as current.

These instructions supplement the user's global project and design-system requirements.

# Application microsites

- For copy revisions, preserve the existing page sections, their order, buttons, and featured article selection unless Carl asks to change them. The landing pages include “Who I am” and “What I do,” followed by their About Me button, before the Drawing Board. Use the project names as case-study card headings and preserve existing employer-specific tailoring. Do not turn a writing request into a layout redesign or rename projects.
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
