# Case-study graphics

## October 5 — Natura11y project montage

Carl requested naming and exporting [Portfolio frame `1531:2287`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1531-2287) to replace the old six-browser “in the wild” graphic. The frame and website asset are now named `natura11y-project-examples`. Preserve his current 2000 × 919.449 px composition: Visionlearning glossary highlighting, ESR's captioned video player, and the CCF Global page. The CCF browser uses the existing CCF favicon, `cheetah.org`, and the Cheetah Conservation Fund tab title.

The transparent native 2× PNG is `src/images/natura11y/natura11y-project-examples.png` (4000 × 1839, 2,950,856 bytes). Exported a temporary copy outside the gray section, then removed it; the named original remains directly in the Natura11y section. Verified alpha 0 in exterior gaps. Astro's selected quality-90 WebP is 446,786 bytes with transparency intact. The existing wide figure remains immediately above Looking ahead; updated its alt text to describe the three actual screenshots. The old source image remains available but is no longer imported.

Local desktop and mobile checks confirmed the selected full-resolution asset, direct FIGURE parent, no overflow or browser errors, and the intended placement. Astro check reports zero errors, warnings, or hints. Evidence: `output/natura11y-project-examples-2026-10-05/`. Local only; no publication or Confluence change. Narrative and caption-free Hemingway text are unchanged.

## October 5 — Figma icon workflow

Added two existing documentation screenshots below the Natura11y icon-library figure. Sources are `apps/docs/src/components/examples/figma/images/adding-icons-02.jpg` and `adding-icons-04.jpg` in the canonical `/Users/carlavidano/Sites/natura11y` monorepo. Copies are `src/images/natura11y/natura11y-figma-icon-component.jpg` and `natura11y-figma-icon-svg-export.jpg`. Both retain their original 1200 × 675 dimensions; Astro emits PNG to avoid another lossy pass. The first shows original artwork and the export frame within a component; the second shows the SVG Export plugin. They use native figures and shared captions inside FigureSideBySide, stacking on mobile. Background browser verification confirmed both selected images at 1200 × 675, rendered 572 CSS pixels wide at 2× DPR, with direct FIGURE parents. Proof: `output/typography-image-review/local-icon-workflow.png`. Local review only.

## October 5 — Typography composition screenshot correction

**Local website replacement:** Carl then approved exporting the composition to replace the scale-visualizer screenshot. `src/images/natura11y/natura11y-typography.png` is the original composition's native 2× PNG export (3625 × 1891, 1,785,557 bytes, including natural shadow bounds), not an inspection screenshot. A temporary copy outside the gray section avoided the inherited section background and was removed after export. Exterior alpha is verified as zero. The local case study uses the new image at the existing medium width with PNG output, a matching caption, and descriptive alt text; the typography prose and visualizer link are unchanged. Browser verification confirms 1152 CSS pixels wide, 3625 × 1891 selected PNG at devicePixelRatio 2, and direct FIGURE parent. Local only; Confluence and publication remain pending the broader copy review.

**Width follow-up:** Carl requested a wider figure so the details can be read inline without a lightbox. The Typography figure now uses FigureSingle's standard wide width (the medium override was removed). It remains a plain image, with no lightbox.

Carl's new typography composition is Portfolio frame `1519:2122`, `natura11y-typography`. He requested correcting only the numbers in its raster Figma variables panel and removing the captured mouse pointer. The displayed font sizes now match the adjoining Core specimen: Banner 69, H1 57, H2 48, H3 40, H4 33, H5 28, H6 23, LG 28, RG 23, MD 19, SM 16. Built-in image editing produced the corrected raster, uploaded into existing image node `1518:2111`. A clipping frame `1523:1899` preserves the original visible crop, dimensions, rotation, and shadow; the other two composition images are unchanged. Final Figma inspection confirms all values and removal of the pointer.

This is a presentation-image correction, not a change to the actual library variables. Carl clarified that the point is an adjustable type scale; Figma and a rendered application may intentionally use different configurations. Do not characterize differing configurations as a framework defect or change either library to force identical screenshots. Core and the working Figma typography variables remain untouched. The new composition has not replaced the website's current Typography image or been published. Original and corrected source images are saved under `output/typography-image-review/`; the original Figma image hash is `4de9ed0daac4c8109c3f0ced45f0bf0a0b7b7a7a`, corrected hash `0b8bf263b634266cc6464bd6a57d8e0d361b5e98`.

## October 5 — LADRC homepage before Looking back

Carl approved adding the finished homepage as a closing visual above Looking back. Added a medium FigureSingle outside the preceding ThemeWrapper, with a short descriptive caption and alt text, using `src/images/ladrc/ladrc-homepage-laptop.png`. Source is Portfolio frame `1511:1867`, `ladrc-homepage`, in the LADRC section. Corrected that figure's copied Optimal Workshop browser title and placeholder URL to “Legal Aid Disaster Resource Center” and `ladrc.org`.

The first `download_assets` export included the enclosing section's gray fill despite the frame having empty fills. Corrected by cloning the unchanged frame outside the section, exporting the isolated copy at 2×, then deleting the temporary clone. Final original-frame PNG is 2752 × 1616, 1,590,180 bytes, with alpha 0 verified at multiple exterior points. Do not infer transparency from `hasAlpha` alone. The final descriptive filename also bypasses the development browser's cached opaque image. Browser verification confirms the final source renders at 1152 CSS pixels on a 2× display, directly inside the figure, with transparent exterior edges. Astro check passed with zero errors, warnings, or hints. Proof: `output/ladrc-homepage-2026-10-05/local-figure.png`. Local only; Confluence synchronization and publication are pending the next explicit request. The body narrative and Hemingway prose are unchanged.

