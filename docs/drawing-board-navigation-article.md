# Navigation article: editorial and figure notes

The article source is [making-room-for-deeper-navigation-in-natura11y.mdx](../src/content/drawing-board/making-room-for-deeper-navigation-in-natura11y.mdx). Keep the copy there as the single source for review.

The audience is prospective clients, hiring managers, and design colleagues. The post explains the interaction decisions behind Flyout and Nested nav, with Badge as a smaller related addition. It follows the existing short Drawing Board format without a TLDR.

## Dates and status

- `status: draft` keeps the article out of the website listing, sitemap, and generated article routes.
- `workDate: '2026-03-09'` identifies this as a March archive piece, using the date of the joint Badge and Nested nav refinements. The Flyout work began in February; Nested nav and Badge followed in March.
- `date: '2026-09-21'` is the provisional editorial publication date. Confirm it when publishing.
- The opening describes the component work without attributing it to a particular client or claiming user research. The original project trigger has not yet been confirmed.

## Figma figures

The existing `storybook-flyout.png` is a temporary feature image and first figure. It shows the current component example, not a screenshot from March. Replace it with the new Figma exports before publishing. No new generated artwork is needed for this draft.

| Export name | Content and placement | Suggested caption |
| --- | --- | --- |
| `drawing-board-natura11y-navigation.png` | Feature graphic, 1800 × 900. Show the flyout and nested navigation with a small badge detail. Keep the composition legible at the site's 2:1 crop. | Feature image only. |
| `natura11y-flyout-navigation.png` | First figure, immediately after the opening. Pair the root panel with a deeper panel, showing its title and Back control. This replaces the Storybook screenshot. | Moving into a section and back through the flyout menu. |
| `natura11y-nested-navigation.png` | After “Keeping the hierarchy visible.” Show the active parent section and current page together, including indentation, the section bar, and the current-page treatment. | The sidebar keeps the current page and its parent section visible together. |
| `natura11y-badge-in-context.png` | After “Small labels in context.” Show a topic label and a count within a navigation link. Use enough surrounding interface to explain the difference. | Badges used as a topic label and a count within a navigation link. |

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
| Badge was added March 8 and refined March 9. | [`b8b31343`](https://github.com/Natura11y/root/commit/b8b31343) adds the style and example; `5cccafdc` adds icon and interactive styling and examples of counts in links. |
| Drawing Board uses label badges in cards and linked topic badges on article pages. | This site's `PostCard.astro`, `TopicNav.astro`, and `src/pages/drawing-board/[slug].astro`. This is a present-day example, not a March claim. |

Current public references: [Flyout](https://gonatura11y.com/docs/flyout/), [Nested nav](https://gonatura11y.com/docs/nested-nav/), and [Badge](https://gonatura11y.com/docs/badge/). The article does not claim completed usability testing, measured improvements, or that the later Storybook/monorepo setup existed in March.
