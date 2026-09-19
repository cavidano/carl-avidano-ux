# On my desk preview

The section lives at `/on-my-desk`. Its two sample posts use material already in the Visionlearning and Cheetah.org case studies. Review the copy and dates before publishing. Nothing in this branch has been deployed.

Add posts as MDX files in `src/content/desk/`. The filename becomes the URL. Frontmatter includes `title`, `description`, `date` (quoted ISO date), `topic`, `image`, `imageAlt`, `projectName`, and `projectUrl`. Set `published: false` to omit a post from both the listing and generated routes.

`date` is the publication date and controls newest-first ordering. An optional `workDate` identifies an older project; the page labels it “From the archive” and keeps the publication date separate. The CCF sample uses June 2019, the launch month documented in its case study.

Images reuse the portfolio’s existing assets. Article bodies can use Markdown or import Astro’s `Image` component for figures.

Before launch, approve the sample content, set actual publication dates, remove the draft label and `noindex` props from the two page templates, and remove the `/on-my-desk` exclusion in `astro.config.mjs`.