## October 5 — LADRC browser-gap correction

Original screenshot located: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Reingold/_Executive-Summary/LADRC/tree/ladrc-tree-testing-task.png` (2320 × 1308). Its SHA-1, `275674e152cfde803062696659686a2fd18f4641`, exactly matches the image hash embedded in Figma's Display layer `I180:688;37:68`. It shows Optimal Workshop tree-testing task 1 of 12, asking where to find FEMA services for people with disabilities. The surrounding laptop and browser chrome are separate Figma layers. The browser's `ladrc.ow.com/q1w2e3r4t5y` text is mockup text, not a verified original study URL. A related Photoshop file remains at `Reingold/_Executive-Summary/LADRC/_Artwork/Tree-testing.psd`; it was located but not opened for this source lookup.

Carl fixed the one-pixel browser gap in [Figma frame `180:687`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=180-687), `ladrc-tree-testing`. Re-exported that original 1376 × 808 frame through `exportAsync` at 2×, preserving transparency and frame bounds, and replaced `src/images/ladrc/ladrc-tree-testing.png` under its existing filename. The new PNG is 2752 × 1616 and 164,555 bytes. No canvas changes, MDX changes, or copy edits. The local LADRC page loads the new 2752 × 1616 optimized image at 1152 CSS pixels wide on a 2× display; proportions, direct figure markup, and appearance were verified in a background browser. Local only; not published.

## October 5 — Figure spacing belongs to the components

Carl's final approved structure groups three components in `src/components/Figure/`: `index.astro` is the single figure, `FigureSideBySide.astro` provides the responsive grid, and `FigureCaption.astro` owns shared caption markup and styling. Side-by-side groups contain native `<figure>` elements with `<FigureCaption caption="…" />`, not nested FigureSingle components. Keep this folder, but do not add a stylesheet for spacing. Both outer wrappers use the existing `margin-y-5` utility; native figures inside the grid retain their default zero margins. Every group stacks into one column on mobile and uses two columns from the medium breakpoint with `gap-3`. There are no figure margin or `stackOnMobile` props. The ecosystem logos follow natural standalone spacing with no special exception.

Converted all 20 grouped figures across four case studies and the CCF logo draft, retaining their images and captions. The MDX image-wrapper transform now recognizes native figures as well as FigureSingle. Content, captions, alt text, image proportions, widths, and publication status are unchanged. The final review build passed all 27 tests, zero Astro diagnostics, and the 117-page audit; all 395 captions across 75 rendered pages match the previous build. Background browser checks confirmed 64px outer margins, zero native-figure margins, the existing 24px grid gap, and mobile stacking without overflow. The generated-site audit confirms direct figure/image markup. This change is local and unpublished.

## October 4 — Natura11y figure quality follow-up

Published as **cd1b553**, [Cloudways run 37235714781](https://github.com/cavidano/carl-avidano-ux/actions/runs/37235714781), with main/refinements merged and pushed. Confluence **23855116 v42**, saved editor **d1:2012**, and all Hemingway exports match. Readback preserved every narrative paragraph and all 28 figures. Live checks verified all eight closing headings, BNY's shared Natura11y figures, and both image files byte-for-byte against the production build. Evidence: `output/bny-release-2026-10-04/final-image-live-verification.json`.

- Color uses the clean original Figma node `1495:2334`, exported at 3840 × 2160. Carl chose to retain the medium inline preview and widen only this lightbox to a maximum of 1800 px, constrained to the viewport. Local browser checks confirmed 1800 px at a 2200 px viewport and 1248 px at a 1280 px viewport. `LightboxImage` now reserves the full thumbnail width before lazy loading.
- Form validation uses the saved native Chrome PNG (`output/gonatura11y.com_docs_form_.png`, 1408 × 3106) as its source in Figma frame `1463:1027`. The frame retains its 704 × 528 crop; two background-colored rectangles hide LastPass badges inside Name and Email. Native 2× export is `src/images/natura11y/natura11y-form-validation.png` (1408 × 1056). Render as PNG to avoid introducing lossy artifacts. The saved capture has no focus outline; caption and alt describe validation feedback without claiming an outline. Do not add a simulated focus state to a screenshot.
- Natura11y was the only case study still headed “Reflection.” Changed it to the approved “Looking back”; the other seven already match. Regenerated all Hemingway exports.
- Carl explicitly objected to repeated native-browser capture attempts and foreground interruptions. Do not resume Chrome/Finder control for this task. Prefer background connectors and saved files; never ask him to pause repeatedly for routine image cleanup.

Working review list · Updated October 4, 2026

## October 4 — Portfolio Figma case-study organization

**Latest refinement:** Carl requested the actual figures loose in each case-study section. Removed the 16 nested usage/draft sections and their row/stack frames. All **96 current and retained-source compositions** now sit directly in their eight project sections. Plain text labels retain the distinction between current artwork at the top and drafts/sources at the bottom. All figure dimensions and absolute positions were verified unchanged (zero drift); section dimensions and ordering are preserved. The internal structure of each figure remains intact. This supersedes the nested-section arrangement described below. Verification: `output/figma-organization-2026-10-04/loose-figures.json`.

**Color-figure correction:** Carl replaced the imported image with [clean figure `1495:2334`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1495-2334); the previous `1499:2907` was removed by the time the sections were ungrouped. The old website PNG had a pale green rounded edge baked into it. The replacement is a 1920 × 1080 image-filled rectangle with a 3840 × 2160 original source. Exported that exact node at 2× to replace `src/images/natura11y/natura11y-figma-color-system.png`, preserving the clean white composition and the existing medium-size figure, lightbox, caption, and alt text. It is a full-resolution export, not a Figma inspection screenshot.

Carl requested a cleanup of the existing Portfolio file, including the marquees and interwoven presentation compositions. The [Case Studies page](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1335-1973) now contains all **54 current standalone static figures and marquees** in eight correctly named project sections. Following Carl's refinement, every section is **9600 × 19200 px**, arranged in one horizontal row with 800 px gaps in the website's sort order: Phoenix.gov, Visionlearning, Natura11y, Cheetah.org, NYC OTI, LADRC, Mr. Ellie Pooh, UNICEF. Each project has **01 — In use on the website** at the top, in narrative order, and **02 — Drafts, sources and unused artwork** aligned 160 px above the section's bottom. Retained source material includes duplicate marquees. Leave the intentional empty space; do not shrink sections to content. The second section formerly labeled UNICEF is now Natura11y. Cheetah.org, NYC OTI, and LADRC sections were created.

Existing artwork was moved from Marquee, Interwoven Presentations, Brand, Device Figures, Mobile Showcase, Project Tour, and the UNICEF source catalog. The shared monorepo/Figma guidance frame now lives in Natura11y; it is also used by a Drawing Board article. Original editable compositions and IDs were retained. The three 1800 px montage frames and their internal gutters were not redesigned. Current individual CaseStudyScreens galleries and animation files were excluded. Other source catalogs, gallery source images, and unrelated design-system components remain on their existing pages.

Six website source assets were added where a matching current standalone figure was missing from the working sections: LADRC resource cards; Natura11y architecture, color system, and light/dark Oceanic Pulse examples; UNICEF implementation review. These are image-filled frames containing the actual website files, with full aspect ratios and FIT fills, not newly editable vector reconstructions. Preserve that distinction. The imported originals are not Figma preview screenshots.

At Carl's request, ESR, DevSmart Group, and Reingold artwork now lives on the new [Archive page](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1502-2143), not Case Studies. Existing sections retain IDs `1500:2033` (ESR), `1500:2035` (DevSmart Group), and `1500:2037` (Reingold). They contain eight compositions: four ESR marquees/device/mobile compositions, two DevSmart marquees, and two Reingold marquees, including the one previously on Scratchpad. Drawing Board articles and their current artwork remain active. The now-empty Marquee page was removed. No artwork was deleted. Existing generic source image names were retained where identity was uncertain; current figure names were made descriptive where needed.

Validation: all 54 planned figures have the expected project ancestor, no loose nodes remain on Case Studies, no project sections overlap, original composition sizes were preserved, and final Natura11y, Mr. Ellie Pooh, and Cheetah boards were visually checked. The uniform-layout follow-up verified eight identical section sizes, website ordering, a common top alignment, the bottom-aligned draft areas, and all 54 current figures retained. Visionlearning's complete section was visually checked. Record and source manifest: `output/figma-organization-2026-10-04/`. This was a Figma organization task; no website asset replacement, copy synchronization, build, commit, or deployment occurred.

| Project | Section ID | Current figures |
| --- | --- | ---: |
| Phoenix.gov | 1335:2619 | 5 |
| Visionlearning | 1335:2622 | 8 |
| Natura11y | 1450:1092 | 16 |
| Cheetah.org | 1498:1189 | 6 |
| NYC OTI | 1498:1190 | 1 |
| LADRC | 1498:1191 | 4 |
| Mr. Ellie Pooh | 1479:1189 | 5 |
| UNICEF | 1380:1054 | 9 |

### Current standalone figure map

| Project | Figma artwork name | Node ID |
| --- | --- | --- |
| phoenix | `marquee-phoenix` | `1335:2001` |
| phoenix | `phoenix-research-overview` | `1309:1332` |
| phoenix | `phoenix-department-user-stories` | `1328:1333` |
| phoenix | `phx-sitemap` | `409:1363` |
| phoenix | `PHX-tree-testing-ppt` | `360:162` |
| visionlearning | `marquee-visionlearning` | `1335:1974` |
| visionlearning | `visionlearning-logo-old` | `1359:3446` |
| visionlearning | `visionlearning-logo-new` | `1359:3495` |
| visionlearning | `visionlearning-brand-guidelines` | `1360:3560` |
| visionlearning | `visionlearning-content-map` | `1301:435` |
| visionlearning | `visionlearning-mobile-spanish` | `1335:2897` |
| visionlearning | `visionlearning-scientific-illustrations` | `1485:1189` |
| visionlearning | `visionlearning-periodic-table-lesson-adaptations` | `1335:3121` |
| natura11y | `marquee-natura11y` | `1335:1977` |
| natura11y | `natura11y-design-ecosystem-logos` | `1450:1056` |
| natura11y | `design-system-architecture` | `1499:2909` |
| natura11y | `natura11y-code-ide-example` | `213:196` |
| natura11y | `storybook-flyout` | `1185:295` |
| natura11y | `storybook-form` | `1186:380` |
| natura11y | `natura11y-figma-color-system` | `1495:2334` |
| natura11y | `natura11y-oceanic-pulse-light` | `1499:2905` |
| natura11y | `natura11y-oceanic-pulse-dark` | `1499:2908` |
| natura11y | `natura11y-type-scale-visualizer` | `1457:999` |
| natura11y | `project-tour-icons` | `163:606` |
| natura11y | `natura11y-form-validation` | `1463:1027` |
| natura11y | `Natura11y Figma Lo-fi Kit` | `1160:521` |
| natura11y | `Natura11y Figma Hi-fi Kit` | `1161:734` |
| natura11y | `monorepo-figma-context` | `1239:25` |
| natura11y | `natura11y-in-the-wild` | `1468:1027` |
| cheetah-conservation-fund | `marquee-cheetah-conservation-fund` | `1335:2004` |
| cheetah-conservation-fund | `ccf-logo-legacy` | `261:33` |
| cheetah-conservation-fund | `ccf-logo-redesign` | `261:34` |
| cheetah-conservation-fund | `grid-mobile-cheetah-conservation-fund` | `257:735` |
| cheetah-conservation-fund | `logo-ccf-kids` | `258:232` |
| cheetah-conservation-fund | `cheetah-tracks-font-example` | `260:17` |
| nyc-oti | `marquee-nyc-oti` | `1335:1987` |
| ladrc | `marquee-ladrc` | `1335:1985` |
| ladrc | `ladrc-tree-testing` | `180:687` |
| ladrc | `LADRC-recommendations-ppt` | `178:6` |
| ladrc | `ladrc-wireframe-resource-cards` | `1499:2906` |
| mr-ellie-pooh | `marquee-mr-ellie-pooh` | `1335:2007` |
| mr-ellie-pooh | `mr-ellie-pooh-mobile` | `244:781` |
| mr-ellie-pooh | `mep-sri-lanka-photoshoot` | `1159:320` |
| mr-ellie-pooh | `project-tour-mr-ellie-papermaker-carousel` | `248:785` |
| mr-ellie-pooh | `mr-ellie-pooh-product-photography` | `1487:1189` |
| unicef | `marquee-unicef` | `1335:1991` |
| unicef | `unicef-toolkit-wireframes` | `1417:1026` |
| unicef | `dublin-workshop` | `1380:1516` |
| unicef | `unicef-wireframe-flows` | `1415:1017` |
| unicef | `unicef-review-flow-13` | `1397:148` |
| unicef | `unicef-review-flow-18` | `1397:149` |
| unicef | `unicef-review-flow-21` | `1397:150` |
| unicef | `unicef-review-flow-22` | `1397:151` |
| unicef | `unicef-implementation-review` | `1499:2904` |

## October 4 — transparent mosaic export review

**All three installed locally:** Carl approved the scientific-illustration preview and asked to replace the remaining mosaics and close Photoshop. Visionlearning's periodic-table figure now uses `visionlearning-periodic-table-lesson-adaptations.webp` (2000 × 1845, 292,054 bytes); Mr. Ellie Pooh's product-photo figure uses `mr-ellie-pooh-product-photography.webp` (2000 × 2331, 908,116 bytes). Both come from the verified transparent 2000 px exports, retain the existing figure markup, captions, and alt text, and render directly in `<figure>`. Browser checks confirmed the selected WebP URLs and full intrinsic dimensions. The periodic-table montage was visually checked at a 310 px rendered width; photography at 1120 px, with the dark green section showing through its gutters. Screenshots are `periodic-table-local-preview.png` and `product-photography-local-preview.png` in the export review folder. Photoshop was quit and its running state verified false. Original website JPEG/PNG files and PSD archives remain intact. These are local changes only; no publication, copy synchronization, or branch change was requested.

**Local scientific-illustration trial:** Carl requested starting with this montage on the local website. `visionlearning.mdx` now references `src/images/visionlearning/visionlearning-scientific-illustrations.webp`, copied from the verified 2000 × 3007 transparent WebP (805,956 bytes). The original JPEG remains available during review. Browser verification confirmed the selected WebP is loaded at 2000 × 3007, renders at 1120 × 1683.91 in the current viewport, sits directly inside `<figure>`, and shows the section background through its gutters. The current Markdown image has no responsive `srcset`. Local preview: `output/figma-grid-export-review-2026-10-04/scientific-illustrations-local-preview.png`. Copy, captions, other figures, Confluence, and Hemingway are unchanged; no commit or publication.

**Ongoing asset routine:** Carl wants to remove Photoshop from montage maintenance. Figma owns the separate images and their composition; export the original frame as a PNG master, then generate an optimized WebP for the site. Screenshots can use the site's existing figure/grid system. Keep PSDs as archival sources rather than a required export step.

Carl confirmed **1800 px wide with 8 px gutters for all three compositions**: scientific illustrations (`1485:1189`), product photography (`1487:1189`), and periodic-table lesson adaptations (`1335:3121`). The earlier 1808 px request is superseded; the periodic-table frame is now 1800 × 1660.30 px. The current photography frame includes Carl’s intervening adjustments and is 1800 × 2097.87 px; the scientific frame remains 1800 × 2706.29 px.

Native Figma 2× PNG exports, verified RGBA with transparent pixels and a 3600 px width, are saved in `output/figma-grid-export-review-2026-10-04/`. The scientific and photography exports used temporary transparent copies, removed after export; the scientific copy also clipped to the exact frame bounds to avoid extra empty export space. The original Figma frames and their image content remain intact. The connector download renders failed size/alpha verification and were overwritten by the native exports. Do not use connector previews as production graphics.

Carl asked about a 2000 px total export width. Created 2000 px PNG and quality-90 WebP comparison copies from the native masters, preserving transparency. Measured decimal file sizes: product photography 11.75 MB PNG / 908 KB WebP; scientific illustrations 6.82 MB / 806 KB; periodic-table lessons 1.00 MB / 292 KB. The 3600 px PNG masters are 23.20 MB, 17.20 MB, and 1.53 MB respectively. Verified representative details at 100% in `quality-comparison-2000w.png`; full measurements are in `export-review.json`. These are review outputs only; website images have not been replaced or published.

**Scope correction:** Carl means illustration/product-photo mosaics like these three, not browser galleries, phone mockups, research slides, or overlapping document/photo collages. An audit of the eight case-study MDX sources and current visuals found no additional matching mosaic. Do not broaden this request into reworking unrelated compositions.

## October 4 — periodic-table composition spacing

Carl requested [the existing periodic-table lesson adaptations frame `1335:3121`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1335-3121) at **1808 px wide with 8 px gutters**. Updated that frame in place, preserving all seven images, their proportions, the existing arrangement, transparent gutters, and white mounts around the electron-structure examples. Top images are 900 px wide; all horizontal and vertical gaps, including the stacked electron examples, are 8 px. The complete frame is 1808 × 1667.65 px. Added auto-layout rows so spacing remains consistent. Verified the final Figma render in `output/visionlearning-illustrations-2026-10-04/periodic-table-1808-8px.png`. Website assets and publication are unchanged.

## October 4 — individual Mr. Ellie Pooh photography exports

**Current composition:** Carl requested the original arrangement at 1800 px wide with 8 px gutters, matching the Visionlearning treatment. [Frame `1487:1189`, `mr-ellie-pooh-product-photography`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1487-1189) is 1800 × 2095.20 px: full-width holiday collection, two 896 px collection photos, then four 444 px square product photos. All gaps are 8 px, with the established green (`#004739`) background. Reused Carl’s three separately positioned collection photos and copied the four square images from the individual export board, which remains intact. Each photo is separately editable with its natural proportions and a 2× PNG export setting; the complete composition also has a 2× preset. Visually verified in `output/mep-photography-2026-10-04/composition-1800-8px.png`. No website replacement or deployment was requested.

