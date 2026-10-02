# Case-study graphics

Working review list · Updated October 2, 2026

## Follow-up checklist

These are refinements to revisit after publishing the approved image grids, not blockers for this release.

- [ ] **NYC OTI:** reconsider the Vital Records and PoleTop screen selections and preview crops. Carl may prepare more purposeful vertical captures; keep the current grids for now, without the cart summary or phase table.
- [ ] **Visionlearning scientific illustrations:** revisit the custom grid's gutters and alignment. Keep the original composition in use. The [saved experiment patch](experiments/visionlearning-illustration-grid.patch) preserves the implementation.
- [ ] **Natura11y — In the wild:** replace the older composition with the newer project examples.
- [ ] **Mr. Ellie Pooh:** refine the story and decide whether it belongs in the portfolio. Retain the case study until Carl decides; removal is not approved.

## October 2 image cleanup and release

Carl authorized publishing the reviewed galleries, merging the work into main, and removing unused website images. Earlier “local only” and rollback notes below describe checkpoints before this release.

81 unused website image and media files (82,454,217 bytes, about 79 MB) were SHA-256 verified and removed. Their copies are archived outside the repository at `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Retired Website Images/2026-10-02/`, organized by project and original website path. The archive manifest records SHA-256 hashes; each file is verified before its website copy is removed. Current selected images stay in each project's `Final Used Images` folder. Editable masters are untouched.

To restore the deferred Visionlearning experiment, copy the nine archived files from `Visionlearning/src/images/visionlearning/illustrations/` back to the same repository paths, then run `git apply --check context/experiments/visionlearning-illustration-grid.patch` before applying it. They are not part of the current website build.

The static build removes unreferenced generated raster images through `scripts/image-build.mjs`, after application-draft cleanup. It preserves all images referenced by generated HTML (including responsive variants and lightbox targets), CSS, JavaScript, JSON, XML, SVG, and web manifests. Public assets and source images are never deleted by this build step. The existing frontmatter image lookup continues to accept images from any project folder. Both release builds passed 27 tests, zero Astro errors or warnings, and 117 review / 54 production page checks. The production build removed 98 unreferenced generated copies (49.7 MB); all responsive images and lightbox targets remain.

The current case studies are in the local website layout and synchronized to their main Confluence pages. Separate enhanced draft pages are archived. **No new graphic is required to review these pages.** Each addition already has a working visual. Carl chooses which to keep, replace, or refine; placement in the preview does not mean final graphic approval.

