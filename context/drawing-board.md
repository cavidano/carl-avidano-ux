# The Drawing Board

## October 4 — approved listing introduction

**Published and verified:** Release **dd37a9e34eecde85e2c92658ad29fb5bb6c4bc4c** is live through [Cloudways run 37214051680](https://github.com/cavidano/carl-avidano-ux/actions/runs/37214051680). Verified the exact approved introduction on all six live main/BNY listing and topic pages, both listing SEO descriptions, and the unchanged BNY résumé. Both branches are pushed; continue on `codex/final-refinements`. Live verification is saved with the build and Confluence checks below.

Carl approved and explicitly requested synchronizing and publishing: “Quick reads on my creative process, collaborations, and what I’m working on. I also share small wins that don’t always fit into a neat case study.” This replaces only the introduction in `src/pages/drawing-board/index.astro`, which supplies all main/application listings and topic pages. Main Confluence **21954562 v8**, including its SEO description and saved editor copy, and `output/hemingway/drawing-board/drawing-board-summaries.md` match. Other Confluence content and its Children Display macro are preserved. Both builds passed 27 tests, zero Astro errors/warnings, and the 117/54-page audits; all 21 built listing/topic pages match the approved text. Evidence: `output/drawing-board-intro-release-2026-10-04/`. Carl requested the normal GitHub/main/deployment/refinements procedure; release verification follows.

## October 4 — complete Hemingway revision synchronized for release

**Release verified:** **3270c7f518f4d8e6a9bb1d19d7872fe1dedf3f2d** is merged and pushed to `main` and `codex/final-refinements`, and live through [Cloudways run 37213578735](https://github.com/cavidano/carl-avidano-ux/actions/runs/37213578735). All 42 non-redirect index pages and 23 article images/résumé files checked match the exact GitHub production artifact. The workspace is back on `codex/final-refinements`. Local evidence: `output/article-copy-sync-2026-10-04/live-verified.json`. The release includes the approved UNICEF headline and organized Hemingway export workflow. All seven article revisions are complete; the Malar Stripe draft remains unpublished.

Carl subsequently clarified that the phrase he disliked was “as I build accessible interfaces and design systems.” He retained the rest of the opening, changed the subject to what he is working on, and replaced “the smaller details” with “small wins” in the final sentence. The approved version and release request are recorded above.

Carl explicitly requested updating all copy everywhere, then making it live. Applied all remaining returned article revisions, including the approved presentation description (“How I worked with AJ Favors to introduce digital accessibility through practical examples.”), the intersection-of-identities correction, the monorepo's combined maintenance/AI motivation, and the expanded USWDS reference. Kept the reviewed contrast-theme accuracy corrections and ESR sound-description clarification. This supersedes all pending-application and local-only notes below.

All seven shared MDX articles, their main Confluence pages **and saved editor copies**, and `output/hemingway/drawing-board/` exports now match. The listing summary export includes the new presentation description. Confluence versions: contrast themes **12**, social graphics **16**, presentation **5**, monorepo **11**, Gatsby-to-Astro **9**, navigation **6**, and ESR **11**. Preserved paragraphs, lists, headings, all 15 figures and captions, image descriptions, inline links, publication settings, and application selections. Both article drafts retain draft status; the logo draft remains excluded from Hemingway.

Both builds passed 27 tests and zero Astro errors/warnings; generated-site audits covered 117 review pages and 54 production pages. An additional comparison matched every article's ordered paragraphs, headings, and list items to its Hemingway file in both builds. The seven main Confluence pages and seven saved editor copies match the planned HTML, allowing only platform-generated local IDs and list paragraph wrappers. Verification and pre-edit backups are in `output/article-copy-sync-2026-10-04/`.

## October 4 — ESR Hemingway revision and article review status

Carl requested applying his returned “Creating inclusive captioning for ESR” article with the clarification that he added **descriptions** of polar bears roaring and heavy guitar music to the captions. The shared `src/content/drawing-board/creating-inclusive-captioning-for-esr.mdx`, main Confluence page **22052865 v11** and saved editor copy, and `output/hemingway/drawing-board/creating-inclusive-captioning-for-esr.md` now match. Verified all 13 ordered headline/heading/paragraph blocks on the local page. Both figures, captions, image descriptions, inline Plyr link, metadata, and publication setting are preserved. No commit or deployment. Local verification: `output/esr-hemingway-sync-2026-10-04/local-verified.json`.

All seven published articles have now received Carl's returned Hemingway prose in this conversation. The final navigation-components revision was checked against main Confluence **23298049 v5**, current Core Flyout/overlay/nested-nav code, and public documentation. It preserves the supported keyboard, reduced-motion, hierarchy, and current-page behavior. Suggested only expanding USWDS to “U.S. Web Design System (USWDS)” on first use and splitting the inspiration/drill-down sentence; no article writes were requested or made. The Malar Stripe article remains a separate draft awaiting review. The CCF logo draft remains excluded from Hemingway by explicit request.

Distinguish review from application: the contrast-theme revision is local and in Hemingway only (Confluence v11 still awaits sync); ESR is synchronized in all three working copies. Carl's returned social-graphics, accessibility-presentation, monorepo, Gatsby-to-Astro, and navigation-components revisions have been discussed and reviewed but have not been applied. Preserve those returned versions from the conversation for the next explicit copy-update request. The social-graphics correction explains intersecting identities, not the flag itself representing disability. Carl approved the accessibility presentation's card description: “How I worked with AJ Favors to introduce digital accessibility through practical examples.” Approval was part of a wording discussion; it has not been saved to the article metadata yet.

## October 4 — contrast-theme article local review

Carl supplied a complete Hemingway revision of “Preparing Natura11y for contrast themes (a.k.a. forced colors)” and explicitly requested applying it locally first. Updated its shared MDX and `output/hemingway/drawing-board/preparing-natura11y-for-contrast-themes-a-k-a-forced-colors.md`. Preserve his two opening paragraphs, separate focus-outline paragraph, and five-item testing list. All original figures, captions, inline links, metadata, and publication settings remain intact.

Verified the focus-offset token and accordion inset, selected pill-tab system colors, transparent caret sides, disabled select colors, and Chromium/Firefox regression coverage against `/Users/carlavidano/Sites/natura11y`. The article retains the distinction between browser emulation and the checklist’s native Windows review. Three limited factual corrections accompany Carl’s wording: background colors are replaced with system colors while shadows are removed; “previously” marks Microsoft’s 4% installation statistic as historical; and the highlight colors apply to selected pill-shaped tabs. Sources: [MDN forced colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors), [Microsoft contrast-theme settings](https://support.microsoft.com/en-us/accessibility/windows/change-color-contrast-in-windows), and [2019 CSSWG minutes](https://lists.w3.org/Archives/Public/www-style/2019Apr/0004.html).

The local rendered article matches the Hemingway text in order, including paragraph breaks and all five list items. Main Confluence **21987329 v11** was read before editing and remains unchanged pending approval to synchronize. No GitHub commit or website deployment. Carl subsequently described the revision as a great improvement while discussing it; do not interpret that discussion alone as a new synchronization or release request.

**Shared collection — October 1, 2026:** Main and every application load `src/content/drawing-board/*.mdx` directly. New published posts, edits, metadata, and topic membership carry through to all sites on the next deployment. Each application’s `articles.json` selects homepage features by source filename without `.mdx`; it does not filter the full listing. Separate application article copies are removed.

Use this guide for writing conventions, implementation contracts, and article evidence. Read current Confluence and local copies before revising. Publication and synchronization checks recorded here are dated history, not fresh verification.

**Main-site synchronization check, September 28, 2026:** All seven published article bodies matched their current website copies. The Confluence pages were missing their current website card/SEO descriptions; those descriptions and source metadata were added in an expansion. Five article pages, including the existing Malar Stripe draft, still linked to `/portfolio/` case-study URLs; those links now use `/case-studies/`. The Drawing Board parent now records its current listing metadata and direct Astro source. All changed pages were read back: text matched the planned updates, media references and dimensions were preserved, and published articles' body copy, captions, and useful links matched the website. Publication settings were not changed. Verified versions: parent **6**, ESR **10**, contrast themes **11**, social graphics **15**, presentation **4**, monorepo **10**, Gatsby-to-Astro **7**, navigation **5**, and Malar Stripe draft **5**. The separate unapproved logo sample remains a local draft, outside this published-copy synchronization.

- [Writing standard](#writing-standard)
- [Editing in Confluence](#editing-in-confluence)
- [Layout and body components](#layout)
- [Article-specific source notes](#article-specific-source-notes)

Use **The Drawing Board** consistently in the interface and `drawing-board` in content paths, routes, and helpers. The section is organized as follows:

- `src/content/drawing-board/` — article MDX files, named for their current headlines.
- `src/pages/drawing-board/` — listing, article, and topic routes.
- `src/components/DrawingBoard/` — shared `PostMeta`, `PostTags`, and `TagNav` components. `PostCard/` contains two card templates: `index.astro` for stacked cards and `PostCardRow.astro` for listing rows, alongside their shared `style.scss`.
- `src/pages/[site]/[...path].astro` — application routes reuse the main listing directly, passing the shared posts and current topic.
- `src/lib/drawing-board/loader.js` — content loading, the published tag index, dates, and image settings.
- `src/lib/drawing-board/rules.js` — publication filtering, title and tag slugs, validation, and tag membership.

On October 2, Carl requested grouping related helpers into feature folders under `src/lib/` and using clearer filenames consistently. The Drawing Board move updates all source, build, and test imports without changing behavior. He subsequently requested arrow functions where possible; all `src/lib` helpers now follow that convention. The broader review of formatting helpers, application selection, and Astro's native content-collection APIs remains open.

The main listing owns its header, introduction, metadata, tag navigation, and page markup directly in `src/pages/drawing-board/index.astro`, following Carl's September 28 simplification request. Main and application topic routes reuse that page with filtered posts and the current tag, so the copy is edited in one place. On October 2, Carl approved removing the duplicate application listing template and its per-application `site.json` fields. Application listings now reuse the same main index too; shared links retain the application prefix and the layout keeps application pages `noindex`. The approved introduction and metadata match the current main Confluence page, verified at v7. Carl subsequently requested two separate card templates without `compact` checks. Pages now own their straightforward list markup and import the appropriate card directly; the `PostList` wrapper is removed. Both templates consume the same article data and use Natura11y's responsive utility classes. Do not restore the former main `site.json` lookup or a separate wrapper around the main index.

All internal links, canonical URLs, social metadata, and structured data use `/drawing-board`. The former `/on-my-desk` URLs exist only as compatibility redirects in `astro.config.mjs`; do not recreate that source folder. Astro generates HTML redirect pages for the static build, covering the listing, current article slugs, and topic filters. These old URLs are excluded from the sitemap. They are not server-level HTTP redirects on the static host.

The section lives at `/drawing-board`. The September 22 publication record includes seven articles: the Natura11y monorepo migration, contrast themes, ESR captioning, social graphics, navigation, Gatsby-to-Astro documentation migration, and the accessibility presentation. The user approved publishing the presentation article and reviewed branch changes on September 22, 2026. The Cheetah.org design-system article and logo sample remain in the content folder as drafts. Only posts with `status: published` appear in production listings, the homepage, topic filters, sitemap, and generated article routes.

Add posts as MDX files in `src/content/drawing-board/`. The title generates the URL slug automatically, so editing a headline updates both its article route and preview links. Filenames do not control URLs. Slugs use lowercase words separated by hyphens, with punctuation removed; empty or duplicate slugs stop the build. Frontmatter includes `title`, `description`, `date` (quoted ISO date), `status`, `tags`, `image`, `imageAlt`, `projectName`, and `projectUrl`. Set `status: draft` to keep an article out of every public page, including its own route and any legacy redirect. Change it to `status: published` when Carl authorizes publication. A missing status defaults to draft; any other value stops the build. This replaces the old `published` boolean.

```yaml
status: draft
```

For a draft under active review, add `preview: true` alongside `status: draft`. Local development includes only those opted-in drafts in the shared listing, tag index, and article routes; their article pages use `noindex`. Production builds always exclude drafts, regardless of the preview flag. Existing drafts without the flag stay hidden locally.

Status controls the next production build. Publishing or unpublishing an existing live article takes effect after deployment. The deployment workflow removes stale HTML only inside the generated `drawing-board` and `on-my-desk` directories so a previously published article cannot remain accessible after it becomes a draft.

Define tags in each article's frontmatter as a list. Articles may have multiple tags or no tags. There is no separate registry or hardcoded list of available tags:

```yaml
tags:
  - Design Systems
  - Accessibility
```

Only published articles contribute to the shared tag index. Tag navigation, card and article tag links, archive routes, and social metadata all use that index and the same normalized tag names. Tags are listed alphabetically; matching articles remain newest first. Publishing an article with a new tag creates its link and archive automatically. Removing or unpublishing its last article removes that tag and archive on the next build. Untagged articles remain in All articles and show no empty tag list. Draft-only tags never appear publicly.

Use consistent tag names. Whitespace is normalized; malformed values, duplicate tags on one article, empty URL slugs, and conflicting names that produce the same URL stop the build with a content error. Existing tag assignments were preserved when the scalar `topic` field became a `tags` list. Keep the existing `/drawing-board/topics/<slug>` URLs for compatibility. The build does not generate empty tag archives, and deployment removes stale archive files. `npm test` covers publication filtering, multiple tags, new tags, removal of the last matching article, archive ordering, and invalid data; it also runs as part of every production build.

`date` is the individual post’s editorial publication date and controls newest-first ordering. Display the full date, including the day, on article cards and article headers. Posts can appear whenever there is work to share; there is no monthly publishing schedule. Vary the dates: the social graphics article is dated September 5, 2026, contrast themes September 16, and the CCF foundation September 19. These dates are provisional while drafting and may be assigned for preview, but they do not establish when the underlying work happened. The Natura11y article is dated July 10, 2026 at the user’s request to cover that month’s work; its status is published. An optional `workDate` identifies an older project; the page labels it “From the archive.” The CCF sample uses June 2019, the launch month documented in its case study. Do not repeat the posting date at the end of an article.

The contrast-theme article uses September 16, 2026 as its editorial date. It is grounded in canonical Natura11y commits `1a1247e3` and `9e2f8103`, `packages/core/FORCED-COLORS.md`, and `scripts/check-forced-colors.mjs`. It describes the checks added without claiming native Windows testing has been completed. Its article figure is `src/images/natura11y/contrast-themes.png`, exported unchanged at 1600 × 1067 pixels from [Portfolio Figma node `1228:758`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1228-758). It shows the Avian Elegance example in a dark contrast theme and replaces the earlier documentation screenshot. The [2019 CSS Working Group minutes](https://lists.w3.org/Archives/Public/www-style/2019Apr/0004.html) remain the source for Microsoft’s report that Windows High Contrast was enabled on 4% of Windows installations. The article mentions it without a link as part of one opening paragraph, rather than giving the statistic its own paragraph. At the user’s request, the article omits the year and says “Microsoft previously reported”; do not present the number as current usage or change the denominator to people.

The ESR caption article uses February 2026 as an editorial date for a reflection on earlier work, within the February/March range the user requested. The [Avidano Digital project update](https://avidanodigital.com/news/project-update-accessible-captions-for-endangered-species-revenge) displays January 1, 2026. The ESR repository records video-player work on January 8 and caption integration in commit `82f2e2c` on January 20, with further player edits in `9d32910` on January 24. Sources also include the theme’s `template-parts/modal-video.php`, `template-parts/featured-video-group.php`, and `assets/js/plyr-init.js`. The two screenshots are copied unchanged from the local Avidano Digital site’s `web/images/uploads/figure/endangered-species-revenge-customized-captions.png` and `endangered-species-revenge-video-player.png`. They show the caption editor and on-site player. Avoid claiming translation was completed, all videos were audited, user testing occurred, or donations increased. Its case study links to Avidano Digital because there is no ESR case-study route in this portfolio.

The CCF foundation article uses September 19, 2026 as its editorial date and Design Systems as its primary topic. It retains the user’s requested emphasis on UX alongside accessibility and the design system. Its sources are the current `/Users/carlavidano/Sites/ccf-global-web` monorepo and Figma file `Ey3TdUGVg8vOioarckOiZq`. The exported typography image is frame `1104:1041`; the Brand page documents the main, Kids, and chapter logos. Code evidence includes the global header, mobile flyout, homepage stories, project theme, contrast-check script, and the accepted decision to maintain independent CCF source. This is ongoing work; do not use the 2019 case-study metrics as results of the new system or imply completed user testing, a site launch, or full Figma/code synchronization. The user explicitly approved “The Malar Stripe Project” in the article title, matching the Figma cover; this supersedes the earlier naming uncertainty for this article.

`description` appears in the listing preview and page metadata, not in the article body. Articles go directly from the date, headline, and tags into the opening paragraph. There is no TLDR block or `brief` frontmatter field. Let the opening explain what prompted the work and why it mattered. Article pages do not show draft labels.

Card descriptions use the user-requested “How I…” pattern: one direct sentence explaining the author's contribution and what the work involved. Name the actual action or accomplishment confidently, without inventing outcomes. Apply the same voice to future cards. The monorepo and ESR descriptions already followed this pattern; the other visible cards were aligned on September 21. The Astro article focuses on simplifying documentation maintenance and sharing Natura11y’s styles directly; guidance and working examples already appeared together before that migration.

Keep a short “Result” section when it adds a concrete outcome supported by the work. Do not replace the removed TLDR with another summary box or accordions.

Ground article claims in the user's account and verified project evidence. Current code establishes how something works now; it does not establish when a feature was introduced, why the user made a change, or what improved as a result. Distinguish existing features from new work, use history for chronology, and record confirmed motivations in the article's editorial notes. Do not infer novelty, measurable improvements, or completed testing from a migration alone. Keep approved corrections synchronized between MDX and Confluence.

Follow the article with a “Useful links” section. It includes the project case study from `projectName` and `projectUrl`, using optional `projectLinkLabel` when the destination is not a case study, plus any frontmatter `usefulLinks` entries, each with a descriptive `label` and a `url`. The monorepo article links to the canonical GitHub repository and documentation website. The contrast-theme article instead links to Harvard’s “A Deep Dive into Contrast Themes” and the Natura11y documentation; omit the GitHub repository from that article’s useful links. External resources reuse `LinkOpenNew`; internal case studies stay in the current tab.

Images reuse the portfolio’s existing assets. All article thumbnails and social-sharing feature images use the same **2:1 landscape aspect ratio** as the project marquees (for example, 1800 × 900 pixels). The listing and article metadata share `getDrawingBoardImageOptions` in `src/lib/drawing-board/loader.js`, which crops images proportionally through Astro’s image pipeline without enlarging the originals. Choose source images that work with a centered 2:1 crop. Figures within article bodies keep their original proportions so screenshots and diagrams remain complete. Place Markdown images, Astro’s `Image`, or the existing `LightboxImage` inside the shared figure components described below.

## Search and social sharing

Article metadata is generated from the existing frontmatter. The page title includes the article headline and site name; Open Graph and X/Twitter previews use the headline alone, its preview description, and a generated JPEG of its feature image at up to 1200 × 600 pixels. Include descriptive `imageAlt` text. Image dimensions, MIME type, and absolute image URLs are supplied for social crawlers. Keep the 2:1 crop consistent with the listing images.

Article pages use `og:type="article"`, publication date, author, and one `article:tag` entry per assigned tag. Their `BlogPosting` structured data includes the headline, description, canonical URL, feature image, author profile, editorial publication date, and tag names in `keywords`. Dates come from frontmatter, not build time; do not invent a modification date. `max-image-preview:large` allows large search-result image previews without guaranteeing how a search engine displays them.

Canonical links, social-image URLs, the sitemap, and the generated `robots.txt` all use `site` in `astro.config.mjs` as their public origin. Keep that value aligned with the public portfolio address. Social metadata is rendered in the static HTML, so crawlers do not need JavaScript. `status: draft` omits an article entirely; topic filters remain outside the sitemap. After deployment, verify that the article URL and image are publicly accessible, then check the real shared-link preview. Local metadata checks do not verify a social network's live cache or rendering.

External article references must use the existing `LinkOpenNew.astro` component inline in MDX. Import it from `../../components/LinkOpenNew.astro` and pass `LinkUrl` and `LinkText`. It opens the destination in a new tab or window, displays the open-new icon, and includes a screen-reader notice. Its visible label uses Natura11y’s `link__text` wrapper so links with icons receive Core’s hover and focus underlines. Pass `utilities="link"` for standalone links, including Useful links; paragraph links retain Core’s default inline styling. Keep internal portfolio links in the current tab.

The [Drawing Board page in Portfolio Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1235-1890) holds the current export frames. Website asset filenames match those frame names: `drawing-board-…` for the four article thumbnails and `social-graphics-…` for the four advocacy figures. The eight local assets were renamed without changing their bytes, and their MDX references were updated. Keep these names aligned; do not reintroduce the former `desk-…` prefix. The Polypane frame is named `contrast-themes-polypane` (the earlier Figma `polypayne` typo was corrected). The supplied 1620 × 1620 flag artwork is retained at full resolution, rather than replaced by the frame’s smaller default export.

The social graphics article’s feature image is `src/images/avidano-digital/drawing-board-avidano-digital-social-graphics.png`, exported at its original 1800 × 900 size from [the Portfolio Figma frame `drawing-board-avidano-digital-social-graphics`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1224-1367). Its article body uses three series figures, exported unchanged from Figma on September 20, 2026: `src/images/avidano-digital/social-graphics-bluesky-stop-saying.png` (1200 × 380, [node `1229:777`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1229-777)), `src/images/avidano-digital/social-graphics-linkedin-pride.png` (1124 × 720, [node `1230:778`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1230-778)), and `src/images/avidano-digital/social-graphics-accessibility-isnt-a-game.png` (1138 × 594, [node `1230:791`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1230-791)). The first follows the paragraph about keeping disabled people central to accessibility. The “Nothing about us without us” sentence and Pride explanation sit between the first and second figures. The third follows the explanation of “Accessibility isn’t a game.” Each series follows its matching text. All use regular medium-width figures, descriptive captions and alt text, full image proportions, and no lightbox. These replace the combined assortment. The original advocacy collage remains available for other portfolio content. The Confluence article now uses these figures in the same positions as the website. The three tilted figures were re-exported directly through Figma’s PNG export on September 20, 2026, preserving transparent space around the artwork. Keep their alpha channels intact for light and dark site themes; do not substitute screenshots with an opaque canvas background. The matching Confluence attachments use the same transparent PNG bytes.

The fourth social-graphics figure (Figma frame `social-graphics-flagged-for-removal`, node `1230:804`), `src/images/avidano-digital/social-graphics-flagged-for-removal.png`, is copied unchanged from the user’s supplied 1620 × 1620 PNG on September 20, 2026. It appears near the end, directly after the paragraph explaining the flag composition and before “Result.” The caption connects the full graphic to the article’s existing thumbnail. It uses the same regular medium-width figure without a lightbox. The artwork itself credits the word list to The New York Times, March 7, 2025; the new article paragraph describes the design and its message without adding new claims about government policy.

The monorepo article’s feature image is `src/images/natura11y/drawing-board-natura11y-monorepo.png`, exported at its original 1800 × 900 size from [the Portfolio Figma frame `drawing-board-natura11y-monorepo`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1224-1383). The article body keeps the full architecture diagram. Its second figure is `src/images/natura11y/monorepo-figma-context.png`, exported unchanged at 1600 × 950 from [Portfolio Figma frame `monorepo-figma-context`, node `1239:25`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1239-25). It follows the first paragraph of “Context for AI,” which now uses Backdrop as its example. The graphic shows component guidance distinguishing Figma layout variants from Core’s responsive breakpoint. Use a regular narrow-width figure, as requested during local review; preserve its full proportions and keep its caption and alt text aligned with Confluence.

The monorepo article now focuses on preparing Natura11y for AI-assisted development. Evidence includes the live Hi-fi Figma Button, Form, and Main Menu descriptions, the published Lo-fi Button descriptions, Web code syntax on Figma variables, and the source-of-truth rules in the canonical repository’s `TODO.md`. Keep the distinction between the initial migration and the context work that continued afterward. Its July 10 editorial date is retained for the approved article. Explain AI readiness as usable component context and working examples, without claiming autonomous generation or complete design/code synchronization. The Gatsby-to-Astro aside was removed from both copies during final review to keep the article focused.

The contrast-theme article’s feature image is `src/images/natura11y/drawing-board-natura11y-contrast-themes.png`, exported at its original 1800 × 900 size from [the Portfolio Figma frame `drawing-board-natura11y-contrast-themes`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1224-1389). This frame keeps the navigation and outlined controls in the feature crop. The article body uses the separate 1600 × 1067 export from node `1228:758`, preserving its full proportions.

The original full contrast-theme article export remains unchanged at 1600 × 1067. Its current counterpart on Figma’s Drawing Board page is node `1235:1892`; the earlier `1228:758` reference above records the source of the existing export. Renaming assets does not require replacing an approved full-resolution image with a fresh default export.

The Polypane comparison is `src/images/natura11y/contrast-themes-polypane.png`, exported unchanged at 1600 × 906 pixels from [Portfolio Figma node `1228:761`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1228-761). Place it directly after the Polypane paragraph as a regular medium-width figure without a lightbox. It shows the same Storybook form in dark and light contrast themes. Both views use forced colors; they are not a comparison of ordinary light mode with forced colors. [Polypane’s guide](https://polypane.app/blog/forced-colors-explained-a-practical-guide/) explains that browsers derive `prefers-color-scheme: light` or `dark` from the contrast theme’s background.

The ESR caption article’s feature image is `src/images/endangered-species-revenge/drawing-board-esr-inclusive-captioning.png`, exported at its original 1802 × 901 size (2:1) from [Portfolio Figma frame `1225:1394`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1225-1394). It shows the caption work in YouTube Studio. The article body retains its original caption-editor and website-player screenshots.

The user approved the separate ESR review draft on September 20, 2026, and its article body now replaces the main Confluence copy and local MDX. “Custom captions in YouTube Studio” explains obtaining videos without burned-in captions from their original producer and checking each video’s caption wording and timing. Its figure follows that paragraph; the sound-description example comes immediately after the figure. “The video player” incorporates the former “Viewer control” section and describes exporting the caption files into the custom Plyr player. The separate review draft remains available as the approved review copy; subsequent edits should use the main article. Final review removed “Watch ESR’s videos” from both copies, leaving the case study and WebAIM guide as the two useful links. The user approved deployment of the reviewed Drawing Board updates on September 20, 2026.

## Layout

Cards show the date, title, description, and tags. The separate stacked and row templates in `PostCard/` use an article container with a title link whose CSS pseudo-element extends the clickable area. `PostTags.astro` renders a separate list of tag links; their stacking keeps them independently usable. Keep the animation pause/play control outside the article link. Do not wrap these controls or tag links inside another anchor.

Cards and article headers reuse `PostTags.astro`. Any article can have multiple tags or none. `TagNav.astro` derives the alphabetized navigation from visible articles and marks the selected tag with `aria-current="page"`. The existing `/drawing-board/topics/<slug>` routes are retained; there is no fixed set of three topics and no generated empty tag archive. Tag pages remain outside the sitemap and work without JavaScript. These component details were checked against local source on September 27, 2026.

Article pages show Useful links in a separate `subtle-fill-1 padding-3` block, spaced from the article with `margin-top-5`. Keep its semantic H2 visually smaller with `h5`; the link list uses `nav gap-2`. The footer has a top border, `padding-top-2`, and `padding-bottom-4` around one compact “Back to The Drawing Board” text link. Use `<a class="link font-size-sm" href="/drawing-board">` with an `aria-hidden="true"` `icon icon-arrow-left` span before the `link__text` span. This uses Core’s icon-link spacing and hover/focus underline without button styling, and stays in the same tab. A scoped `<style>` in the article template sets `--link-color: currentColor` on its footer, keeping the link in the surrounding text color across themes. Override the existing token here rather than adding a color utility. Do not add a “More from The Drawing Board” or related-article section; the user removed it to keep the articles focused and informal.

The homepage ends with a “The Drawing Board” section after the “Who I am” / “What I do” block and its About Me button, separated by the same horizontal divider used between the homepage’s other sections. Show only the section heading above the cards; omit the explanatory paragraph on the homepage. It automatically takes the latest three visible articles from `getDrawingBoardPosts()`, followed by a “More stories” link. Homepages and case-study related articles import the stacked `PostCard/index.astro`, with H3 headings. Their lists use `grid grid--column-3--lg gap-3` to show three columns from Core's `lg` breakpoint and one column below it. Each card keeps its image above the text, with `padding-3`, a visual `h4` heading, and a `font-size-md` description.

The Drawing Board listing imports `PostCard/PostCardRow.astro`, with H2 headings. It uses two equal columns at Core’s `xxl` breakpoint (1440px): half the row for the 2:1 thumbnail and half for the text. On smaller screens, the image stacks above the text; the card's Sass sets `row-gap: var(--spacer-3)`. The text uses `narrow padding-x-3 padding-y-3`, preserving Carl's October 2 edits. Image `sizes` matches the same breakpoint. Each card uses Core’s `subtle-fill-1` background and the separate article/tag links described above. Use space between cards instead of divider lines, and omit a separate “Read the note” link. Keep the headline in the link color; underline it when the card is hovered or keyboard-focused. Core supplies the keyboard focus outline for article and topic links. Keep card-specific spacing, link overlay, tag stacking, and headline hover/focus rules in `src/components/DrawingBoard/PostCard/style.scss`, imported by both adjacent templates, rather than an embedded `<style>` block.

Use Natura11y Core defaults and utilities for this section. Article headers use `container medium` with `banner-headline` on the H1. Show the date first, then the headline, then the tag links, all centered with `text-align-center`; omit a separate back link. Use `margin-bottom-2` after the date, `margin-bottom-3` after the headline, and `margin-bottom-5` on the header to separate it from the opening text block. Useful links and the footer retain their own `container narrow`. Do not add a separate article stylesheet for styles the system already supplies.

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

## Hemingway review files

Carl requested separate Hemingway folders for case studies and Drawing Board writing on October 4, 2026. Run `npm run export:hemingway` from the project root to refresh both collections.

- `output/hemingway/case-studies/`: all eight case studies and `case-study-summaries.md`.
- `output/hemingway/drawing-board/`: one Markdown file per article, using its source basename, plus `drawing-board-summaries.md` for the current listing introduction and published card descriptions in website order.

Eight articles are exported: seven published posts and the draft “The Malar Stripe Project: building an accessible foundation for cheetah.org.” Including a draft for review does not publish or approve it. Carl clarified on October 4 that only the Hemingway export of “Refreshing the CCF logo” should be removed. Its local MDX draft remains unchanged, and the exporter excludes it from future Hemingway files. It has no main Confluence page.

Exports preserve headlines, section headings, paragraphs, and lists. They omit figures, captions, image descriptions, dates, tags, useful-link panels, and implementation markup. Inline links retain their readable text. The listing descriptions stay in the summary file rather than being inserted into each article. The generated Markdown is local and Git-ignored; the tracked export command recreates it from the canonical website sources.

When Carl explicitly requests a copy update, use `avidano-copy-sync` to update the source, matching main Confluence page, and Hemingway export together. Discussion does not trigger synchronization. Publishing remains a separate request.

October 4 verification: all eight case-study narratives and seven published article exports match the rendered pages in order; all eight exported article bodies also match their MDX source, including the Malar Stripe draft. The nine existing case-study review files are byte-for-byte unchanged after moving. The listing export matches its seven published cards. Website sources and publication settings are unchanged. Verification records are in `output/hemingway-verification-2026-10-04/`.

## Editing in Confluence

[The Drawing Board](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21954562/The+Drawing+Board) in the Carl Avidano UX space contains eight main working article copies as of September 22, 2026. These include the seven published website articles and the CCF foundation draft. The separate logo draft has no main Confluence copy. Main pages follow the corresponding MDX article bodies, editorial dates, topics, section headings, figures in article order, captions, useful links, and footer links.

There are no TLDR blocks, separate preview-description sections, “Article” wrapper headings, image placeholders, or thumbnail-alt-text appendices in the main Confluence articles. Preview descriptions and feature-image metadata remain in MDX frontmatter for cards and social sharing. Do not restore removed summaries when bringing Confluence edits into the website.

- [The Malar Stripe Project: building an accessible foundation for cheetah.org](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21757960) — `src/content/drawing-board/the-malar-stripe-project-building-an-accessible-foundation-for-cheetah-org.mdx`; one typography figure. The website status remains `draft`.
- [Preparing Natura11y for contrast themes (a.k.a. forced colors)](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21987329) — `src/content/drawing-board/preparing-natura11y-for-contrast-themes-a-k-a-forced-colors.mdx`; two figures. Keep Polypane emulation distinct from native Windows verification.
- [Social Graphics: Advocating for inclusion through Avidano Digital](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/21889031) — `src/content/drawing-board/social-graphics-advocating-for-inclusion-through-avidano-digital.mdx`; all four current graphics, replacing the earlier collage. Confluence figure attachment filenames match the current Figma frame names.
- [Presentation: Introducing digital accessibility through practical examples](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/25722885) — `src/content/drawing-board/introducing-digital-accessibility-through-practical-examples.mdx`; the wide selected-slides collection and narrow InDesign Articles-panel figure. August 25, 2026 editorial date; publication approved September 22.
- [Moving the Natura11y design system into an AI-ready monorepo (Website copy)](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/22020097) — `src/content/drawing-board/moving-the-natura11y-design-system-into-an-ai-ready-monorepo.mdx`; the architecture diagram and Backdrop component-guidance figure. The administrative “Website copy” suffix distinguishes this main page from its Rovo child summary.
- [Goodbye Gatsby, hello Astro](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23953409) — `src/content/drawing-board/goodbye-gatsby-hello-astro.mdx`; the approved account of reduced framework overhead, removed custom components, shared styles, and the documentation's place in the monorepo.
- [Natura11y update: New menu components for deeper navigation](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23298049) — `src/content/drawing-board/natura11y-update-new-menu-components-for-deeper-navigation.mdx`; Flyout and Nested nav Storybook figures with matching captions and alt text. March 9, 2026 editorial date.
- [Creating inclusive captioning for ESR](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/22052865) — `src/content/drawing-board/creating-inclusive-captioning-for-esr.mdx`; the caption editor and website player screenshots.

Main child pages are ordered by editorial date, newest first. The September 22 order is CCF foundation, contrast themes, social graphics, accessibility presentation, monorepo, Gatsby-to-Astro migration, navigation, and ESR captioning. The presentation's August 25 date places it between social graphics (September 5) and the monorepo article (July 10). The parent page's existing Children Display macro follows this sidebar order; preserve that automatic list rather than replacing it with manually maintained links.

During the September 20–22 synchronization work, all eleven article figure attachments were downloaded from Confluence and verified byte-for-byte against the website source assets, including the new monorepo graphic and the ESR screenshots copied with the approved revision. Preserve their original proportions and resolution. Superseded attachments are not used in the current pages; they remain available for page history.

The read-back comparison passed for all article-body paragraphs, heading levels, figure order, captions, useful-link text and destinations, and footer links. Verified page versions: ESR 9, contrast themes 10, monorepo 9, CCF foundation 4, social graphics 13, and parent page 3. The updated ESR and monorepo copies were also compared with their generated local HTML. ESR’s Confluence metadata retains the approved “Tag: Accessibility” label; the website displays its topic badge. Image alt-text punctuation also differs: Confluence drops some descriptions containing curly quotes, double quotes, or a colon. Its saved alt text uses straight apostrophes and, for the Pride figure, a comma in place of the colon. All description wording is preserved; the website retains the approved punctuation. Both the connector and native editor were checked. Do not claim literal character-for-character parity for those eight image descriptions.

Changes in Confluence do not automatically update the website. For each approved revision, read both current versions, establish the approved source, and update its counterpart in the same task. Compare the saved text in order, links, captions, image descriptions, and image bytes after saving. Keep Rovo child summaries as separate reference material; they are not approved replacement articles. Do not publish a website draft merely because its working copy exists in Confluence.

## Writing standard

Before drafting or revising Drawing Board articles or any other website copy, always read the current relevant Confluence main pages and comparable approved examples in the Carl Avidano UX space. This is a standing user requirement, also recorded in the root `AGENTS.md` and the Drawing Board parent page. Review the matching local source alongside Confluence to understand the approved voice, level of detail, and structure; cached notes or Rovo summaries are not a substitute. Preserve exact approved wording unless a rewrite is requested, follow the user's latest corrections, and verify proposed factual changes against the underlying work before carrying them to both copies.

Follow the shared [plain-language standard](plain-language.md), adapted from Digital.gov. Apply its guidance and review checklist to article bodies and preview descriptions. Write for prospective clients, hiring managers, and design colleagues who want to understand the work and the decisions behind it.

Each article should share one small, useful piece of thinking from the work: a decision, an experiment, a lesson, or a question still being worked through. Include only the context needed to understand that point. Add something the case study does not already explain, and link to the case study for the broader project story. Keep these as short, informal snippets rather than repeating the full case study. Do not expand a post just to fill out a template.

Respect the reader’s time. Aim for roughly a two-minute read when the subject allows, open with the context readers need, and remove repeated explanations. Preserve concrete examples that show the author’s decisions. When drawing on an AI-generated summary, borrow useful phrasing selectively and check it against the original article and verified evidence.

These posts capture the author's process as the work unfolds, including experiments and work that is still taking shape. Treat them as snapshots in time amid changes in AI and product development, with room for details that brief case studies cannot cover. The section introduction should emphasize process, learning, and work in progress rather than frame the section as an archive of past projects. Keep the focus on the actual work; do not force an AI angle into every article. Explain what prompted the work, the choices considered, and what the author learned. Keep each article simple: a short, informal view into the work as it happens. Include only enough context to explain the work and the thinking behind it. Keep the voice conversational and headlines approachable. Use structure where it helps the reader, without forcing every post into the same format.

Link to Brad Frost’s original writing when it helps explain a concept or decision in the article. Verify the source and connect it to the specific work, using descriptive inline links. The monorepo article retains [AI and Design Systems](https://bradfrost.com/blog/post/ai-and-design-systems/) as its relevant reference; keep broader ecosystem and workbench references only when they support the article’s focus. Do not imply a source influenced an earlier decision unless that history is confirmed.

Keep references unobtrusive: link relevant concepts with short, descriptive text and keep the focus on the author's own work and reasoning. In the Natura11y article, retain the source links without mentioning Brad Frost by name in the prose; the AI link text is simply “AI-assisted development.”

Preserve user-approved titles, factual claims, and requested points. Keep descriptions in previews and metadata. Keep dates in article metadata unless a date is necessary to understand the story. Do not add draft labels, work logs, unsupported outcomes, or generic closing statements. A plain language review is an editorial check; do not claim reader comprehension has been tested without testing it with readers.

When launch is authorized, review the content and editorial dates, deploy the completed build, and verify the public article URLs and social previews. Indexing is enabled for the visible articles and main listing; filtered topic views remain `noindex, follow`.

## Article-specific source notes

These notes retain unique evidence and Carl's corrections from September 21–22. Repeated save/build reports and superseded draft instructions have been removed. Source timestamps are not automatically publication dates or evidence of testing.

### Accessibility presentation

[Confluence working copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/25722885). Publication was approved September 22. August 25, 2026 is an editorial date based on the source filename, not a verified presentation-delivery date. Version 3 and both figure attachments were checked against local sources on September 22. The InDesign figure's Confluence description uses a straight apostrophe because the connector dropped the curly-apostrophe version; the wording is unchanged.

#### Source and scope

Source: `/Users/carlavidano/Projects/Avidano Digital/Clients/TAP/Presentations/A11y Presentation notes/TAP-Introduction-to-Accessibilty-08-25-26.pdf` (39 pages). This replaces the earlier, incorrect Opportunities PDF.

The user approved a collaborative article crediting AJ Favors and linking to https://www.dsgnfav.com/, with a short paragraph about the presentation's accessibility. They confirmed the audience can be described as a New York City nonprofit while keeping the client unnamed. They asked to omit client-specific material. The draft does not name TAP, include its screenshots or findings, discuss its budget, or imply an ongoing engagement. The full PDF is not copied into the website or Figma.

The user designed and approved the final graphic compositions in Figma: the four-principle slide as the feature image and an overlapping collection of general teaching slides as a wide opening figure. They replace the initial thumbnail and separate slide figures. Article text conveys the main teaching points outside the images as well.

Verified PDF features: `/MarkInfo /Marked true`, a `/StructTreeRoot`, language `en-US`, and four bookmarks. Its producer metadata identifies Adobe InDesign 21.5. Tags alone do not establish correct reading order or complete accessibility. The user has not yet supplied details of alt-text authoring, reading-order remediation, assistive-technology testing, or accessibility-check results. Do not invent these or claim PDF/UA conformance. No audience feedback or measured outcomes have been supplied.

#### Figma and assets

The current article graphics are on The Drawing Board page of the Portfolio file. Preserve the user's compositions and aspect ratios. The collection is intentionally wide; the user explicitly approved its appearance on phones.

- [drawing-board-introduction-to-digital-accessibility](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1274-134) — 1800 × 900; exported PNG is the card image.
- [introduction-to-digital-accessibility-collection](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1280-417) — 2923 × 433; transparent PNG used as the article's wide opening figure.
- [indesign-articles-reading-order](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1283-449) — 1400 × 1400; screenshot of the InDesign Articles panel, used as a narrow figure below the presentation-accessibility paragraph.

Website assets live in `src/images/avidano-digital/` and match the Figma frame names. They were exported at the frames' original sizes without changing the composition. Keep later figure edits synchronized.

The user supplied the Articles-panel screenshot after all 39 article entries were given descriptive names in the open InDesign source document. The names intentionally omit slide numbers. The screenshot documents the intended reading sequence; it is not evidence of completed assistive-technology testing or PDF conformance validation.

### Goodbye Gatsby, hello Astro

The subject is the Natura11y documentation migration. Carl supplied the headline and approved publication September 21. [Main Confluence copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23953409); [separate Rovo transcript and editorial notes](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24215553). The refined paragraphs were checked against version 6 on September 21; this is not a current synchronization check.

- Article: `src/content/drawing-board/goodbye-gatsby-hello-astro.mdx`
- Local route: `/drawing-board/goodbye-gatsby-hello-astro`
- `status: published` includes the approved article in local previews and production builds.
- Provisional editorial date: July 8, 2026, within the documented migration work and before the July 10 monorepo article. This is not a claim of a July 8 launch.
- The card description starts “How I…” and focuses on removing Gatsby-specific components and reusing Natura11y’s styles to simplify the documentation. The earlier “within days” framing has been removed. July 4–7 remains evidence of initial implementation work, not a claim that the entire project launched or was completed in four days.
- Feature: [Portfolio Figma frame 1252:1539](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1252-1539), 1800 × 900. Existing frame name is `drawing-board-goodby-gatsby-hello-astro`; the local PNG corrects “goodbye.” Exported through the native Figma PNG export because the connector's render omitted both emoji. Artwork is unchanged.
- Body figure: `natura11y-docs-current.png`, rebuilt October 1 from fresh Chrome captures of the live [Backdrop](https://gonatura11y.com/docs/backdrop/) and [Color](https://gonatura11y.com/docs/color/) pages showing version 5.2.6. Each screenshot is 1920 × 4222; the composition is 3920 × 4222 with an 80 px transparent gap. Screenshots and the editable SVG composition are in the local `output/astro-screenshots-2026-10-01/` capture folder. Carl approved publication October 1. Release `6f719f4` is live after successful [deployment 36916761348](https://github.com/cavidano/carl-avidano-ux/actions/runs/36916761348). Production and review builds passed; the live 3920 × 4222 WebP retains the fully transparent 80 px gap. The main Confluence page is synchronized at v8 with the matching PNG attachment; all other content is unchanged. The older `natura11y-docs-masonry.jpg` remains in use elsewhere. The figure shows the rebuilt documentation, not a before-and-after comparison.

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

### Navigation components

[Main Confluence copy](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23298049); [Rovo notes and unapproved wording proposals](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23461895). Publication of the reviewed article was approved September 21; the Rovo proposals did not replace the main copy. The article has two sections, Flyout menu and Nested navigation, each with its own figure.

The March 9 editorial date uses Nested nav refinement commit `5cccafdc`; Flyout began in February and Nested nav followed in March. No separate `workDate` or archive label is used. The original project trigger has not been confirmed: do not attribute it to a client or user research. The former `/drawing-board/making-room-for-deeper-navigation-in-natura11y` route redirects to `/drawing-board/natura11y-update-new-menu-components-for-deeper-navigation`; the USWDS reference was preserved during that rename.

#### Figma figures

The body figures are actual Storybook screenshots captured at 100% zoom on September 21, 2026, placed inside the existing `2024 - Browser` Figma component. They show the Storybook sidebar, live example, and Code panel. Navigation is captured from the working components, not reconstructed or enlarged in Figma. These are current examples, not screenshots from March.

Both browser bars use the verified Storybook URL, page title, and actual pink Storybook favicon from `https://natura11y.github.io/root/storybook/favicon.svg`. The editable frames are on the Portfolio file’s Drawing Board page:

- [Flyout figure](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1248-2439)
- [Nested navigation figure](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1248-2440)
- [Separate phone feature graphic](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1251-134)

The separate feature graphic uses the actual phone from the live [drill-down demonstration](https://gonatura11y.com/docs/flyout/#drill-down-navigation). It is 1800 × 900 (2:1), with a 520 px-wide phone centered horizontally, approximately 56 px of space above it, and the bottom cropped. Only the phone appears against the demo’s dark background; no documentation, sidebar, code, or browser windows are included.

The approximately 11-second recording shows opening the menu, entering Wildlife and Birds, returning through both levels, and closing. The GIF and MP4 are saved in `public/media/drawing-board/` as `drawing-board-natura11y-navigation.gif` and `.mp4`. The article’s `animatedImage` enables the GIF in listing cards, with a separate pause/play button outside the article link. Reduced-motion preferences and browsers without JavaScript receive the matching still PNG. The still also supplies social metadata.

| Export name | Content and placement | Suggested caption |
| --- | --- | --- |
| `drawing-board-natura11y-navigation.png` | Completed 1800 × 900 feature poster from the real phone recording. Matching GIF and MP4 available for review. | Feature image only. |
| `natura11y-flyout-navigation.png` | Completed 1536 × 992 browser-framed capture of the [Flyout drill-down HTML story](https://natura11y.github.io/root/storybook/?path=/story/flyout--drill-down-html), with the first-level menu open. Medium body figure. | The current Flyout example in Storybook, showing the first level of navigation. |
| `natura11y-nested-navigation.png` | Completed 1536 × 992 browser-framed capture of the [Nested Nav HTML story](https://natura11y.github.io/root/storybook/?path=/story/nested-nav--default-html). Medium body figure. | The Nested Nav example in Storybook marks the American Robin section and Nesting as the current page. |

Keep Figma frame names aligned with export filenames. Use transparent PNGs if frames are tilted or arranged over the page background, so they work in light and dark themes. Body figures retain their original proportions. Use the existing `FigureSingle` component and regular images; choose narrow width for an individual tall sidebar. Write final alt text against the completed graphics.

#### Evidence

All historical source checks used the canonical monorepo at `/Users/carlavidano/Sites/natura11y`, including its preserved history before the monorepo move.

| Claim | Source |
| --- | --- |
| Flyout began on February 19, 2026, initially named mobile menu. | Commits `f065b557` and [`19654417`](https://github.com/Natura11y/root/commit/19654417). The latter renames the files to flyout-menu. |
| Flyout supports moving between panels, a Back control, Escape, and excluding inactive panels from keyboard navigation. | `src/js/flyout-menu.js` at `19654417`. Shared `src/js/utilities/overlay.js` contains the focus trap and return-to-trigger behavior. |
| Flyout transitions respect reduced motion. | `src/scss/_flyout-menu.scss` at `19654417` gates transitions and animations with `prefers-reduced-motion: no-preference`. |
| Nested navigation was added March 7, 2026. | [`4f0bb95f`](https://github.com/Natura11y/root/commit/4f0bb95f) adds `src/scss/_nav-nested.scss`; `84e7f9e7` finalizes the nested-nav naming that day. |
| Nested navigation uses indentation, a section indicator, and bold/underlined current links. | `src/scss/_nav-nested.scss` at `4f0bb95f`, plus the canonical Nested nav documentation and example markup. |

Current public references: [Flyout](https://gonatura11y.com/docs/flyout/) and [Nested nav](https://gonatura11y.com/docs/nested-nav/). The article does not claim completed usability testing, measured improvements, or that the later Storybook/monorepo setup existed in March.