Carl requested the same individual 2× Photoshop export and Figma import workflow for the open Mr. Ellie Pooh product-photography artboard. Seven photos were exported from `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Mr. Ellie Pooh/masonry.psd`, artboard `mr-ellie-pooh-product-photography`, using a temporary 200% duplicate. The original PSD remains open and unchanged; the temporary copy was closed without saving.

- Originals and source-layer manifest: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Mr. Ellie Pooh/_for-figma/mr-ellie-pooh-product-photography-2x/`.
- Names follow `mr-ellie-pooh-photography-<subject>.png`: `holiday-collection` (8000 × 4608), `notebooks-and-journals` and `note-boxes-and-pads` (3920 × 2618 each), plus `elephant-notebook`, `soap`, `paper-pulp-elephant`, and `plush-elephant` (1880 × 1880 each).
- [Figma: Mr. Ellie Pooh — Individual product photography](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1479-1190), in a new Mr. Ellie Pooh section on the existing Case Studies page. Three collection photos are above the four square products. Each has a separate named frame and 2× PNG export setting; source crops and proportions are preserved.
- Figma automatically reduced the holiday photo to 4096 × 2359 on import; its 8000 × 4608 original remains in the archive. The other six retain their exported pixel dimensions. The original files and Figma layout were verified. Preview: `output/mep-photography-2026-10-04/figma-product-photography.png`.

This request did not change the website, Confluence, or Hemingway copy.

## October 4 — individual Visionlearning illustration exports

**Current composition:** At Carl’s request, arranged all nine images like the original composition in [frame `1485:1189`, `visionlearning-scientific-illustrations`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1485-1189). The frame is exactly 1800 px wide and 2706.29 px tall, with two 896 px columns and 8 px gutters throughout, including the paired experiments. Animal cell, Miller–Urey, and RNA/DNA form the left column; plant cell, cell evolution, the two experiments, protein structure, and the periodic table form the right. All images remain separate named nodes with natural proportions and 2× PNG export settings. An additional 45.70 px of white space around the periodic table aligns the column bottoms without cropping or stretching. The background matches the original blue (`#42a6d7`). Visually verified in `output/visionlearning-illustrations-2026-10-04/composition-1800-8px.png`. This supersedes the earlier review arrangement and restoration dimensions below; the website is unchanged.

