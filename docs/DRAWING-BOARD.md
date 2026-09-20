# The Drawing Board

Use **The Drawing Board** consistently in the interface and `drawing-board` in content paths, routes, and helpers. The section is organized as follows:

- `src/content/drawing-board/` — article MDX files, named for their current headlines.
- `src/pages/drawing-board/` — listing, article, and topic routes.
- `src/components/DrawingBoard/` — shared `PostCard`, `PostMeta`, and `TopicNav` components.
- `src/lib/drawing-board.js` — content loading, title-derived slugs, topics, dates, and image settings.

All internal links, canonical URLs, social metadata, and structured data use `/drawing-board`. The former `/on-my-desk` URLs exist only as compatibility redirects in `astro.config.mjs`; do not recreate that source folder. Astro generates HTML redirect pages for the static build, covering the listing, current article slugs, and topic filters. These old URLs are excluded from the sitemap. They are not server-level HTTP redirects on the static host.

The section lives at `/drawing-board` and currently shows four articles: the Natura11y monorepo migration, contrast themes, ESR captioning, and social graphics. The Cheetah.org design-system article and logo sample remain in the content folder as drafts. Only published articles appear in the listing, homepage, topic filters, sitemap, and generated article routes.

Add posts as MDX files in `src/content/drawing-board/`. The title generates the URL slug automatically, so editing a headline updates both its article route and preview links. Filenames do not control URLs. Slugs use lowercase words separated by hyphens, with punctuation removed; empty or duplicate slugs stop the build. Frontmatter includes `title`, `description`, `date` (quoted ISO date), `status`, `topic`, `image`, `imageAlt`, `projectName`, and `projectUrl`. Set `status: draft` to keep an article out of every public page, including its own route and any legacy redirect. Change it to `status: published` when ready. A missing status defaults to draft; any other value stops the build. This replaces the old `published` boolean.

```yaml
status: draft
```

Status controls the local preview and the next production build. Publishing or unpublishing an existing live article takes effect after deployment. The deployment workflow removes stale HTML only inside the generated `drawing-board` and `on-my-desk` directories so a previously published article cannot remain accessible after it becomes a draft.

Give each article one primary tag in the scalar `topic` field, chosen from `User Experience`, `Design Systems`, and `Accessibility`. A missing, unsupported, or non-string value stops the build for a visible article. CCF and the monorepo use Design Systems; contrast themes, ESR captioning, and social graphics use Accessibility. Topic filters and article metadata use this same primary topic.

`date` is the individual post’s editorial publication date and controls newest-first ordering. Display the full date, including the day, on article cards and article headers. Posts can appear whenever there is work to share; there is no monthly publishing schedule. Vary the dates: the social graphics article is dated September 12, 2026, contrast themes September 16, and the CCF foundation September 19. These dates are provisional while drafting and may be assigned for preview, but they do not establish when the underlying work happened. The Natura11y article is dated July 10, 2026 at the user’s request to cover that month’s work; its status is published. An optional `workDate` identifies an older project; the page labels it “From the archive.” The CCF sample uses June 2019, the launch month documented in its case study. Do not repeat the posting date at the end of an article.

