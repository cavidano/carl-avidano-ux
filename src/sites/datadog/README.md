# Datadog application site

**October 6 — shared banner, local:** This application now uses `Applications/IntroPanel/index.astro`: theme-aware official logos, one-sentence opening, and one alignment paragraph. Edit the target-role pill in `home.role` and banner copy in `home.panelHeading` and `home.introduction` in `site.json`; edit artwork and both logo sources in `Hero.astro`. The familiar homepage heading/pills precede it. The banner has natural height, `margin-y-6` internally, 25% artwork opacity, and no gradient. Relevant case studies has no extra introductory paragraph. This replaces the earlier hero treatment described below. Existing employer copy, project/article selections, résumé, and publication status are preserved. Hemingway is updated; Confluence awaits the later copy review.

**October 6 — editable Figma layout:** The Portfolio file’s **Application pages** page contains [Datadog — Homepage — Desktop](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1545-9), a 1440 px desktop mockup for Carl to rearrange. Text, sections, artwork, and the bottom gradient are editable. The [separate official SVG logo](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1545-282) sits beside it as eight vector paths. The temporary import was removed after visual review. This is a layout discussion workspace, not approval for further website changes.

**October 6 — new layout, local trial:** Preview `/datadog` on `codex/application-intro-panel`. The normal headline and pills come first, followed by the custom 16:9 Backdrop with a bottom gradient. Mobile height follows the content. The existing application paragraph remains provisional; project/article selections and default About are preserved. Both builds and desktop/mobile checks pass. Hemingway is current; Confluence v8 awaits copy review. No deployment or submission.

**October 6 — current local review:** The opening now names Natura11y ownership and Reingold leadership. The curated-work introduction is shorter. The approved main-site blurbs and About remain, with Natura11y → Phoenix → Visionlearning → NYC OTI and the same three system-focused articles. The résumé download is now the verified Datadog PDF with the custom portfolio URL. Preview at `http://localhost:4321/datadog`; branch `codex/datadog-microsite`. The review build passes. Confluence remains at the preceding v8 pending review of this local wording. No deployment or submission. [Current copy status](copy-review.md) · [Résumé record](application-documents.md).

**October 5 — current copy baseline:** Who I am, What I do, and the full About page use the latest main-site copy. Employer introductions and curated selections remain application-specific. There is no About override file; add one only for a requested future customization. The full-collection homepage link is removed. See [copy-review.md](copy-review.md) for Confluence/Hemingway synchronization and local-only status. Older tailored-About instructions below are historical.

**Current architecture — October 1, 2026:** Case studies now render directly from the shared `src/content/portfolio/*.mdx` sources. Edit them once for every site. `projects.json` contains only featured project IDs and their order. `articles.json` does the same for homepage articles; every site’s full Drawing Board reads the shared main collection. Complete cards, headers, case studies, and articles use the same sources/templates everywhere. Landing/About copy, artwork, selections, and résumé stay application-specific. The historical independent-copy instructions below are superseded. Current case-study writing belongs on the main Confluence pages linked in `context/case-studies.md`.

Local draft on `codex/datadog-microsite`, created September 26, 2026. **Accessibility-led positioning under review; see [positioning-draft.md](positioning-draft.md).** Preview remains at `/datadog`; not published or submitted. See [job-evidence-map.md](job-evidence-map.md) for the central experience gap and exact claim sources.

Target: **Senior Design Manager – Design Systems**, requisition **R21400**, New York. See [application-brief.md](application-brief.md) for the role and evidence decisions.

## Content

- `site.json`: editable headline, pill labels, introduction, metadata, About summary, section descriptions, and panel presentation setting.
- `Hero.astro`: employer artwork and logo, using the shared `Applications/IntroPanel/index.astro`.
- `projects.json`: ordered references to shared case studies. Natura11y, Phoenix, Visionlearning, and NYC OTI are featured in that order; card copy and case-study bodies come from `src/content/portfolio/`.
- `articles.json`: ordered references to the shared monorepo, contrast-theme, and navigation articles in `src/content/drawing-board/`.
- About inherits the complete default narrative, skills, and work history. No `pages/about.mdx` override is currently present.
- `public/datadog/resume-carl-avidano.pdf`: tailored Datadog résumé for local review; see [application-documents.md](application-documents.md).

Core case-study bodies and figures come directly from the current shared collection. There are no Datadog-specific case-study prose overrides. Other applications and canonical portfolio copy are unchanged by the October 6 refinement.

## Official artwork

Retrieved September 26, 2026, from [Datadog’s Logos & Press Kit](https://www.datadoghq.com/about/resources/).

- [Official logo archive](https://corp.dd-static.net/zip/Logo_Assets.zip): `Logo Assets/DD Vector Logos/Horizontal/SVG/dd_logo_h_rgb.svg` and `dd_logo_h_white.svg` are copied byte-for-byte to `public/datadog/datadog-logo-light.svg` and `datadog-logo-dark.svg`.
- The light logo is the official purple RGB wordmark; the dark logo is the official white wordmark. Their original viewBoxes and paths are preserved. The panel always has a dark surface and uses the white logo, with a matching surface retained in forced-colors mode.
- [Official geometric banner](https://corp.dd-static.net/img/logos-press-kit/header-banner.png?format=png&auto=format&fit=max) is copied unchanged to `images/datadog-brand-pattern.png` (2800 × 628). Astro creates 16:9 WebP crops at 640, 1280, 1920, and 2400 pixels wide. The contained panel uses Natura11y's bottom gradient and 50% image opacity. Forced colors hides the decorative artwork. No generated or retouched brand artwork is used.

## Review

Use the current development server at `/datadog`, or `npm run build:review` and `npm run preview:review` for a static review. `npm run build` must exclude this draft's routes and public assets. Shared navigation, project links, article links, and résumé download remain scoped to `/datadog`.

The proposed opening remains in the positioning draft for review; it has not replaced website copy. Review and production builds passed at the September 26 draft checkpoint. Carl asked to leave this draft for today while starting the next application.