**Later Figma restoration:** Carl ungrouped the illustration board and rearranged the individual images, then accidentally deleted the large Miller–Urey illustration. Restored it from the saved PNG as node `1481:1189` in Visionlearning section `1335:2622`, at 1100 × 1533.27 with 2× PNG export settings. The other images were not moved. [Restored illustration](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1481-1189). The earlier board link below is historical; its wrapper frames no longer exist.

Carl requested nine separate 2× PNG exports from the open Photoshop source and an import into the existing Portfolio Figma file. This is asset preparation only; the website's illustration composition is unchanged.

- Source: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Visionlearning/masonry.psd`, artboard `visionlearning-scientific-illustrations`.
- PNG originals and `manifest.json`: `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Visionlearning/_for-figma/visionlearning-scientific-illustrations-2x/`.
- [Figma board: Visionlearning — Individual scientific illustrations](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1474-1189), within Case Studies → Visionlearning. The existing composite is preserved.
- Nine independent image frames use the filename convention `visionlearning-illustration-<subject>`, natural proportions, and 2× PNG export settings. The three-row arrangement is for reviewing and selecting individual assets.

| Subject / filename suffix | PNG pixels |
| --- | --- |
| animal-cell | 3920 × 2618 |
| plant-cell | 3920 × 2618 |
| miller-urey-experiment | 3920 × 5464 |
| cell-evolution | 3916 × 1418 |
| redi-experiment | 1878 × 986 |
| broth-experiment | 1880 × 986 |
| protein-structure | 3916 × 3916 |
| rna-dna | 3920 × 3688 |
| periodic-table | 3918 × 2522 |

Exports were made from a temporary duplicate resized to 200% in Photoshop, retaining the embedded smart objects. The source PSD was not saved or overwritten. All nine file dimensions and imported images were verified, and the Figma arrangement was visually checked. Figma automatically reduced the tallest Miller–Urey image to 2939 × 4096 on import; its full-resolution 3920 × 5464 PNG remains in the export folder. Figma still has enough pixels for its current 1100 px-wide frame at 2×. Review image: `output/visionlearning-illustrations-2026-10-04/figma-illustrations.png`.

## Final refinements — lightbox previews

**Released October 2:** Carl approved committing these refinements, merging into `main`, publishing, then returning to `codex/final-refinements`. Code commit `e39594a7447fc382885aa42d4582b108bb1cfa16` deployed successfully in [Cloudways run 37056250684](https://github.com/cavidano/carl-avidano-ux/actions/runs/37056250684). Review and production builds passed 27 tests, zero Astro errors/warnings, and the 117/54-page audits. All 41 live content pages match the downloaded production artifact; five scripts/stylesheets respond successfully, local code assets match the artifact byte-for-byte, and BNY's résumé matches its approved file. Live browser checks verified thumbnail focus, the 1200px image limit, scrolling, gallery animation, fading controls, dismissal during a slide, focus return, and BNY's shared viewer/backdrop behavior. Evidence is in ignored `output/final-refinements-release-2026-10-02/`. The local/unpublished statements below record implementation stages superseded by this release. Keep subsequent work on the existing `codex/final-refinements` branch.

On `codex/final-refinements`, Carl chose consistent circular controls for zoom, play, and pause, with a light background and dark icon. `MediaControl/index.astro` and its adjacent Sass now share Natura11y's icon-button geometry, theme, and `spacer-2` (16px) bottom/right inset. `AnimatedImage` uses it as a native button; `LightboxImage` uses its visual treatment inside the existing thumbnail button, preserving the entire image as a single accessible target. This applies to standalone and grid lightboxes. Non-lightbox images are unchanged. Carl rejected the gradient and repeated Enlarge text; do not reinstate them. The earlier 8px square-icon treatment is superseded. Build, shared-site checks, matching control dimensions, lightbox opening/focus return, and animation play/pause checks passed. Saved in checkpoint `dd51034` before the lightbox-sizing experiment; unpublished.

**Scrollable lightbox trial:** Carl requested a checkpoint before trying wider enlarged images. The subsequent uncommitted adjustment in `src/styles/theme.scss` caps image containers at 1200px or the available viewport width, removes the image-height cap, and preserves native proportions. Natura11y's existing overlay supplies vertical scrolling and fixed controls; extra top padding keeps the initial image clear of those controls. No new JavaScript or modal implementation is added. The full build passed; desktop inspection verified the 1200px limit, keyboard Page Down scrolling, focus containment, and Escape returning focus to the trigger. This is a local trial for review, not a publication approval.

**Backdrop dismissal:** Carl liked the scrollable viewer and requested the same outside-click behavior as the modal, explicitly excluding clicks on the image and controls. Natura11y Core 5.2.6 exposes this for modals but does not bind backdrop dismissal for lightboxes. A small delegated handler in `LightboxImage.astro` responds only when the clicked element itself is `.lightbox.shown` and invokes Core's existing close button, preserving its cleanup, scroll restoration, and focus return. It does not replace the viewer or duplicate its close implementation. Image, caption, and control clicks are excluded. Verified backdrop dismissal and focus return, image-click retention, and navigation without dismissal. Local and unpublished.

**Slide restored:** Carl requested the gallery slide back while keeping the control fade. Core's existing next/previous keyframes now animate the image container's contents (media and caption), while the outer container retains its independent opening/closing transition. This supersedes the earlier workaround that disabled sliding altogether. It prevents gallery animation from suppressing the opacity transition event Core uses to remove a closed viewer. The existing animation-end handler still clears the direction attribute through the bubbled event; no new JavaScript lifecycle is added. Verified slide completion and dismissal during a slide through Close, Escape, and backdrop clicks, with focus return, scroll unlock, and reopening. Reduced motion disables the content animation.

**Control fade:** Carl noticed that the viewer buttons disappeared abruptly on close. Core fades the image and backdrop but supplies no matching opacity transition for `.lightbox__controls`. The portfolio theme now fades those controls using the same half-duration token as the backdrop and closing image, with transitions disabled for reduced motion. Browser inspection confirmed matching 175ms exit transitions, removal, focus return, and reopening; the production build and 54-page audit passed. This remains local and uncommitted.

**Thumbnail focus:** Carl requested a visible focus ring and suggested `theme-dark` on every shared lightbox thumbnail. `LightboxImage` now applies that theme, giving thumbnails a consistent text/link/focus palette. The theme override places the focus ring outside the screenshot, with a focus-only shadow using the theme background token as a dark separation. Previously the inset white outline could disappear over white screenshot content even though white was the correct text color for the surrounding teal section. Keyboard inspection confirmed the blue 2px ring, 2px outside offset, and dark separation. The full build passed 27 tests, zero Astro errors/warnings, and the 54-page audit. Local and unpublished.

**Framework discussion:** Carl raised optional component modules in Natura11y so projects can include or replace individual behaviors. Core already separates its source files and exposes individual Sass paths, but its public JavaScript entry initializes all components; individual component JavaScript exports are not currently exposed. This is a possible future framework improvement, not authorization to fork the lightbox or change Natura11y now.

At Carl's request, a detailed implementation handoff is now saved in the canonical [Natura11y TODO](/Users/carlavidano/Sites/natura11y/TODO.md#optional-core-component-imports-and-lightbox-follow-up), linked from its root README. It covers selective imports, initialization and compatibility, the lightbox findings, prototype locations, and acceptance checks. These are planning notes; framework code and package versions were not changed.

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

**October 3 — final Confluence synchronization:** Main page 23855116 v40 now includes every current figure, including the ecosystem logos, restored Codebase image, dark type-scale browser, light form close-up, and six-browser In the wild composition. Native files retain their matching asset names and original proportions. The entire text, image order, captions, descriptions, dimensions, and links were read back and verified. This supersedes the website-only status in the dated notes below. Website publication remains pending. See `context/case-studies.md` for the remaining native-draft removal limitation.

**October 3 — In the wild finalized:** Carl wants this section to show Natura11y’s use over several years across projects of different sizes. Keep Visionlearning, the recent Endangered Species Revenge work, and CCF’s current design-system work explicit, alongside The Narrative Authority, Avidano Digital, and this portfolio. No outgoing project links. Carl will write a separate Drawing Board article about progress on CCF’s design system; do not turn this closing section into that article or focus Reflection on the portfolio lightbox.

Replaced only the old In the wild composition with six equal browser windows in two rows. [Portfolio Figma frame `1468:1027`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1468-1027), named `natura11y-in-the-wild`, is in the existing Natura11y artwork area. It reuses `2024 - Browser`, with actual favicons, light chrome for the five light sites and dark chrome for this portfolio. Canvas 1864 × 774.5; native 2× transparent PNG 3728 × 1549. Repository and `Final Used Images/natura11y-in-the-wild.png` archive copies are byte-identical. The wide figure has no lightbox. Previous asset remains available.

Capture sources: CCF’s existing `ccf-global-web/storybook-static` homepage template (served temporarily at localhost:6017, with its unmodified placeholder content, clearly marked **design preview** in the browser chrome); Visionlearning’s original `Design Portfolio/Visionlearning/_original/desktop-homepage-3up.jpg` (the live homepage was obscured by advertising); and fresh 1280 × 720 browser captures of `https://esrevenge.org/`, `https://thenarrativeauthority.com/`, `https://avidanodigital.com/`, and the local portfolio homepage. The portfolio mockup displays its public domain. Source captures are embedded in the editable Figma composition. CCF’s canonical repository was checked: its independent packages began from Natura11y source; this is not a runtime Natura11y dependency. The short paragraph says it is the starting point for CCF’s new system. Reflection and all other figures remain unchanged. Local only; Confluence’s baseline and original editorial draft remain untouched.

