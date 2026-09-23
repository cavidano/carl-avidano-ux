# Writing and editorial sources

Before drafting or revising any audience-facing copy for this website, read the current relevant Confluence pages in the **Carl Avidano UX (CAU)** space. This applies to Drawing Board articles, case studies, listing descriptions, and other website copy.

- Start with [The Drawing Board](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954562/The+Drawing+Board) for articles. For case studies and other website pages, find and read the corresponding main page in the same space.
- Read the relevant main page and comparable approved examples to understand the writing voice, level of detail, and structure. Read the matching local source too. Local notes and Rovo summaries do not substitute for checking the current Confluence copy.
- Follow the user's latest instructions and preserve approved wording unless a revision is requested. If the sources disagree, establish which revision was approved; do not silently overwrite newer work.
- Use the `avidano-writing` skill and the conventions in [docs/DRAWING-BOARD.md](docs/DRAWING-BOARD.md). Keep prose clear, conversational, specific, and supported by the user's account and verified work. Do not invent motivations, chronology, testing, or outcomes.
- Keep approved revisions synchronized between Confluence and the local website. Verify saved headings, paragraphs, links, figures, captions, and image descriptions. Use matching asset names and preserve original image proportions. Keep Rovo transcripts and editorial notes on separate reference pages.
- A Confluence working copy does not authorize publishing a website draft. Preserve its publication status until the user requests a launch.
- If Confluence cannot be reached, say so clearly. Do not claim to have reviewed its current writing or silently treat a cached copy as current.

These instructions supplement the user's global project and design-system requirements.

# Application microsites

- Create a new `codex/<application>-microsite` branch before starting each new application site. Keep existing work safe and separate; do not publish until Carl requests it.
- Use an SVG logo from the employer's official website or brand assets. Record its source, preserve its geometry, and verify the appropriate light- and dark-mode versions, including forced colors.
- Keep each application's content and résumé asset independently editable under `src/sites/<application>` and `public/<application>`. Share layout, Natura11y behavior, and link scoping. The logo's home link, navigation, cards, articles, and résumé download must stay within that application's URL space.
- Reuse `GlobalHeader` and its `NavigationLinks` component across the main site and every application. Mobile navigation uses Natura11y's standard flyout, with Home first and links scoped to the current site. Do not create separate menu implementations per application.

# Portfolio positioning reference

For portfolio positioning, hiring-focused reviews, and case-study selection or structure, read [Jared Spool's September 2026 portfolio workshop guide](docs/references/jared-spool-ux-portfolio-2026.md). Carl asked to keep this as an ongoing reference. Use it alongside the target job description, verified project evidence, current Confluence copy, and Carl's latest instructions.
