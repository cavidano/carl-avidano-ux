# Navigation article: editorial and figure notes

The article source is [natura11y-update-new-menu-components-for-deeper-navigation.mdx](../src/content/drawing-board/natura11y-update-new-menu-components-for-deeper-navigation.mdx). Keep the copy there as the single source for review.

The audience is prospective clients, hiring managers, and design colleagues. The post explains the interaction decisions behind Flyout and Nested nav. It follows the existing short Drawing Board format without a TLDR.

The body has a short introduction followed by two sections: “Flyout menu” and “Nested navigation.” Each section has a brief opening explanation, its own figure, and a short explanation of the interaction and accessibility decisions.

The matching [Confluence article](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23298049) was added under The Drawing Board on September 21, 2026. Its title is “Natura11y update: New menu components for deeper navigation,” as requested by the user. It retains the March 9 editorial date, exact body copy, both original PNG figures, image descriptions, captions, and useful links. The saved text and links were compared with the local article, and both figures retain their 1536 × 992 dimensions. The phone animation remains a website thumbnail, separate from the two article figures. Creating this Confluence working copy does not deploy the website article.

The renamed local route is `/drawing-board/natura11y-update-new-menu-components-for-deeper-navigation`. The previous `/drawing-board/making-room-for-deeper-navigation-in-natura11y` route redirects to it and is excluded from the sitemap. All page titles, canonical links, cards, and article metadata derive from the new frontmatter title. The current Confluence introduction, including its USWDS reference, was brought into the local article during this rename; the rest of the body is unchanged.

## Dates and status

The [Rovo summary and editorial notes](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23461895) are saved as a child of the Confluence article. They preserve the supplied transcript, an edited summary, and proposed wording that makes the two navigation purposes clearer. These are review notes; the article copy has not been replaced with the proposal.

- `status: published` includes the reviewed article and figures in local previews and production builds. The user approved publishing the reviewed Drawing Board changes on September 21, 2026. The separate Rovo wording proposals remain review notes.
- `date: '2026-03-09'` is the user-requested March editorial date, using the date of the Nested nav refinements in commit `5cccafdc`. The Flyout work began in February; Nested nav followed in March. The article sorts between the July Astro article and the February captioning article.
- There is no separate `workDate`; the article header and listing display the same March date without an archive label.
- The opening describes the component work without attributing it to a particular client or claiming user research. The original project trigger has not yet been confirmed.

## Figma figures

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

## Evidence

All historical source checks used the canonical monorepo at `/Users/carlavidano/Sites/natura11y`, including its preserved history before the monorepo move.

| Claim | Source |
| --- | --- |
| Flyout began on February 19, 2026, initially named mobile menu. | Commits `f065b557` and [`19654417`](https://github.com/Natura11y/root/commit/19654417). The latter renames the files to flyout-menu. |
| Flyout supports moving between panels, a Back control, Escape, and excluding inactive panels from keyboard navigation. | `src/js/flyout-menu.js` at `19654417`. Shared `src/js/utilities/overlay.js` contains the focus trap and return-to-trigger behavior. |
| Flyout transitions respect reduced motion. | `src/scss/_flyout-menu.scss` at `19654417` gates transitions and animations with `prefers-reduced-motion: no-preference`. |
| Nested navigation was added March 7, 2026. | [`4f0bb95f`](https://github.com/Natura11y/root/commit/4f0bb95f) adds `src/scss/_nav-nested.scss`; `84e7f9e7` finalizes the nested-nav naming that day. |
| Nested navigation uses indentation, a section indicator, and bold/underlined current links. | `src/scss/_nav-nested.scss` at `4f0bb95f`, plus the canonical Nested nav documentation and example markup. |

Current public references: [Flyout](https://gonatura11y.com/docs/flyout/) and [Nested nav](https://gonatura11y.com/docs/nested-nav/). The article does not claim completed usability testing, measured improvements, or that the later Storybook/monorepo setup existed in March.