Verification: review build passed all 27 tests, Astro checks, and the 117-page generated-site audit. At a 1280px viewport, the image renders at 1168 × 485 with no horizontal overflow, directly inside the figure, and the browser selects the complete 3728 × 1549 source with quality 90. The figure has no lightbox or outgoing link. Native export transparency and archive SHA-256 match verified. Page proof: `/tmp/natura11y-in-the-wild/section-final.jpg`.

**October 3 — Placeholder columns and customization section removed:** At Carl’s request, removed the entire two-column **Out of the box / Built-in components** block now that the detailed sections cover its main points. Also removed **A foundation for custom design systems** and its two paragraphs. No figures were removed. This supersedes the earlier instructions below to retain the feature lists. The current order now runs from Type scale directly to Icon library, and from Figma UI kits directly to Public documentation. Closing-section recommendations remain a discussion; the current In the wild and Reflection copy is unchanged. Local only.

**October 3 — Form-validation close-up:** Added **Forms with clear focus and feedback** immediately after Icon library and before Figma UI kits. Carl chose a close crop showing validation rather than a whole form or a multi-state overview, then explicitly chose **light mode**. The live [Form documentation validation example](https://gonatura11y.com/docs/form/#form-validation) was submitted empty to show its real Name, Email, and Phone feedback; Name has focus. [Portfolio Figma frame `1463:1027`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1463-1027), named `natura11y-form-validation`, is in the same Natura11y artwork area as the type-scale image. The 704 × 528 original browser crop is retained in the frame; its native 2× PNG export is 1408 × 1056, with matching website and final-image archive copies. The narrow figure is a plain image with a caption, and the section links to the working documentation. The copy describes verified required indicators, labels/help text, inline warning feedback, and movement of focus to the first invalid field. Keep the placeholder feature lists and all prior figures. Review build, 27 tests, Astro checks, and the 117-page audit passed. Local only; no Confluence changes or website deployment.

**October 3 — Type-scale visualizer:** Added **A type scale with two variables** immediately after the color section, leaving both feature lists as placeholders in their existing order. The figure uses the live [Type Scale Visualizer](https://gonatura11y.com/type-scale/) in dark mode, inside the existing `2024 - Browser` component in Carl’s new Natura11y area on the Portfolio file’s Case Studies page. [Figma frame `1457:999`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1457-999) and the website asset share the name `natura11y-type-scale-visualizer`. Preserve Carl’s shallower crop: outer frame 1600 × 1392, with 72px browser chrome and a 1600 × 1320 cropped capture. The browser also uses Carl’s dark theme, the full URL `https://gonatura11y.com/type-scale/`, and the official green Natura11y favicon from the canonical docs’ `public/favicon-32x32.png`. The original native 2× PNG is 3200 × 2784; the underlying live-page capture is 1600 × 1392. Matching PNGs are in `src/images/natura11y/` and the Natura11y `Final Used Images` archive. Use `FigureSingle width='medium'` with the image directly inside it, **no lightbox**; the text links to the live tool. Keep the restored Codebase image. Local only; Confluence’s baseline and original draft are unchanged.

**October 3 — Codebase image restored:** At Carl’s explicit request, restored `natura11y-code-ide-example.png` and its original `FigureSingle` markup directly beneath Codebase. The original four-screen composition is 1880 × 635 and is byte-identical to the image before the October 2 cleanup (`34558dd^`). A matching copy is back in the Natura11y `Final Used Images` archive. Keep this figure for now; the earlier October 1 omission is superseded. No surrounding copy was revised. Review build and generated-page checks passed; local only, with no website deployment or Confluence changes.

**October 3 — Design Ecosystem logo strip:** Carl requested the original [Portfolio Figma frame `1450:1056`](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1450-1056) as a transparent PNG under the introduction’s **Design Ecosystem** paragraph. The native frame name and website filename match: `natura11y-design-ecosystem-logos.png`. Exported the original vector composition at 4×, 2388 × 288, preserving its transparent background and all seven logos. Byte-identical copies are in `src/images/natura11y/` and `/Volumes/CarlJohnnieHD/CarlHD/Design Portfolio/Case Studies/Natura11y/Final Used Images/`. The shared MDX uses `FigureSingle` directly inside the existing overview; no caption or lightbox was added. The image description names Figma, HTML5, Sass, webpack, JavaScript, React, and Storybook. Verified alpha transparency, native proportions, the browser-selected full-resolution asset, direct `<figure>` image structure, and no horizontal overflow at 358px and 1440px. The review build passed its tests, Astro check, and 117-page shared-content audit. Carl’s concurrent introduction and heading edits are preserved. Local only; Confluence’s preserved original draft and published baseline remain unchanged under the current website-first refinement direction.

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

**October 4 — reviewed Balsamiq wireframes:** Four native high-resolution PNG exports precede the hi-fi gallery. The Results divider is restored; “Exploring the layout,” its client-exploration paragraph, and the wireframe gallery sit outside green. “Website design and development,” its design-strategy paragraphs, and the hi-fi gallery sit inside green. Uses `CaseStudyScreens`, four columns, portrait `ratio="18 / 25"`, individual full-image lightboxes, and no visible labels. Latest exports preserve Carl’s final square-product layouts and native sticky notes. Source master: `output/mr-ellie-pooh-wireframes/Mr-Ellie-Pooh-Design-Explorations.bmpr`. Approved export folder: `output/mr-ellie-pooh-wireframes/exports/approved-20261004-093625/`. Source PNGs live in `src/images/mr-ellie-pooh/wireframes/`, with byte-identical archive copies under `Case Studies/Mr. Ellie Pooh/Final Used Images/`. See [native review and provenance](case-studies.md#october-4--mr-ellie-pooh-desktop-wireframe-review). Published in release `743d8c0` through Cloudways run `37207158987`. Main Confluence v25 includes all four complete image sources, captions, and image descriptions; current and saved editor copies were verified.

| Final filename | Dimensions |
| --- | --- |
| `mr-ellie-pooh-wireframe-homepage.png` | 2560 × 4310 |
| `mr-ellie-pooh-wireframe-product-category.png` | 2800 × 6432 |
| `mr-ellie-pooh-wireframe-product-detail.png` | 2800 × 4552 |
| `mr-ellie-pooh-wireframe-why-sri-lanka.png` | 2800 × 4432 |


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
