# On my desk preview

The section lives at `/on-my-desk` and currently shows only the Natura11y article about the July 2026 monorepo migration, grounded in the canonical repository’s Git history. The Visionlearning and Cheetah.org sample stories remain in the content folder with `published: false`; they do not appear in the listing or generate article pages. Review the copy and dates before publishing. Nothing in this branch has been deployed.

Add posts as MDX files in `src/content/desk/`. The filename becomes the URL. Frontmatter includes `title`, `description`, `date` (quoted ISO date), `topic`, `image`, `imageAlt`, `projectName`, and `projectUrl`. Set `published: false` to omit a post from both the listing and generated routes.

`date` is the editorial date and controls newest-first ordering. The Natura11y article is dated July 10, 2026 at the user’s request to cover that month’s work; it remains unpublished. An optional `workDate` identifies an older project; the page labels it “From the archive” and keeps the posting date separate. The CCF sample uses June 2019, the launch month documented in its case study.

`description` appears in the listing preview and page metadata, not in the article body. Article pages show the title and date followed directly by the content, without draft labels.

Images reuse the portfolio’s existing assets. Article bodies can use Markdown or import Astro’s `Image` component for figures.

## Layout

Use Natura11y Core defaults and utilities for this section. Article headers use `container medium` with `banner-headline` on the H1. Center the headline, topic, and date with `text-align-center` and `justify-content-center`; omit a separate back link. Article bodies and footers use `container narrow`. Use the existing spacing, grid, font-size, and link utilities; figures use `margin-y-4` and Core’s default caption styling. Do not add a separate article stylesheet for styles the system already supplies.

## Writing standard

Follow the federal plain language guidance maintained by GSA on [Digital.gov](https://digital.gov/guides/plain-language/). Apply it to article bodies and preview descriptions. Write for prospective clients, hiring managers, and design colleagues who want to understand the work and the decisions behind it.

- [Put the main point first](https://digital.gov/guides/plain-language/principles/organize). Explain the problem, the decision, and what changed in an order readers can follow.
- [Use active voice and direct verbs](https://digital.gov/guides/plain-language/writing). Make the person doing the work clear. Use past tense when describing completed work.
- [Keep sentences and paragraphs focused](https://digital.gov/guides/plain-language/writing/clear-short). Cut repeated explanations and filler while preserving the details readers need.
- [Use familiar words and explain necessary technical terms](https://digital.gov/guides/plain-language/principles/avoid-jargon) where they first appear. Keep accurate technical language that serves the audience.
- [Write descriptive headings](https://digital.gov/guides/plain-language/design/headings) that tell readers what each section covers.

Preserve user-approved titles, factual claims, and requested points. Keep descriptions in previews and metadata. Keep dates in article metadata unless a date is necessary to understand the story. Do not add draft labels, work logs, unsupported outcomes, or generic closing statements. A plain language review is an editorial check; do not claim reader comprehension has been tested without testing it with readers.

Before launch, approve the content, confirm the editorial dates, remove the `noindex` props from the two page templates, and remove the `/on-my-desk` exclusion in `astro.config.mjs`.