Checkpoint before this pass: [`f471d9b`](https://github.com/cavidano/carl-avidano-ux/commit/f471d9b), pushed to `codex/case-study-enhancements`. The preview changes below have not been deployed.

## Section separation

Use dividers to separate distinct sections that share a background. A background-color change already provides that separation; do not add a redundant divider at that boundary. Carl confirmed this preference on September 29, 2026.

## Reversible image-grid exploration

**Tool preference:** Carl asked to avoid Figma for this exercise. Organize existing image files and source exports directly, and assemble/review responsive grids in the website. The four Phoenix originals retrieved earlier are already saved as standalone PNGs; no further Figma step is needed for that group. If a matching source export is missing, identify the gap instead of automatically returning to Figma. Carl subsequently supplied the original Phoenix Figma file and authorized exporting its six citywide screens. This is source export only; no Figma organization or composition was added.

On October 2, Carl requested a new branch to explore individual screenshot grids and help organizing the images. He explicitly wants the ability to abandon the experiment if it becomes overwhelming. Current branch: `codex/case-study-image-grids`. The complete pre-experiment website state is checkpointed at `a57b783` on `codex/visionlearning-figma-images`, including the earlier Figma export comparison and Carl's Drawing Board edits. Main and production are unchanged. Five Phoenix groups are implemented locally: desktop navigation, mobile navigation, six citywide screens, three department screens, and the wireframe-to-finished-design comparison.

`CaseStudyScreens/index.astro` and adjacent `style.scss` now provide two-, three-, and four-column options through Natura11y grid utilities. Two and three stack below the medium breakpoint. **Four columns must stay two across on mobile**, per Carl's correction; four starts at the large breakpoint. `lightbox` and `showLabels` are independent options, defaulting to true for existing Visionlearning groups. Phoenix's first two groups set both false. Without a lightbox, images display in full proportions. Lightbox groups retain the desktop preview crops and use full proportions on phones. The existing shared lightbox loads the full-size asset when opened; thumbnails use responsive Astro WebP images. Review a group at a time, preserving the old compositions. The earlier plan to remove the wireframe component is superseded.

Carl selected the existing archive-drive Case Studies folder as the shared collection, organized by project, and requested a folder name that clearly separates final used images from general project screen grabs. Use `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/<Project>/Final Used Images/`. Store only selected portfolio assets there. Keep matching versioned website copies in `src/images/<project>/`, using `wireframes/` for wireframes and `screens/` for other individual interface screenshots as needed. Use the same descriptive kebab-case filenames in both locations; the MDX controls display order. Copy selected originals rather than moving them. Keep editable masters and general archival material in their current locations. Record source and usage here; a folder name does not establish that a website replacement has been implemented or published.

Earlier Figma organization work is paused: the Visionlearning section has two source-label wrappers (`1439:999`, `1439:1003`), and its existing scientific-illustration rectangle (`1346:1015`) was reused. The new redesign rectangle (`1439:1001`) has not received the Photoshop export; do not report that import as complete. This external Figma state is not covered by the Git checkpoint.

## Review a few at a time

PHX-02 (user stories) now uses Carl’s supplied composition. VL-09 (authoring wireframes) remains a review priority because its detail is difficult to read when reduced. This is a proposed priority, not an instruction to rebuild it.

For each graphic, record Carl's decision in this file: **keep**, **replacement requested**, **replacement supplied**, or **approved**. Before replacing one, agree on what it must show. Preserve the source artifact, then update the image, caption, and description together in the website and corresponding main Confluence page. Do not create a new finding, quote, test result, or design state for visual effect.

The location links open the exact graphic in the running local preview. IDs also appear beside the images in each MDX source. Other case studies are outside this first batch.

## Phoenix

**October 2 — first final-image group prepared:** Carl selected the four-screen header/navigation/search composition as the first example. Saved its original PNG image fills from [Figma frame 1145:1332](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1145-1332), preserving full dimensions and all annotations, to `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Phoenix/Final Used Images/` and `src/images/phoenix/wireframes/`. Verified the PNGs visually against Carl's supplied composition, matched their SHA-1 hashes to the active Figma image hashes, and verified both copies byte-for-byte. These are the original uploaded images, not Figma previews or resized frame exports. The existing `_Screens/phx-wireframes-global-header-footer-*.png` files under `Reingold/Phoenix.gov` show earlier revisions and remain untouched.

| Display order | Final filename | Dimensions | Original Figma image node |
| --- | --- | --- | --- |
| 1 | `phoenix-wireframe-header-footer.png` | 3600 × 2132 | `1145:1333` |
| 2 | `phoenix-wireframe-residents-menu.png` | 1800 × 1066 | `1145:1334` |
| 3 | `phoenix-wireframe-explore-menu.png` | 1800 × 1066 | `1145:1335` |
| 4 | `phoenix-wireframe-search-suggestions.png` | 1800 × 1066 | `1145:1336` |

These four images now appear individually in a two-column grid under “Connecting the sitemap to the global navigation.” The original `phx-masonry-header-footer-01.jpg` is retained. Narrative and shared caption are unchanged; each screen has its own alt text.

**October 2 — mobile-menu group implemented:** Four columns on desktop, two on phones, with no labels or lightboxes. The archive PDF `_Screens/grid-mobile-phoenix-wireframes-02@2x.pdf` contains an older design, including Transportation in the main menu and no contrast control. To preserve the selected design, the current 3280 × 1638 website image `phx-masonry-mobile-menu.jpg` was split at its screen boundaries into four 760 × 1637 PNGs. Only the gutters and one top background row were excluded; the original composite is retained. These are lossless pixel crops from that JPEG, **not original standalone exports**. Carl was informed of and accepted this source distinction. Files are copied and verified byte-for-byte in the final-image archive and `src/images/phoenix/wireframes/`:

1. `phoenix-wireframe-mobile-menu-closed.png`
2. `phoenix-wireframe-mobile-menu-main.png`
3. `phoenix-wireframe-mobile-menu-residents.png`
4. `phoenix-wireframe-mobile-menu-payments.png`

**Verification:** The review build passed 26 tests, zero-error/zero-warning Astro checks, and the 117-page audit, including shared figures across all application sites. Browser checks at 1440 and 390 pixels confirmed the desktop group uses two/one columns and the mobile-menu group uses four/two, with full images, no labels/buttons, and no horizontal overflow. Existing Visionlearning lightboxes open by keyboard and return focus on Escape; their labels and desktop crop ratios remain. The eight image variants selected at 1440 pixels total 143,054 bytes; larger responsive variants remain available. Changes are local and uncommitted; Confluence still has the prior compositions pending review.

**October 2 — six citywide wireframes implemented:** Carl supplied the [original PHX Wireframes + Prototypes file](https://www.figma.com/design/KgIm7QXAECMLOUvFoOw59A/PHX-Wireframes---Prototypes?node-id=3745-41478). All six matching frames were exported directly as native 1× PNGs, preserving full dimensions, proportions, backgrounds, and annotations. No preview screenshots or crops of the old website collage were used. No Figma canvas edits were made. Matching filenames and identical bytes are saved in the final-image archive and `src/images/phoenix/wireframes/`.

| Display order | Final filename | Dimensions | Original Figma frame |
| --- | --- | --- | --- |
| 1 | `phoenix-wireframe-homepage.png` | 1800 × 8216 | `3745:41661` |
| 2 | `phoenix-wireframe-make-a-payment.png` | 1800 × 2742 | `39:3721` |
| 3 | `phoenix-wireframe-resident-topics.png` | 1800 × 3384 | `1345:89997` |
| 4 | `phoenix-wireframe-city-calendar.png` | 1800 × 3806 | `3594:19857` |
| 5 | `phoenix-wireframe-explore-phoenix.png` | 1800 × 4985 | `3773:61892` |
| 6 | `phoenix-wireframe-arts-culture-heritage.png` | 1800 × 6024 | `3773:61743` |

Under [Connecting the citywide pages](http://localhost:4321/case-studies/phoenix#connecting-the-citywide-pages), these use three desktop columns in two rows, with visible labels off and individual lightboxes on. The shared caption and narrative are preserved, with the component's enlargement instruction appended. Each image has its own description and accessible enlargement name. The source's yellow annotations remain. The old `phx-masonry-wireframes-desktop-key-pages.jpg` is retained for rollback. The archive's older PDF and Miro-board Photoshop compositions remain untouched.

**Six-screen verification:** Native exports were visually inspected and archive/website copies verified byte-for-byte. The review build passed 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. At 1440 pixels, six loaded responsive WebP images form three 408px columns and two rows, with 18:25 desktop crops and no overflow. The browser selected 480px-wide thumbnails at its tested pixel density; larger variants are available. Keyboard activation opened the complete 1800 × 8216 homepage, and Escape returned focus to its button. At 390 pixels, images stack at their full proportions without overflow. The temporary viewport override was reset. All 14 selected Phoenix images are now accounted for in both locations. This remains an uncommitted local experiment; no publication or Confluence figure replacement has occurred.


**October 2 — department group reduced to three:** Carl initially identified six panels, then requested avoiding repetition or cutting the group to three. The prior composition repeats Planning and Development; comparison of its first and sixth panels confirmed they use the same screen. Keep three distinct examples in one desktop row: Planning and Development, Municipal Court, and Human Services. Each uses a native 1× PNG exported from the original Phoenix file, a responsive WebP preview, optional lightbox enabled, and visible labels disabled. The existing section heading, narrative, and shared caption are preserved.

| Display order | Final filename | Dimensions | Original Figma frame |
| --- | --- | --- | --- |
| 1 | `phoenix-wireframe-planning-development.png` | 1800 × 6681 | `3725:663` on page `3725:611` |
| 2 | `phoenix-wireframe-municipal-court.png` | 1800 × 5065 | `1571:42292` on page `1571:42291` |
| 3 | `phoenix-wireframe-human-services.png` | 1800 × 6857 | `1571:40190` on page `1268:13411` |

The three selected PNGs are saved with matching names and verified identical bytes in `Final Used Images/` and the website's `wireframes/` folder. Seventeen selected Phoenix assets now exist in both locations. City Clerk and Arts and Culture exports inspected during selection are not retained in either final-used collection; their Figma originals are untouched. The archived Planning and Development alternative (`3734:63909`) differs from the supplied composition and is not used. The old department collage is retained for rollback.

The review build passed 26 tests, zero Astro errors/warnings, and the 117-page audit, including shared case-study figures. The browser shows exactly three distinct screens, no labels, three working full-image targets, responsive 800px WebP previews at the normal tested desktop pixel density, and no horizontal overflow. The component itself is unchanged from the earlier desktop/mobile and keyboard verification. All edits remain local on `codex/case-study-image-grids`; production and Confluence figures remain unchanged pending experiment review.


**October 2 — wireframe-to-finished-design comparison:** Carl selected the next four-panel composition for the same treatment. The original archive files were already available in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/_Screens/`; no Figma export or canvas work was needed. The shared `CaseStudyScreens` now shows two columns and two rows: homepage wireframe/design, then City Parks wireframe/design. Visible labels are off and individual lightboxes are on. Existing two-column preview proportions apply; phones stack the full images in that same paired order. Section copy and shared caption are unchanged.

| Display order | Final filename | Dimensions | Source |
| --- | --- | --- | --- |
| 1 | `phoenix-wireframe-homepage.png` | 1800 × 8216 | Reused existing selected export from original Phoenix Figma frame `3745:41661`; same layout as archived `phx-homepage.png`. |
| 2 | `phoenix-screen-homepage.webp` | 1800 × 7696 | Archived `phoenix-hi-fi-homepage.png` (4000 × 17102); resized proportionally and encoded as quality-90 WebP, 1,315,656 bytes. |
| 3 | `phoenix-wireframe-city-parks.png` | 1800 × 4087 | Original `Dept_ Parks and Recreation -  Level 3.png`, copied without resizing or altering its pixels. |
| 4 | `phoenix-screen-city-parks.webp` | 1800 × 5777 | Archived `phoenix-hi-fi-parks.png` (4000 × 12838); resized proportionally and encoded as quality-90 WebP, 694,808 bytes. |

Archive masters remain untouched. The three new selected assets are saved in `Final Used Images/` and the website with matching filenames and verified identical bytes. Wireframes live under `src/images/phoenix/wireframes/`; finished-page captures live under `src/images/phoenix/screens/`. This brings the selected Phoenix collection to 20 unique files, with the homepage wireframe reused in two sections. Astro generates responsive WebP thumbnails and full-image lightbox assets. The old `phx-masonry-wireframes-to-visual-design.png` is retained for rollback; the former requirement to edit its Figma composition is superseded for this experiment. These are existing archived finished-page captures, not new captures or proof of the exact launch-day appearance.

**Comparison verification:** The review build passed 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. Browser review confirmed two columns, all four responsive images loaded, hidden labels, and no overflow. At the normal desktop viewport and pixel density, it selected 1200px WebP thumbnails. The finished City Parks lightbox loaded its complete 1800 × 5777 image; Escape returned focus to its enlargement button. Existing shared mobile stacking behavior is unchanged. Changes remain local and unpublished.

[Website draft](http://localhost:4321/case-studies/phoenix) · [Confluence main page](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23789570), v41 · [Website source](../src/content/portfolio/phoenix.mdx)

Carl supplied a replacement for PHX-01 on September 28 and refreshed it on September 29. PHX-02 was replaced with his department user-stories composition on September 29. PHX-03 was removed on September 29 when Carl restored the original “Connecting services and related information” heading and paragraph. The original service-page wireframe collage remains with that text.

| ID / location | What it must show | Current graphic | Decision / next action |
| --- | --- | --- | --- |
| [PHX-01 · Discovery strategy](http://localhost:4321/case-studies/phoenix#discovery-before-design) | Breadth of research across city departments: stakeholder questions, draft journeys, proto-personas, and peer analysis. | [Research overview](../src/images/phoenix/phoenix-research-overview.png), Carl's Figma composition. | **Replacement supplied and placed.** Wide, transparent 3800 × 1782 PNG exported at 2× from the original Figma frame on September 29, including the corrected Design Aesthetics slide, after the current five-item methods list. Source frame renamed **Phoenix — Research overview**. User stories remain separate. |
| [PHX-02 · Creating and validating user stories](http://localhost:4321/case-studies/phoenix#creating-and-validating-user-stories) | Parks and Recreation, Public Works, and Police user stories helping the team align on who the site served and see the range of needs by department. | [Department user stories](../src/images/phoenix/phoenix-department-user-stories.png), Carl’s Figma composition of source pages 3, 1, and 6. | **Replacement supplied and placed.** Native transparent 3623 × 1099 PNG exported at 2× from [Phoenix — Department user stories](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1328-1333). Refreshed after Carl added Public Works. Caption and image description match all three boards. The figure and image description were synchronized to Confluence v34 (attachment v2). The surrounding case-study copy was preserved during this replacement. |
| PHX-03 · Payment-assistance journey (retired placement) | The draft bill-payer journey's route toward financial assistance or an extension. | [Payment-assistance journey](../src/images/phoenix/phoenix-payment-assistance-journey.png), retained as a source asset only. | **Removed September 29, 2026.** Carl rejected the payment-assistance emphasis and supplied the original “Connecting services and related information” heading and paragraph. Restored that copy verbatim in local Phoenix and main Confluence v35, removed the standalone journey figure and caption, and kept the original service-page wireframe collage. Do not restore this placement without a new request. |

Original PDFs:

- `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/Personas and Journeys/Phoenix-selected/COPR-UX Stakeholder Questions-170524-101706.pdf`
- `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/User Stories/PHX Pre-workshop User Stories (4).pdf`
- `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/Personas and Journeys/Phoenix-selected/COPR-Journeys-160524-182751.pdf`

**PHX-01 presentation workspace:** [All stakeholder questions in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1313-362), in the existing Portfolio file on **Interwoven Presentations**. Carl clarified that he wants **the complete stakeholder-question document as images**, so he can choose and crop any parts himself; importing only the case-study excerpt was insufficient. All **seven full pages** of the original Confluence PDF export listed above were rendered at **288 dpi / 2448 × 3168 pixels** and imported on September 28, 2026 as seven separate, unlocked PNG image layers, arranged in page order and named by their contents. Original text, notes, page breaks, and proportions are preserved. Image nodes are `1313:364`, `1313:365`, `1313:366`, `1313:367`, `1313:369`, `1313:370`, and `1313:371`. The earlier [Water Services excerpt](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1311-362) remains available separately. This workspace does not replace or approve a website graphic.

Carl supplied the [research overview composition](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1309-1332), now named **Phoenix — Research overview**. It replaces the isolated Water Services excerpt after the research-methods list. The original composition, transparency, and proportions are preserved. The initial preview-derived file was rejected and replaced with an actual native Figma 2× PNG export (3804 × 1749, 2,596,731 bytes). Figma previews/screenshots are for inspection only; never use them as website assets. Carl then revised the Figma composition and explicitly requested another export; that version was saved to Confluence attachment att32931851 v3, page v32. On September 29, Carl requested a local-site refresh from the same frame after correcting the Design Aesthetics slide. The current local asset is the fresh native Figma 2× PNG export (3800 × 1782, 2,915,731 bytes), preserving transparency and composition. The browser loads the full 3800-pixel image at a 1752 CSS-pixel display width and 2× pixel density. All case-study wording, captions, and image descriptions are unchanged; this refresh was synchronized to main Confluence v41 as attachment att32931851 v4 on September 29 and has not been deployed. Its peer-review slides are part of this authorized overview; the removed standalone peer-review figure remains out. User stories stay separate to explain their contribution to content strategy. Use **proto-personas**, not validated personas. Existing sitemap, testing, wireframe, and launch visuals remain in place. The old Water Services asset is retained as source material.

**PHX-03 presentation workspace:** [Selected user journeys in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1318-362), on **Interwoven Presentations**, below the user-story boards. Carl asked for some journeys as images so he can crop them himself. Imported five complete pages from `COPR-Journeys-160524-182751.pdf` at **288 dpi / 2448 × 3168 pixels**: pages **1–2** include bill payment and the complete payment-assistance journey; page **4** includes housing assistance; page **5** includes public-transport information for a screen-reader user; page **9** includes family parks and events. Each page is a separate unlocked image with its original proportions, surrounding content, and draft markings preserved. Retiree benefits and neighboring journey fragments remain visible where they share these source pages. These are optional working materials, not five additional website figures or research quotations; the standalone payment-assistance excerpt was subsequently removed from the website draft on September 29 at Carl's direction.

**Located for Carl during this pass:** the full [Parks and Recreation board export](</Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/User Stories/PHX Pre-workshop User Stories (4)_Page_03.jpg>) has 21 colored user-story notes (5263 × 2900). PHX-02 previously used four notes from its middle row. On September 29, Carl selected a broader composition combining this board with the Police board and requested its replacement in the local case study. Other page exports sit in the same User Stories folder. `_Screens/phx-user-experience-strategy-miro.jpg` and `CLIENT - PHX User Experience Strategy-2.png` show a sitemap/wireframe board instead.

**PHX-02 presentation workspace:** [Six major-department user-story boards in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1315-362), on **Interwoven Presentations**, directly below the complete stakeholder-question set. Carl clarified that he wants a selection of major departments, not all 58 boards. The Figma set now contains **Public Works, Water Services, Parks and Recreation, Planning and Development, Fire/OEM, and Police** (original pages 1–6), arranged in two rows of three. Each is a separate unlocked **5263 × 2900** image with its original proportions. The other 52 imported boards were removed from Figma; all original `PHX Pre-workshop User Stories (4)_Page_*.jpg` files remain in the User Stories folder above. The [Parks and Recreation board](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1315-366) is page 3. No website graphic was replaced.

**Proto-persona source pages:** [Two full pages in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1320-362), on **Interwoven Presentations**, directly below the journeys. Page **2** contains the Resident Bill Payer and Native Resident profiles, along with the source's proto-persona qualification and demographic context. Page **9** contains the complete Screen Reader Navigator, Immigrant, and Spanish-speaking Phoenix Resident profiles, plus neighboring page fragments. Imported at **288 dpi / 2448 × 3168 pixels**, as separate unlocked PNG image layers with original proportions; nodes `1320:363` and `1320:364`. Source: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/Personas and Journeys/Phoenix-selected/COPR-Personas-160524-182638.pdf`. Carl will crop and compose them himself; no new persona claims or revised source graphics were created.

**Peer-review presentation:** [All 41 slides in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1322-362), on **Interwoven Presentations**, below the proto-personas. Source: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/Phoenix.gov/Resources/_PPT-Decks/Peer Landscape Analysis/phx-peer-website-landscape-09-20-23.pdf`, matching the 41-slide PowerPoint of the same name. The `_JPGs` folder contained only 27 slides, so the complete PDF was rendered instead. Imported all 41 full slides as separate raster image layers in original order, arranged in five columns. **Carl requested 800 pixels wide per slide**; all are now 800 × approximately 450, with proportional high-resolution image fills retained for cropping. The earlier presentation-strip composition remains untouched. This is a source-selection workspace, not authorization to restore the removed peer-review figure to the website.

## Visionlearning

**Deferred after review, October 2:** Carl found the illustration-grid gutters/alignment visually off and asked to restore the original image, save the experiment, and move on. Restored the original `FigureSingle` and `visionlearning-scientific-illustrations.jpg` exactly. The experimental component is removed from active source; its complete component, adjacent Sass, and MDX integration are saved in [experiments/visionlearning-illustration-grid.patch](experiments/visionlearning-illustration-grid.patch). All nine extracted WebP assets remain in the website image directory and server archive. To revisit, inspect the patch and use `git apply --check context/experiments/visionlearning-illustration-grid.patch` before applying it. Do not resume this experiment without Carl's request. The implementation and verification notes below describe the reverted experiment.

**October 2 — nine scientific illustrations prepared and implemented:** Carl proposed a dedicated illustration-grid component with adjacent Sass, reusing the shared grid utilities and gutters. After the image extraction, he authorized building it. `VisionlearningIllustrations/index.astro` now replaces the flattened scientific-illustration image locally. Its adjacent `style.scss` controls grid alignment and natural image proportions. The outer `gap-3` utility supplies the inherited gutter for every nested grid. The cell illustrations come first together; the lower composition uses two independent columns on desktop. Large images stack below 768px, and the small experiment pair stays two across. No new JavaScript, image crop ratios, visible labels, or lightboxes were added. The former composition remains available for rollback.

Read current Confluence Visionlearning v42 before splitting the figure's description into individual image descriptions. The approved section prose, caption, theme, and surrounding figures are preserved. Review build passed all 26 tests, zero Astro errors/warnings, and the 117-page audit including shared application case studies. Desktop review at 1280px confirmed all nine responsive WebP images load; primary images selected 1200px variants and the small pair selected 800px variants at the browser's pixel density. Phone review at 390px confirmed one main column, two images in the nested pair, consistent 24px gutters, and no horizontal overflow. Browser viewport was restored. Changes remain local and uncommitted; Confluence and production still use the prior composition pending review.

Inspected the open, saved `masonry.psd` in Photoshop, then read `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Visionlearning/masonry.psd` without modifying it. All nine illustrations are embedded smart objects in its `visionlearning-scientific-illustrations` artboard. Seven embedded JPEGs were extracted directly; the two cell PSBs used their saved merged images, retaining their labels. Converted using each source's embedded color profile to sRGB and encoded as quality-92 WebP without resizing. This color conversion is important for the three CMYK experiment sources. Native proportions are retained; these are full embedded images, not the artboard's masked/cropped frame bounds. Compare frame proportions when implementing the grid rather than assuming exact bottom alignment for every gutter.

All final names start with `visionlearning-illustration-` and end with `.webp`. Matching files are saved in `src/images/visionlearning/illustrations/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Visionlearning/Final Used Images/`, verified byte-for-byte. The nine web assets total 2,206,830 bytes; the PSD remains the source master. The contact sheet used for inspection is not a website asset.

| Filename stem | Embedded source | Dimensions |
| --- | --- | --- |
| `animal-cell` | `64-e.psb` | 2000 × 1334 |
| `plant-cell` | `64-f.psb` | 2000 × 1334 |
| `miller-urey-experiment` | `226-7-LG.jpg` | 1368 × 1944 |
| `endosymbiosis` | `64-9.jpg` | 1200 × 434 |
| `redi-experiment` | `226-3-LG.jpg` | 1440 × 792 |
| `sealed-flask-experiment` | `226-4b-LG.jpg` | 1440 × 756 |
| `protein-structure` | `62-4-LG.jpg` | 1200 × 1200 |
| `rna-dna` | `64-7-LG.jpg` | 1200 × 1200 |
| `periodic-table` | `periodic-table-I-1-LG.jpg` | 1512 × 972 |

**October 2 — individual-image experiment:** Continue on `codex/case-study-image-grids`, without publishing. Only important examples need enlargement. Labels and lightboxes remain optional; images without a lightbox use their natural proportions. No square-specific component logic was added.

The latest-redesign composition is replaced locally with three screens, using the existing three-column lightbox grid without labels. Source JPEGs remain in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Visionlearning/_original/`: `desktop-homepage-3up.jpg`, `desktop-homepage-modal.jpg`, and `desktop-module-reading.jpg`. Selected quality-90 WebP exports are `visionlearning-screen-homepage.webp` (1800 × 2485), `visionlearning-screen-biology-panel.webp` (1800 × 2524), and `visionlearning-screen-periodic-table-reading.webp` (1800 × 7151). Preserve the prior composition for rollback.

Existing wireframes and the content map were renamed descriptively without changing their bytes, with MDX imports updated: `visionlearning-content-map.png`; `visionlearning-wireframe-homepage.png`, `-discipline.png`, `-reading.png`, `-quiz.png`, `-quiz-results.png`, `-glossary.png`, `-admin-module-information.png`, `-admin-reading.png`, `-admin-quiz-question.png`, and `-admin-resources.png`. The abbreviated entries in this list share the `visionlearning-wireframe` prefix. Their layouts remain unchanged.

**2017 group:** Four columns on desktop, two on mobile, no labels or lightbox. The four original 2880 × 2880 captures were located in Portfolio Figma nodes `1356:3145`, `1356:3144`, `1356:3143`, and `1356:3142`, but source transfer was incomplete. After Carl requested completion, used the existing full-resolution website production asset `visionlearning-2017-redesign.png` (4000 × 962) instead. Each screen was extracted as a 962 × 962 lossless PNG, removing the composition gutters. These are crops of the existing production composition, **not original standalone exports**. No Figma canvas edits were made. The source composition remains intact.

| Order | Final filename | Crop left position |
| --- | --- | --- |
| 1 | `visionlearning-screen-2017-homepage.png` | 0 |
| 2 | `visionlearning-screen-2017-library.png` | 1013 |
| 3 | `visionlearning-screen-2017-origins-of-life-reading.png` | 2026 |
| 4 | `visionlearning-screen-2017-glossary.png` | 3038 |

All 18 selected Visionlearning files are saved in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Visionlearning/Final Used Images/` and matching `src/images/visionlearning/screens/` or `wireframes/` locations; all archive copies were verified byte-for-byte. Astro serves responsive quality-85 WebP images. The review build passed all 26 tests, Astro checks, and the 117-page shared-site audit. Main, production, and Confluence remain unchanged pending review.

**Photoshop artboard naming, October 2:** At Carl's request, renamed `visionlearning-masonry-01` to `visionlearning-latest-redesign` in the open Photoshop master. Kept the already descriptive `visionlearning-scientific-illustrations` name. Saved the document in its existing `masonry.psd` location and verified that Photoshop's saving indicator and unsaved-change marker cleared. No relocation, PSD filename change, or website export was made. Use these descriptive artboard names when discussing the current Photoshop master; the Figma comparison frame still has its original name.

**Photoshop master inspected, October 2:** The open document is `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Visionlearning/masonry.psd`. Photoshop shows separate `visionlearning-masonry-01` and `visionlearning-scientific-illustrations` artboards. The selected website-screen artboard is 4000 × 5574 pixels; its visible layers include the three screenshot frames and a color fill. The document has unsaved changes, so disk contents may be older than the open document. Read-only inspection; no save, move, rename, or export was performed. Carl is discussing a consistent storage location and naming convention; no new convention or relocation has been approved yet.

**Refreshed experiment, October 2:** Carl changed the linked Figma frame and requested another export. A fresh 1× PNG (1640 × 2284) now uses `visionlearning-masonry-01-experiment.png` in the local figure. Its homepage screenshot visibly includes the NGSS introduction. The temporary distinct filename avoids the browser reusing Astro development's year-cached image URL from the preceding comparison. No website publication or Confluence synchronization; this remains an experiment. The earlier source-resolution observations describe the initial frame, not a verified audit of Carl's updated image fills.

**1× comparison, October 2:** At Carl's request, replaced the initial 2× preview with a fresh original-frame **1× PNG export (1640 × 2284)** under the same `visionlearning-masonry-01.png` filename. Composition, display width, caption, and alt text are unchanged. The earlier 2× preset remains in Figma; this export explicitly uses 1×. The 2× details below describe the initial comparison, not the current local image.

**October 2 — Figma export preview:** Carl requested a local comparison of [visionlearning-masonry-01](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1434-1750), on the Portfolio file's **Case Studies** page. The original 1640 × 2284 frame was exported as a 2× PNG, `src/images/visionlearning/visionlearning-masonry-01.png` (3280 × 4568), with its blue background and composition preserved. A reusable 2× PNG preset is saved on the Figma frame. The [latest redesign figure](http://localhost:4321/case-studies/visionlearning#the-latest-redesign) now uses that export; caption, alt text, and surrounding copy are unchanged. The previous `visionlearning-masonry-key-pages.jpg` is retained during review. The frame contains 800px-wide raster screenshots; exporting at 2× does not restore additional source detail. Local preview only, on `codex/visionlearning-figma-images`; website publication and Confluence replacement await review. The local browser loaded the 3280 × 4568 optimized image directly inside the figure, at the original proportions.

[Website draft](http://localhost:4321/case-studies/visionlearning) · [Current Confluence page](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23429129), v21; current local narrative and figures synchronized, duplicate drafts archived · [Website source](../src/content/portfolio/visionlearning.mdx)

Four active additions, copied from the existing draft package without redrawing, cropping, or changing their contents. The earlier Classroom addition was removed at Carl's request:

| ID / location | What it must show | Current graphic | Decision / next action |
| --- | --- | --- | --- |
| VL-03 · Classroom (removed) | Archived Classroom introduction and free-registration benefits. | [2017 Classroom design](../src/images/visionlearning/visionlearning-classroom-2017.jpg), retained as a source asset only. | **Removed September 28, 2026.** Carl rejected a dedicated section and old screenshot that did not establish enough hiring value. Removed the heading, paragraph, figure, caption, and image description from the local preview and Confluence draft v13. Retain the broader research narrative; do not restore this section without a new request. |
| [VL-07 · Adapting graphics to the lesson](http://localhost:4321/case-studies/visionlearning#adapting-graphics-to-the-lesson) | Different uses of the same scientific subject: element families, electron blocks, atomic radius, and electron structure, including Spanish. | [Periodic-table lesson adaptations](../src/images/visionlearning/visionlearning-periodic-table-lesson-adaptations.png). | **Replaced September 29, 2026, at Carl’s request.** Original 2× PNG export of [Figma frame 1335:3121](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1335-3121), named `visionlearning-periodic-table-lesson-adaptations`; 3814 × 3566 after Carl’s further top-row revision, with transparency preserved. Its heading, text, and figure now form a separate section below the blue scientific-illustration area, with a divider before module authoring. The latest local export includes electron-block and orbital-label diagrams in the top row. Confluence page v21 and attachment att33390638 v2 now match the latest export and image description. Website changes remain unpublished. |
| [VL-08 · Supporting the people authoring modules](http://localhost:4321/case-studies/visionlearning#site-structure-and-content-management-outline) | Relationships among disciplines, modules, glossary entries, and shared media, with authentic development questions. | [Administration content map](../src/images/visionlearning/visionlearning-administration-content-map.png). | **In preview; review.** Preserve working annotations and unresolved questions; do not present the map as proof every proposed feature shipped. |
| [VL-09 · Supporting the people authoring modules](http://localhost:4321/case-studies/visionlearning#designing-the-authoring-workflow) | How the content structure became authoring screens, including reading, quizzes, and resource groups. | [Authoring wireframe overview](../src/images/visionlearning/visionlearning-authoring-wireframe-overview.png). | **In preview; review first.** The wide overview conveys breadth, but individual controls are small. Carl can choose a more focused composition using his existing PNGs. No new Balsamiq export is needed. |
| [VL-10 · Looking back](http://localhost:4321/case-studies/visionlearning#looking-back) | Continuity and change across the long engagement. | [Homepage evolution](../src/images/visionlearning/visionlearning-homepage-evolution.png). | **In preview; review.** Keep the 2012/2016 archive dates distinct from the September 2026 site capture; that capture does not extend the stated 2012–2025 engagement. |

Source package: `/Users/carlavidano/Documents/Codex/2026-09-28/x20-this-is/outputs/visionlearning-draft/`. The five matching files are `assets/classroom-2017.jpg`, `visionlearning-periodic-table-mashup.png`, `visionlearning-administration-content-map.png`, `visionlearning-authoring-wireframe-overview.png`, and `visionlearning-homepage-evolution.png`. The package's source JSON files record original paths and composition details.

Existing editable compositions and originals:

- [Administration content map in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1301-435)
- [Authoring overview in Figma](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1301-434)
- [Homepage comparison in Figma](https://www.figma.com/design/UZrFN7zt8cdKh7BvrWnzia?node-id=5-3)
- Original authoring PNGs: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Visionlearning/Wireframes/`. `07-module-reading.png` and `09-module-quiz-question.png` are available for a closer view if Carl chooses.

Retained figures: VL-01 logo, VL-02 page layouts, VL-04 Spanish mobile screens, VL-05 interactive-tools animation, VL-06 scientific illustrations. The animation and its controls are unchanged. The confidential research reports, removed NGSS source figure, and illustration-review figures remain reference material, not new website graphics.

## Natura11y

**October 2 — Templates and Examples:** Carl chose all five screens in each gallery, three across, with lightboxes and no visible labels. Both now use the existing `CaseStudyScreens` component: three images in the first row and two in the second, with no custom component or styling. The original compositions remain available for rollback. Approved section prose and caption wording are preserved, with the shared enlargement instruction appended. This supersedes the brief deferral and proposed reduction to four.

All ten matching originals were located and visually compared with the compositions in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Natura11y/Screens/2026/`. Each original is 4000px wide. Complete screenshots were resized proportionally to 1800px wide and encoded as quality-90 WebP. Matching files in `src/images/natura11y/screens/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Natura11y/Final Used Images/` were verified byte-for-byte. Final filenames below share the prefix `natura11y-screen-` and suffix `.webp`.

| Original filename | Final filename stem | Dimensions | Bytes |
| --- | --- | --- | ---: |
| `a11y-template-landing.png` | `template-landing` | 1800 × 4782 | 212,566 |
| `a11y-template-two-column.png` | `template-two-column` | 1800 × 4315 | 493,486 |
| `a11y-form.png` | `template-contact-form` | 1800 × 2707 | 103,312 |
| `a11y-template-three-column.png` | `template-three-column` | 1800 × 4352 | 496,928 |
| `a11y-search-results.png` | `template-search-results` | 1800 × 2858 | 264,538 |
| `a11y-example-peak-performance.png` | `example-peak-performance` | 1800 × 3954 | 549,350 |
| `a11y-example-avian-elegance.png` | `example-avian-elegance` | 1800 × 3825 | 450,026 |
| `a11y-example-majestic-lion.png` | `example-majestic-lion` | 1800 × 3988 | 375,624 |
| `a11y-example-verdant-trails.png` | `example-verdant-trails` | 1800 × 6179 | 729,022 |
| `a11y-example-oceanic-pulse.png` | `example-oceanic-pulse` | 1800 × 3439 | 739,198 |

The review build passed 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. Browser checks confirmed all ten thumbnails load as responsive 800px images at the desktop viewport, three columns at 1280px, one at 390px, no visible labels, and no horizontal overflow. Contact Form and Oceanic Pulse lightboxes load their complete 1800px-wide images; Enter opens and Escape restores button focus. Viewport restored after testing. Proof: `/tmp/natura11y-examples-grid-desktop.png`. Carl subsequently requested removing the gray border across these grids. Removed the decorative border from `CaseStudyScreens/style.scss`; browser computed styles confirm zero-width borders. Standard keyboard focus styling remains intact. Borderless proof: `/tmp/natura11y-galleries-borderless.png`.

**October 2 — Public documentation:** Replaced the flattened Backdrop/Color composition with `CaseStudyScreens`, two desktop columns, individual lightboxes, and no visible labels. Mobile retains the shared component's stacked, natural-proportion images. The original `natura11y-docs-masonry.jpg` is retained. Current Confluence page 23855116 v36 was read; approved section prose and other figures are unchanged. This remains a local experiment, with publication and Confluence figure synchronization pending review.

Sources are in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Natura11y/Screens/2026/`: `screencapture-gonatura11y-docs-backdrop-2026-07-16-08_08_28.png` and `screencapture-gonatura11y-docs-color-2026-07-16-08_21_45.png`. Both are 4000 × 28800 and show version 5.2.3, matching Carl's reference. The named `natura11y-backdrop.png` / `natura11y-color.png` files and Photoshop embeds show older 5.1.0 content and were not used in the final grid.

Exports preserve each complete screenshot, resized proportionally to 1800 × 12960 and encoded as quality-90 WebP. Matching copies in `src/images/natura11y/screens/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Natura11y/Final Used Images/` are byte-identical:

| Final filename | Bytes |
| --- | ---: |
| `natura11y-screen-documentation-backdrop.webp` | 1,112,712 |
| `natura11y-screen-documentation-color.webp` | 865,860 |

The review build passed 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. Browser verification confirmed two columns at 1280px, one at 390px, no horizontal overflow, and responsive 1200px thumbnail sources on desktop. Both lightboxes load the complete 1800 × 12960 image; Enter opens and Escape restores focus to the originating button. The local dev server needed a configuration reload after the asset filenames changed. Final proof: `/tmp/natura11y-docs-grid-desktop.png`.

## Cheetah.org

**October 2 — desktop galleries:** Converted the main-site and CCF Kids masonry images into two `CaseStudyScreens` grids, each with three columns, individual lightboxes, and no visible labels. Both reuse the shared borderless styling. Read current Confluence page 24182787 v18 first; narrative, results, logos, font example, section order, and the phone mockup strip remain unchanged. The two original masonry files remain available for rollback. Changes are local, with Confluence figure synchronization and publication pending review.

Sources are in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Cheetah.org/`. Used the full desktop screenshots rather than the separately shortened variants so enlargement reveals each complete source. The Kids screenshots match the existing composition; some visible content dates are later than the 2019 launch, and these image changes do not alter the stated engagement dates or attribute later content to that launch.

Final exports use quality-90 WebP at their native widths (no enlargement), preserving full proportions. They are saved in `src/images/cheetah-conservation-fund/screens/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Cheetah.org/Final Used Images/`, verified byte-for-byte. All final names below share the prefix `cheetah-conservation-fund-screen-` and suffix `.webp`.

| Original filename | Final filename stem | Dimensions | Bytes |
| --- | --- | --- | ---: |
| `ccf-desktop-home.jpg` | `homepage` | 1800 × 6954 | 1,232,944 |
| `ccf-desktop-what-we-conservation.jpg` | `conservation` | 1800 × 10921 | 1,703,624 |
| `ccf-desktop-who-we-are-marker.jpg` | `laurie-marker` | 1800 × 10426 | 1,735,304 |
| `ccf-kids-landing.jpg` | `kids-cheetah-facts` | 1682 × 12265 | 1,818,042 |
| `ccf-kids-art-page.jpg` | `kids-artists` | 1682 × 5780 | 1,042,976 |
| `ccf-kids-blog.jpg` | `kids-art-competition` | 1682 × 11448 | 2,528,650 |

The review build passed 26 tests, zero Astro errors/warnings, and the 117-page audit. Browser checks confirmed six loaded 800px desktop thumbnail variants, three columns at 1280px, one at 390px, no labels or decorative borders, and no horizontal overflow. Homepage and Kids article lightboxes loaded their complete source dimensions; keyboard opening, Escape closing, and returned focus passed. Viewport restored. Proofs: `/tmp/cheetah-main-gallery.png` and `/tmp/cheetah-kids-gallery.png`.

Mobile source candidates were also located in the same source folder: `ccf-mobile-home-shortened.jpg`, `ccf-mobile-home-map-shortened.jpg`, and `ccf-mobile-marker-shortened.jpg` (each 414 × 1400), plus the full `ccf-mobile-home.jpg` (414 × 9844). These have not been exported or substituted for the existing phone mockups. Carl later clarified that his instruction about clean full-screen lightboxes referred to NYC, not to these mobile captures. The six Cheetah desktop sources are complete and clean. Direct inspection of the mobile candidates shows they are only 414px wide, with the map and biography crops cutting into adjacent paragraphs/sections. Keep the existing phone mockup strip for now rather than enlarging those partial crops. The NYC conversion is recorded below.

## NYC OTI

**PoleTop follow-up:** Carl requested two columns, initially keeping all five screens. He then found the new layout less impressive than the masonry composition and explicitly requested removing the phase table. The current grid contains four screens in two columns: location check, dashboard, reservation, and map reference. Retained the existing landscape preview ratio, lightboxes, and hidden labels. The unused phase-table export remains saved for recovery. Twelve screens now appear across NYC’s four galleries. Further presentation review remains open; no restoration or additional redesign was requested.

**DoRIS follow-up:** Carl found the landscape previews too short. Removed the cart summary from the gallery and its import, retaining the request form and shopping cart in two columns with the standard `9 / 10` preview ratio, lightboxes, and no labels. The earlier cart-summary export remains saved but is no longer displayed. This initially left thirteen screens across NYC’s four galleries; the later PoleTop removal brings the count to twelve. This supersedes the initial DoRIS layout below.

**October 2 — four individual-image galleries:** Carl clarified that NYC can use individual lightboxes if the complete source screenshots are clean. Inspected all 14 matching originals through their footers. MFTA, Notify NYC, DoRIS, and PoleTop Manager now use the existing borderless `CaseStudyScreens` component with three desktop columns, optional enlargement enabled, and visible labels disabled. PoleTop has five screens arranged three then two. Mobile stacks the complete images at natural proportions.

MFTA and Notify use the default portrait preview. DoRIS and PoleTop use the existing `ratio="3 / 2"` option because several original screens are shorter; landscape previews avoid adding empty space beneath those images. No custom component or new layout CSS was added. All original compositions remain available for rollback.

Current Confluence page 24510466 v17 was read before the change. Narrative, heading order, outcomes, revenue sources, and theme backgrounds are preserved. New image descriptions accurately identify the MFTA and Notify public website screens; they do not claim to show the administrative platforms. Work remains local and unpublished, with Confluence figure synchronization pending review.

Originals remain under `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/NYC OTI/`. Complete sources were resized proportionally to a maximum width of 1800px, without enlargement, and encoded as quality-90 WebP. The MFTA homepage retains its native 1660px width. Matching exports in `src/images/nyc-oti/screens/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/NYC OTI/Final Used Images/` were verified byte-for-byte.

| Original relative path | Final filename | Dimensions | Bytes |
| --- | --- | --- | ---: |
| `MFTA/MFTA-homepage.jpg` | `nyc-oti-screen-mfta-homepage.webp` | 1660 × 4972 | 623,078 |
| `MFTA/MFTA-donating-materials.png` | `nyc-oti-screen-mfta-donating-materials.webp` | 1800 × 3798 | 375,596 |
| `MFTA/MFTA-receiving-materials.png` | `nyc-oti-screen-mfta-receiving-materials.webp` | 1800 × 4404 | 500,004 |
| `Notify NYC/notify-nyc-homepage.png` | `nyc-oti-screen-notify-homepage.webp` | 1800 × 3534 | 495,508 |
| `Notify NYC/notify-nyc-enroll.png` | `nyc-oti-screen-notify-enrollment.webp` | 1800 × 2430 | 206,420 |
| `Notify NYC/notify-nyc-about.png` | `nyc-oti-screen-notify-about.webp` | 1800 × 4959 | 650,074 |
| `DORIS/order-vital-records.png` | `nyc-oti-screen-doris-order-vital-records.webp` | 1800 × 5101 | 244,738 |
| `DORIS/order-vital-records-shopping-cart.png` | `nyc-oti-screen-doris-shopping-cart.webp` | 1800 × 2586 | 121,482 |
| `DORIS/order-vital-records-order-summary.png` | `nyc-oti-screen-doris-cart-summary.webp` | 1800 × 1638 | 80,726 |
| `Poletop Manager/nyc-poletop-check-pole-location.jpg` | `nyc-oti-screen-poletop-check-location.webp` | 1800 × 1273 | 83,312 |
| `Poletop Manager/nyc-poletop-edit-phase.jpg` | `nyc-oti-screen-poletop-edit-phase.webp` | 1800 × 1632 | 109,056 |
| `Poletop Manager/nyc-poletop-admin-dashboard.jpg` | `nyc-oti-screen-poletop-dashboard.webp` | 1800 × 2593 | 208,868 |
| `Poletop Manager/nyc-poletop-reservation.jpg` | `nyc-oti-screen-poletop-reservation.webp` | 1800 × 1783 | 188,826 |
| `Poletop Manager/nyc-poletop-tearsheet.jpg` | `nyc-oti-screen-poletop-map-reference.webp` | 1800 × 4028 | 441,702 |

The review build passed 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. Browser checks confirmed all 14 responsive thumbnails load, three columns at 1280px, one at 390px, no visible labels or decorative borders, and no horizontal overflow. A complete source in each group was opened by keyboard; Escape closed each viewer and restored focus. Verified full dimensions: MFTA homepage 1660 × 4972, Notify enrollment 1800 × 2430, DoRIS request 1800 × 5101, and PoleTop map reference 1800 × 4028. Viewport restored. Proofs: `/tmp/nyc-mfta-gallery.png`, `/tmp/nyc-doris-gallery.png`, and `/tmp/nyc-poletop-gallery.png`.

## Mr. Ellie Pooh

**October 2 — individual storefront screens:** Carl requested trying the shared grid while considering whether to retain this case study. Keep it on the general portfolio for now; he expects it would rarely be selected for a custom application. No application selection or publication setting was changed. Its commerce, photography, artisan visit, and fair trade story remain under review, with no narrative rewrite authorized in this pass.

Replaced only `mr-ellie-pooh-masonry-key-pages.jpg` with four individual screens: homepage, product category, product detail, and Papermakers and Artisans. Uses the existing `CaseStudyScreens` component, two columns, square desktop previews through `ratio="1 / 1"`, individual lightboxes, and no visible labels. Square previews accommodate the shorter product page without an empty band beneath it. Mobile shows the full images stacked. Original composition retained for comparison; mobile mockups, factory photos, carousel feature, product-photo composition, prose, and results remain unchanged. Current Confluence page 24576001 v15 was read before editing. Local only; Confluence figure synchronization remains pending review.

All four original desktop JPEGs were located in `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Mr. Ellie Pooh/` and inspected through their footers. Complete originals were encoded as quality-90 WebP at their native 1600px width without resizing or cropping. Matching copies in `src/images/mr-ellie-pooh/screens/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Mr. Ellie Pooh/Final Used Images/` were verified byte-for-byte.

| Original filename | Final filename | Dimensions | Bytes |
| --- | --- | --- | ---: |
| `mep-desktop-home.jpg` | `mr-ellie-pooh-screen-homepage.webp` | 1600 × 2958 | 1,049,366 |
| `mep-desktop-product-category.jpg` | `mr-ellie-pooh-screen-product-category.webp` | 1600 × 2584 | 585,248 |
| `mep-desktop-product.jpg` | `mr-ellie-pooh-screen-product-detail.webp` | 1600 × 1668 | 399,702 |
| `mep-desktop-papermakers.jpg` | `mr-ellie-pooh-screen-papermakers-and-artisans.webp` | 1600 × 2870 | 981,068 |

The review build passed 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. A source comparison confirmed that narrative and all unrelated figures are unchanged. Browser checks confirmed four loaded responsive 1200px desktop previews, two columns at 1280px, one natural-proportion column at 390px, no labels, and no horizontal overflow. Homepage and Papermakers and Artisans lightboxes loaded their complete 1600px-wide sources; keyboard opening, Escape closing, and focus restoration passed. The viewport was reset. Preview: `/tmp/ellie-pooh-review/desktop-grid.png`.

## LADRC

**October 2 — responsive grid preview:** Carl explicitly requested replacing the three wireframe compositions, superseding the September 28 preservation instruction below for this local experiment. The first group contains only the homepage and survivor-resource screens, two across with lightboxes and no labels. Carl removed the separate navigation/footer detail. The mobile menu, expanded menu, and search screens appear three across without labels or lightboxes. The disaster listing and detail page appear two across with lightboxes, followed by the unchanged paragraph about resource labels and then the narrow resource-card detail with its own lightbox. This ordering follows Carl’s explicit correction: keep the resource-card image; remove the third image from the first group.

The nine complete originals came from `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/LADRC/_Screens/`. Compressed WebP copies (quality 90, at most 1800px wide, no enlargement or cropping) are in `src/images/ladrc/wireframes/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/LADRC/Final Used Images/`, verified byte-identical. Eight are displayed; the navigation/footer export is retained as an unused alternative. The original compositions remain available. Research methods, headings, and prose are preserved; only the resource-label paragraph moved. Confluence v14 was read before editing and is unchanged pending visual review. Local only.

| Original export | Final filename | Dimensions |
| --- | --- | --- |
| `Homepage.png` | `ladrc-wireframe-homepage.webp` | 1800 × 5263 |
| `ResourcesForDisasterSurvivors.png` | `ladrc-wireframe-survivor-resources.webp` | 1800 × 3600 |
| `GlobalHeaderFooter.png` | `ladrc-wireframe-global-header-footer.webp` | 1800 × 1291 |
| `MobileMenu.png` | `ladrc-wireframe-mobile-menu.webp` | 768 × 1792 |
| `MobileMenuNavOpen.png` | `ladrc-wireframe-mobile-menu-expanded.webp` | 768 × 1792 |
| `MobileMenuSearch.png` | `ladrc-wireframe-mobile-search.webp` | 768 × 1792 |
| `RecentDisasterLanding.png` | `ladrc-wireframe-recent-disasters.webp` | 1800 × 3600 |
| `RecentDisastersDetail.png` | `ladrc-wireframe-disaster-detail.webp` | 1800 × 4628 |
| `ResourceItems.png` | `ladrc-wireframe-resource-cards.webp` | 1800 × 926 |

[Website draft](http://localhost:4321/case-studies/ladrc) · [Current Confluence page](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24543233), v11; duplicate draft archived · [Website source](../src/content/portfolio/ladrc.mdx)

**September 28 correction:** Carl rejected replacing the original compositions with separate navigation, resource-card, and large Help Center exports. He wants the original case-study structure and graphics, with modest wording changes that clarify research methods, collaboration, and how findings informed the designs. No new LADRC graphics are needed for this revision.

The newer Solution paragraph from main Confluence v10 is retained. The original Looking back section remains verbatim. Keep each composition, its original proportions and width, and its surrounding background together. The navy background is designed into both wireframe collages and must continue into their `ThemeWrapper` sections (`#0B1844`). Do not place either collage on the unthemed page or replace it with isolated screenshots.

| Location | Original graphic | Presentation |
| --- | --- | --- |
| [Research and discovery](http://localhost:4321/case-studies/ladrc#research-and-discovery) | [Tree-test task](../src/images/ladrc/ladrc-tree-testing.png) | Medium width, original transparent laptop composition. |
| [Findings and recommendations](http://localhost:4321/case-studies/ladrc#findings-and-recommendations) | [Presentation strip](../src/images/ladrc/LADRC-recommendations-ppt.png) | Wide, original grouped slides. |
| [Low-fidelity wireframes](http://localhost:4321/case-studies/ladrc#low-fidelity-wireframes) | [Key-page collage](../src/images/ladrc/ladrc-masonry-wireframes-key-pages.jpg) | Wide, inside its matching navy ThemeWrapper. |
| [LADRC-02 · Mobile search](http://localhost:4321/case-studies/ladrc#making-search-visible-on-mobile) | [Mobile Search/Menu wireframes](../src/images/ladrc/ladrc-grid-mobile-wireframes.png) | Wide, original transparent three-screen composition. |
| [LADRC-04 · Disaster information](http://localhost:4321/case-studies/ladrc#making-disaster-information-easier-to-use) | [Disaster-page and resource-card collage](../src/images/ladrc/ladrc-masonry-wireframes-disaster-pages.jpg) | Wide, inside its matching navy ThemeWrapper. |

Retired preview placements LADRC-01, LADRC-03, and LADRC-05 are no longer used. Their exported PNGs remain working source assets; their presence does not authorize reintroducing them. The deferred testing-script screenshot and incorrect legal-professional results table stay excluded.


## UNICEF

**Caption direction, October 2:** Carl requested the existing `narrow` utility on both caption branches in `FigureSingle`, keeping full-width galleries with shorter reading lines. Removed the automatic “Select a screen to view the full layout” addition from `CaseStudyScreens` everywhere. Do not add click/enlarge instructions or production notes such as anonymization to public captions. Meaningful accessible button names remain necessary and unchanged.

[Website preview](http://localhost:4321/case-studies/unicef) · [Current Confluence page](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24444947), v15 · [Website source](../src/content/portfolio/unicef.mdx)

**October 2 — full-color gallery preview:** Replaced the two hi-fi masonry compositions with the shared `CaseStudyScreens`: four toolkit screens in two columns, and five dashboard screens in three columns. Both use the existing `6 / 5` ratio option, individual lightboxes, and no visible labels. These short landscape previews suit the mix of short and tall application screens; the lightboxes retain each complete image. Carl explicitly retained the second wireframe montage for now. Both wireframe compositions, the whiteboards, four annotated review-flow pages, implementation-review image, and all narrative remain unchanged. Carl subsequently removed anonymity notices from its caption and from image descriptions.

All nine matching original screenshots were found under `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/UNICEF/2025 Screens/`. The folder date is an export date, not the date of the project. Exported at 1800px wide with their full proportions and WebP quality 90. Three derivatives replace staff names or contact details with neutral examples, consistent with the existing UNICEF anonymization preference; originals are unchanged. The assignments derivative also replaces the identifiable story title with “Human Interest Material.” These edits affect the toolkit document, assignments, and toolkit-management screens; the other six are unaltered apart from resizing/compression. Anonymization is recorded only in working notes. Carl explicitly rejected public anonymity notices, so captions and alt descriptions focus on what each image shows.

Final files are in `src/images/unicef/screens/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/UNICEF/Final Used Images/`, with all nine archive copies verified byte-identical. Original website compositions are retained for reversal. Export source mapping and exact derivative edits are recorded in `output/unicef-grid-review/exports.json` and `export.mjs`. Confluence v15 was read and is unchanged pending visual review. Local only; no publication or commit.

| Original export relative to `2025 Screens/` | Final filename | Dimensions | Bytes |
| --- | --- | --- | ---: |
| `Toolkits/donor-toolkit-home.jpg` | `unicef-screen-toolkit-home.webp` | 1800 × 1562 | 277,060 |
| `Toolkits/donor-toolkit-document.jpg` | `unicef-screen-toolkit-document.webp` | 1800 × 4349 | 426,512 |
| `Toolkits/donor-toolkit-all-pcr.jpg` | `unicef-screen-toolkit-financial-reports.webp` | 1800 × 3119 | 276,274 |
| `Toolkits/donor-toolkit-compare-countries.jpg` | `unicef-screen-toolkit-compare-countries.webp` | 1800 × 1490 | 136,412 |
| `dashboard/dashboard-landing.jpg` | `unicef-screen-dashboard-home.webp` | 1800 × 1696 | 225,998 |
| `dashboard/dashboard-assignments.jpg` | `unicef-screen-dashboard-assignments.webp` | 1800 × 1831 | 160,512 |
| `dashboard/dashboard-pfp-toolkit-manager-all-toolkits.jpg` | `unicef-screen-dashboard-all-toolkits.webp` | 1800 × 3305 | 161,220 |
| `dashboard/dashboard-toolkit-manager-create-toolkit-document.jpg` | `unicef-screen-dashboard-create-document.webp` | 1800 × 1768 | 85,074 |
| `dashboard/dashboard-pfp-toolkit-manager-assign-new-toolkit.jpg` | `unicef-screen-dashboard-assign-toolkit.webp` | 1800 × 1807 | 95,162 |

UNICEF verification: the review build passed all 26 tests, zero Astro errors/warnings, and the 117-page shared-site audit. All nine responsive previews loaded (1200px toolkit sources and 800px dashboard sources at the reviewed desktop size). Desktop grids render two and three columns; both stack at natural proportions on a 390px phone with no horizontal overflow. Dashboard and full-length toolkit-document lightboxes loaded complete 1800px sources; keyboard opening, Escape, and focus restoration passed. The viewport was reset. Shared caption width is 800px inside a 1120px gallery at the reviewed desktop size. Browser readback confirms enlargement instructions and anonymity notices are absent. Final preview: `/tmp/unicef-grid-review/dashboard-final.png`.

**Remaining combined artwork after this pass:** 24 `CaseStudyScreens` galleries now cover all eight case studies. The first UNICEF five-wireframe composition still remains, alongside the second dashboard wireframe montage that Carl explicitly chose to keep. Visionlearning’s scientific-illustration composition is intentionally deferred; its periodic-table lesson collage also remains. Purpose-made mobile/device mockups, research/presentation strips, photography compositions, and Natura11y’s In the wild image remain combined artwork. Do not claim that every composite image has been converted or deleted. Current gallery changes are local; original source compositions are retained for reversal.

## September 29 — reading-tool animations and periodic-table placement

The local Visionlearning branch now uses `visionlearning-module-enhancements.png` and `.webp`: a transparent 4000 × 1227 pair retaining the native chrome, proportions, and 112 px gap from Figma frames `1359:3148` and `1359:3151` (1088 × 702 each). Live Chrome captures show Contents → tool opened → highlighting on → definition/annotation selected → off. Both sides use the same 16-second sequence (2.5, 2.5, 3, 5, 3 seconds) and the existing shared AnimatedImage play/pause control. The current live glossary example is bacteria; the NGSS example is Science and Engineering Practices, SEP.4.

The previous periodic-table demonstration was extracted at its original resolution into `visionlearning-periodic-table-demo.png` and `.webp` (888 × 574, 14 frames). It renders in a narrow figure after the periodic-table lesson graphics and immediately before Looking back. The original combined assets remain available. Added the requested divider above Building tools around the reading and shortened that section. Looking back wording remains unchanged.

Verified desktop/mobile fit and the combined control; reduced-motion fallback remains in the existing AnimatedImage component. These are captures of live UI states assembled into animations, using native exported Figma chrome. This branch remains unpublished; no full Confluence draft replacement.


### Separate controls and grid refinement

Carl preferred two independent graphics in the existing FigureSideBySide grid with the standard gap and stacking below the medium breakpoint. Each now has a caption describing the toggle and detail panel. The original browser framing remains. Both poster images and animation first frames show highlighting on with the definition or annotation open. Playback runs for 16 seconds. Glossary autoplay respects prefers-reduced-motion; NGSS starts paused (`autoplay={false}`). Both have their own play/pause control. The periodic-table figure now uses medium width. This supersedes the combined playback choice above; the combined files remain available.

The live periodic-table link was removed at Carl’s request because the external tool has unresolved accessibility issues. Keep the portfolio demonstration; do not imply those issues have been fixed.