The contrast-theme article uses September 16, 2026 as its editorial date. It is grounded in canonical Natura11y commits `1a1247e3` and `9e2f8103`, `packages/core/FORCED-COLORS.md`, and `scripts/check-forced-colors.mjs`. It describes the checks added without claiming native Windows testing has been completed. Its article figure is `src/images/natura11y/contrast-themes.png`, exported unchanged at 1600 × 1067 pixels from [Portfolio Figma node `1228:758`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1228-758). It shows the Avian Elegance example in a dark contrast theme and replaces the earlier documentation screenshot. The [2019 CSS Working Group minutes](https://lists.w3.org/Archives/Public/www-style/2019Apr/0004.html) remain the source for Microsoft’s report that Windows High Contrast was enabled on 4% of Windows installations. The article mentions it without a link as part of one opening paragraph, rather than giving the statistic its own paragraph. At the user’s request, the article omits the year and says “Microsoft previously reported”; do not present the number as current usage or change the denominator to people.

The ESR caption article uses February 2026 as an editorial date for a reflection on earlier work, within the February/March range the user requested. The [Avidano Digital project update](https://avidanodigital.com/news/project-update-accessible-captions-for-endangered-species-revenge) displays January 1, 2026. The ESR repository records video-player work on January 8 and caption integration in commit `82f2e2c` on January 20, with further player edits in `9d32910` on January 24. Sources also include the theme’s `template-parts/modal-video.php`, `template-parts/featured-video-group.php`, and `assets/js/plyr-init.js`. The two screenshots are copied unchanged from the local Avidano Digital site’s `web/images/uploads/figure/endangered-species-revenge-customized-captions.png` and `endangered-species-revenge-video-player.png`. They show the caption editor and on-site player. Avoid claiming translation was completed, all videos were audited, user testing occurred, or donations increased. Its case study links to Avidano Digital because there is no ESR case-study route in this portfolio.

The CCF foundation article uses September 19, 2026 as its editorial date and Design Systems as its primary topic. It retains the user’s requested emphasis on UX alongside accessibility and the design system. Its sources are the current `/Users/carlavidano/Sites/ccf-global-web` monorepo and Figma file `Ey3TdUGVg8vOioarckOiZq`. The exported typography image is frame `1104:1041`; the Brand page documents the main, Kids, and chapter logos. Code evidence includes the global header, mobile flyout, homepage stories, project theme, contrast-check script, and the accepted decision to maintain independent CCF source. This is ongoing work; do not use the 2019 case-study metrics as results of the new system or imply completed user testing, a site launch, or full Figma/code synchronization. The user explicitly approved “The Malar Stripe Project” in the article title, matching the Figma cover; this supersedes the earlier naming uncertainty for this article.

`description` appears in the listing preview and page metadata, not in the article body. Articles go directly from the date, headline, and primary tag into the opening paragraph. There is no TLDR block or `brief` frontmatter field. Let the opening explain what prompted the work and why it mattered. Article pages do not show draft labels.

Keep a short “Result” section when it adds a concrete outcome supported by the work. Do not replace the removed TLDR with another summary box or accordions.

Follow the article with a “Useful links” section. It includes the project case study from `projectName` and `projectUrl`, using optional `projectLinkLabel` when the destination is not a case study, plus any frontmatter `usefulLinks` entries, each with a descriptive `label` and a `url`. The monorepo article links to the canonical GitHub repository and documentation website. The contrast-theme article instead links to Harvard’s “A Deep Dive into Contrast Themes” and the Natura11y documentation; omit the GitHub repository from that article’s useful links. External resources reuse `LinkOpenNew`; internal case studies stay in the current tab.

Images reuse the portfolio’s existing assets. All article thumbnails and social-sharing feature images use the same **2:1 landscape aspect ratio** as the project marquees (for example, 1800 × 900 pixels). The listing and article metadata share `getDrawingBoardImageOptions` in `src/lib/drawing-board.js`, which crops images proportionally through Astro’s image pipeline without enlarging the originals. Choose source images that work with a centered 2:1 crop. Figures within article bodies keep their original proportions so screenshots and diagrams remain complete. Place Markdown images, Astro’s `Image`, or the existing `LightboxImage` inside the shared figure components described below.

## Search and social sharing

Article metadata is generated from the existing frontmatter. The page title includes the article headline and site name; Open Graph and X/Twitter previews use the headline alone, its preview description, and a generated JPEG of its feature image at up to 1200 × 600 pixels. Include descriptive `imageAlt` text. Image dimensions, MIME type, and absolute image URLs are supplied for social crawlers. Keep the 2:1 crop consistent with the listing images.

Article pages use `og:type="article"`, publication date, author, and one primary topic tag. Their `BlogPosting` structured data includes the headline, description, canonical URL, feature image, author profile, editorial publication date, and primary topic. Dates come from frontmatter, not build time; do not invent a modification date. `max-image-preview:large` allows large search-result image previews without guaranteeing how a search engine displays them.

Canonical links, social-image URLs, the sitemap, and the generated `robots.txt` all use `site` in `astro.config.mjs` as their public origin. Keep that value aligned with the public portfolio address. Social metadata is rendered in the static HTML, so crawlers do not need JavaScript. `status: draft` omits an article entirely; topic filters remain outside the sitemap. After deployment, verify that the article URL and image are publicly accessible, then check the real shared-link preview. Local metadata checks do not verify a social network's live cache or rendering.

External article references must use the existing `LinkOpenNew.astro` component inline in MDX. Import it from `../../components/LinkOpenNew.astro` and pass `LinkUrl` and `LinkText`. It opens the destination in a new tab or window, displays the open-new icon, and includes a screen-reader notice. Its visible label uses Natura11y’s `link__text` wrapper so links with icons receive Core’s hover and focus underlines. Pass `utilities="link"` for standalone links, including Useful links; paragraph links retain Core’s default inline styling. Keep internal portfolio links in the current tab.

The social graphics article’s feature image is `src/images/avidano-digital/social-graphics-feature.png`, exported at its original 1800 × 900 size from [the Portfolio Figma frame `desk-social-graphics`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1224-1367). Its article body uses three series figures, exported unchanged from Figma on September 20, 2026: `src/images/avidano-digital/disability-narratives.png` (1200 × 380, [node `1229:777`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1229-777)), `src/images/avidano-digital/participation-inclusion.png` (1124 × 720, [node `1230:778`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1230-778)), and `src/images/avidano-digital/accessibility-isnt-a-game.png` (1138 × 594, [node `1230:791`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1230-791)). The first follows the paragraph about keeping disabled people central to accessibility. The “Nothing about us without us” sentence and Pride explanation sit between the first and second figures. The third follows the explanation of “Accessibility isn’t a game.” Each series follows its matching text. All use regular medium-width figures, descriptive captions and alt text, full image proportions, and no lightbox. These replace the combined assortment. The original advocacy collage remains available for other portfolio content; the social-graphics Confluence copy still contains that earlier figure until separately synced.

The fourth social-graphics figure, `src/images/avidano-digital/words-flagged-for-removal.png`, is copied unchanged from the user’s supplied 1620 × 1620 PNG on September 20, 2026. It appears near the end, directly after the paragraph explaining the flag composition and before “Result.” The caption connects the full graphic to the article’s existing thumbnail. It uses the same regular medium-width figure without a lightbox. The artwork itself credits the word list to The New York Times, March 7, 2025; the new article paragraph describes the design and its message without adding new claims about government policy.

The monorepo article’s feature image is `src/images/natura11y/monorepo-feature.png`, exported at its original 1800 × 900 size from [the Portfolio Figma frame `desk-natura11y-monorepo`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1224-1383). The article body keeps the full architecture diagram.

The monorepo article now focuses on preparing Natura11y for AI-assisted development. Evidence includes the live Hi-fi Figma Button, Form, and Main Menu descriptions, the published Lo-fi Button descriptions, Web code syntax on Figma variables, and the source-of-truth rules in the canonical repository’s `TODO.md`. Keep the distinction between the initial migration and the context work that continued afterward. Its July 10 editorial date is retained for the approved article. Explain AI readiness as usable component context and working examples, without claiming autonomous generation or complete design/code synchronization.

The contrast-theme article’s feature image is `src/images/natura11y/contrast-themes-feature.png`, exported at its original 1800 × 900 size from [the Portfolio Figma frame `desk-natura11y-contrast-themes`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1224-1389). This frame keeps the navigation and outlined controls in the feature crop. The article body uses the separate 1600 × 1067 export from node `1228:758`, preserving its full proportions.

The Polypane comparison is `src/images/natura11y/contrast-themes-polypane.png`, exported unchanged at 1600 × 906 pixels from [Portfolio Figma node `1228:761`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1228-761). Place it directly after the Polypane paragraph as a regular medium-width figure without a lightbox. It shows the same Storybook form in dark and light contrast themes. Both views use forced colors; they are not a comparison of ordinary light mode with forced colors. [Polypane’s guide](https://polypane.app/blog/forced-colors-explained-a-practical-guide/) explains that browsers derive `prefers-color-scheme: light` or `dark` from the contrast theme’s background.

The ESR caption article’s feature image is `src/images/endangered-species-revenge/captioning-feature.png`, exported at its original 1802 × 901 size (2:1) from [Portfolio Figma frame `1225:1394`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1225-1394). It shows the caption work in YouTube Studio. The article body retains its original caption-editor and website-player screenshots.

## Layout

Article cards show the date first, then the title and preview description, followed by one small primary-topic badge. This order applies to both the listing and homepage cards. `PostCard.astro` renders a plain `<span class="badge">` inside the one article link. Never add separate links, overlays, or competing click targets to summary cards.

The article-detail template renders its own single `<a class="badge">` directly beneath the headline. It links to the article's primary topic under `/drawing-board/topics/`. Keep this markup separate from card badges so the article tag's size and spacing can be adjusted independently. Both use Natura11y Core's default badge styling, without inline font-size overrides. Use Core's font-size utilities when a size adjustment is needed. There is no shared tag-list component.

Each topic page shows only visible articles with that primary topic, newest first, with navigation between the three allowed topics and All articles. A topic with no articles shows the existing empty state. Keep The Drawing Board headline and introduction the same across all topic views; only the selected filter and articles change. The current topic uses `aria-current="page"`. These pages remain noindex and excluded from the sitemap. Topic navigation works without JavaScript.

Article pages show Useful links in a separate `subtle-fill-1 padding-3` block, spaced from the article with `margin-top-5`. Keep its semantic H2 visually smaller with `h5`; the link list uses `nav gap-2`. The footer has a top border, `padding-top-2`, and `padding-bottom-4` around one compact “Back to The Drawing Board” text link. Use `<a class="link font-size-sm" href="/drawing-board">` with an `aria-hidden="true"` `icon icon-arrow-left` span before the `link__text` span. This uses Core’s icon-link spacing and hover/focus underline without button styling, and stays in the same tab. A scoped `<style>` in the article template sets `--link-color: currentColor` on its footer, keeping the link in the surrounding text color across themes. Override the existing token here rather than adding a color utility. Do not add a “More from The Drawing Board” or related-article section; the user removed it to keep the articles focused and informal.

The homepage ends with a “The Drawing Board” section after the “Who I am” / “What I do” block and its About Me button, separated by the same horizontal divider used between the homepage’s other sections. Show only the section heading above the cards; omit the explanatory paragraph on the homepage. It automatically takes the latest three visible articles from `getDrawingBoardPosts()`, followed by a “View All Articles” link. The homepage uses three columns at Core’s `lg` breakpoint and stacks the cards on smaller screens. `PostCard.astro` shares images, metadata, whole-card linking, and focus behavior between the homepage’s compact cards and the article listing.

The article listing uses two equal columns at Core’s `lg` breakpoint: half the row for the 2:1 thumbnail and half for the text, separated by `gap-5`. Cards have no outer padding. On smaller screens, the image stacks above the text; `post-card.scss` sets `row-gap: var(--spacer-3)` to keep the vertical gap smaller. The text keeps `padding-x-3 padding-bottom-3`, reset with `padding-0--lg` on desktop. Each entire card is one native link with Core’s `subtle-fill-1` background. The primary-topic badge inside it is a plain label, so the card has only one click target. Use space between cards instead of divider lines, and omit a separate “Read the note” link. Keep the headline in the link color; underline it when the card is hovered or keyboard-focused. Core supplies the keyboard focus outline for article and topic links. Keep the two card-specific rules (the smaller row gap and headline hover/focus underline) in `src/components/DrawingBoard/post-card.scss`, imported by `PostCard.astro`, rather than an embedded `<style>` block.

Use Natura11y Core defaults and utilities for this section. Article headers use `container medium` with `banner-headline` on the H1. Show the date first, then the headline, then the single topic badge, all centered with `text-align-center`; omit a separate back link. Use `margin-bottom-2` after the date, `margin-bottom-3` after the headline, and `margin-bottom-5` on the header to separate it from the opening text block. Useful links and the footer retain their own `container narrow`. Do not add a separate article stylesheet for styles the system already supplies.

### Article body components

Use the same `TextBlock`, `FigureSingle`, and `FigureSideBySide` components as the portfolio case studies. The article route supplies them to MDX, so they do not need imports in each article. Import image assets and Astro’s `Image` for regular figures. For new or replaced article figures, use a regular image by default; add `LightboxImage` only when the user requests enlargement. The ESR screenshots and contrast-theme example use regular images.

Wrap each section of prose, including its heading, in `TextBlock`. It provides the narrow reading width and vertical spacing. Add `className="margin-x-auto"` to keep the reading column centered with Core’s existing utility. There is no narrow container around the entire article body: close the text block before adding a figure so its width can be set independently.

```mdx
<TextBlock className="margin-x-auto">

## A short heading

Article text goes here.

</TextBlock>

<FigureSingle width="medium" className="margin-x-auto" caption="A clear description of the figure.">

<Image src={exampleImage} alt="Describe the image." />

</FigureSingle>

<TextBlock className="margin-x-auto">

The next section of text goes here.

</TextBlock>
```

`FigureSingle` defaults to `wide`; choose `medium` or `narrow` when appropriate for the image. Keep tall images, such as the social-graphics collage, narrow. Use `className="margin-x-auto"` to center a single figure within its outer container. The component handles captions and spacing with the same markup and Core utilities used in case studies.

For paired figures, use `FigureSideBySide` with a `FigureSingle` for each image. Set each child’s `isContained={false}` and `margin="margin-y-0"` so the parent handles width, grid, and spacing. The group supports `medium` or its default `wide` width. The draft CCF logo article provides a working example.

```mdx
<FigureSideBySide width="medium">

<FigureSingle isContained={false} margin="margin-y-0" caption="Before.">

<Image src={beforeImage} alt="Describe the earlier version." />

</FigureSingle>

<FigureSingle isContained={false} margin="margin-y-0" caption="After.">

<Image src={afterImage} alt="Describe the updated version." />

</FigureSingle>

</FigureSideBySide>
```

## Editing in Confluence

The [The Drawing Board](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954562/The+Drawing+Board) parent page in the Carl Avidano UX space contains separate working copies of the five website articles. These are editable copies; changes in Confluence do not automatically update the website. The website’s TLDR blocks were removed on September 20, 2026. The contrast-theme page now matches the current article; the other Confluence copies still contain the older preview-description and TLDR sections. Do not restore those summaries when bringing edits back to the site. Read the current Confluence page before bringing approved edits back into its matching MDX file.

- [The Malar Stripe Project: building an accessible foundation for cheetah.org](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21757960/The+Malar+Stripe+Project+building+an+accessible+foundation+for+cheetah.org) — `src/content/drawing-board/the-malar-stripe-project-building-an-accessible-foundation-for-cheetah-org.mdx`
- [Preparing Natura11y for contrast themes (a.k.a. forced colors)](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21987329) — `src/content/drawing-board/preparing-natura11y-for-contrast-themes-a-k-a-forced-colors.mdx`. The child [Rovo summary](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/22020135) informed a shorter website revision on September 19, 2026. The user also confirmed using Polypane to check forced colors; the article introduces it and links to its emulation documentation. Keep emulation distinct from native Windows verification. On September 20, the main page was synced to the current article, including its single Accessibility topic, opening paragraph, headings, both figures in their article positions, exact captions, useful links, and footer link. The removed TLDR and separate preview metadata are no longer part of this Confluence article. Attachments `att22446081` (`contrast-themes.png`) and `att22478849` (`contrast-themes-polypane.png`) were downloaded and verified byte-for-byte against the website assets. Both have alt text; Confluence required a straight apostrophe in the first image’s alt text to retain it. All visible article text and captions match the website. Latest synced page version: 10.
- [Moving the Natura11y design system into an AI-ready monorepo (Website copy)](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/22020097) — `src/content/drawing-board/moving-the-natura11y-design-system-into-an-ai-ready-monorepo.mdx`. Its child [AI-generated summary](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954582), titled “Moving the Natura11y design system into an AI-ready monorepo,” is reference material for useful phrasing. It is not the approved replacement article. The user approved the shorter website revision on September 19, 2026; that copy is now synced to this Confluence page, including the “One workspace” and “Context for AI” headings.
- [Creating inclusive captioning for ESR](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/22052865/Creating+inclusive+captioning+for+ESR) — `src/content/drawing-board/creating-inclusive-captioning-for-esr.mdx`. The child [Rovo summary](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/22183982) informed a shorter website revision on September 19, 2026. It emphasizes separating captions from video, retains the sound and timing examples, and uses shorter headings. Player details were checked against ESR’s active theme. This revision is now synced to the main Confluence page; the Rovo summary remains separate reference material.
- [Social Graphics: Advocating for inclusion through Avidano Digital](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21889031/Social+Graphics+Advocating+for+inclusion+through+Avidano+Digital) — `src/content/drawing-board/social-graphics-advocating-for-inclusion-through-avidano-digital.mdx`. Includes the original advocacy collage from `src/images/aclu/accessibility-advocacy.webp` as a page attachment and article figure, plus the supplied Figma social-media kit link. The child [Rovo summary](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21856472) informed a shorter website revision on September 19, 2026. It retains the specific graphics and broader inclusion theme, with shorter headings and less repetition. This revision is now synced to the main Confluence page.

## Writing standard

On September 19, 2026, all five main Confluence articles were checked against the website text at that time. The ESR, social-graphics, and contrast-theme pages were updated with their shorter revisions; the monorepo and CCF pages already matched. Those copies included the preview description, TLDR, article body, result, useful links, figure captions, and alt text. The September 20 contrast-theme sync described above supersedes that earlier copy. Rovo child summaries remain separate reference material. Use the main pages as the source for future revisions, then check proposed wording against the website and verified facts before incorporating it.

Follow the federal plain language guidance maintained by GSA on [Digital.gov](https://digital.gov/guides/plain-language/). Apply it to article bodies and preview descriptions. Write for prospective clients, hiring managers, and design colleagues who want to understand the work and the decisions behind it.

Each article should share one small, useful piece of thinking from the work: a decision, an experiment, a lesson, or a question still being worked through. Include only the context needed to understand that point. Add something the case study does not already explain, and link to the case study for the broader project story. Keep these as short, informal snippets rather than repeating the full case study. Do not expand a post just to fill out a template.

Respect the reader’s time. Aim for roughly a two-minute read when the subject allows, open with the context readers need, and remove repeated explanations. Preserve concrete examples that show the author’s decisions. When drawing on an AI-generated summary, borrow useful phrasing selectively and check it against the original article and verified evidence.

These posts capture the author's process as the work unfolds, including experiments and work that is still taking shape. Treat them as snapshots in time amid changes in AI and product development, with room for details that brief case studies cannot cover. The section introduction should emphasize process, learning, and work in progress rather than frame the section as an archive of past projects. Keep the focus on the actual work; do not force an AI angle into every article. Explain what prompted the work, the choices considered, and what the author learned. Keep each article simple: a short, informal view into the work as it happens. Include only enough context to explain the work and the thinking behind it. Keep the voice conversational and headlines approachable. Use structure where it helps the reader, without forcing every post into the same format.

- [Put the main point first](https://digital.gov/guides/plain-language/principles/organize). Explain the problem, the decision, and what changed in an order readers can follow.
- [Use active voice and direct verbs](https://digital.gov/guides/plain-language/writing). Make the person doing the work clear. Use past tense when describing completed work.
- [Keep sentences and paragraphs focused](https://digital.gov/guides/plain-language/writing/clear-short). Cut repeated explanations and filler while preserving the details readers need.
- [Use familiar words and explain necessary technical terms](https://digital.gov/guides/plain-language/principles/avoid-jargon) where they first appear. Keep accurate technical language that serves the audience.
- [Write descriptive headings](https://digital.gov/guides/plain-language/design/headings) that tell readers what each section covers.
- Link to Brad Frost’s original writing when it helps explain a concept or decision in the article. Verify the source and connect it to the specific work, using descriptive inline links. The monorepo article retains [AI and Design Systems](https://bradfrost.com/blog/post/ai-and-design-systems/) as its relevant reference; keep broader ecosystem and workbench references only when they support the article’s focus. Do not imply a source influenced an earlier decision unless that history is confirmed.

Keep references unobtrusive: link relevant concepts with short, descriptive text and keep the focus on the author's own work and reasoning. In the Natura11y article, retain the source links without mentioning Brad Frost by name in the prose; the AI link text is simply “AI-assisted development.”

Preserve user-approved titles, factual claims, and requested points. Keep descriptions in previews and metadata. Keep dates in article metadata unless a date is necessary to understand the story. Do not add draft labels, work logs, unsupported outcomes, or generic closing statements. A plain language review is an editorial check; do not claim reader comprehension has been tested without testing it with readers.

Before launch, review the content and editorial dates, deploy the completed build, and verify the public article URLs and social previews. Indexing is enabled for the visible articles and main listing; filtered topic views remain `noindex, follow`.
