# Datadog application site

Local draft on `codex/datadog-microsite`, created September 26, 2026. **Accessibility-led positioning under review; see [positioning-draft.md](positioning-draft.md).** Preview remains at `/datadog`; not published or submitted. See [job-evidence-map.md](job-evidence-map.md) for the central experience gap and exact claim sources.

Target: **Senior Design Manager – Design Systems**, requisition **R21400**, New York. See [application-brief.md](application-brief.md) for the role and evidence decisions.

## Content

- `site.json`: introduction, metadata, About summary, section descriptions, and background path.
- `Hero.astro`: employer logo size and role label, using the shared ApplicationHero.
- `portfolio/`: independently editable copies of current main-site case studies. Natura11y, Phoenix, Visionlearning, and NYC OTI are featured in that order, with descriptions and taglines tailored to this role.
- `drawing-board/`: independently editable copies of the main-site articles. The monorepo, contrast-theme, and navigation articles are featured in that order. Article text, dates, and publication states are retained.
- `pages/about.mdx`: tailored opening with the approved inclusive-design and disability perspective retained.
- `public/datadog/resume-carl-avidano.pdf`: general résumé for preview only; see [application-documents.md](application-documents.md).

Core case-study bodies and figures are retained. The Natura11y result paragraph omits the older CCF redesign claim because CCF now has its own independent system. Other applications and canonical portfolio copy are unchanged.

## Official artwork

Retrieved September 26, 2026, from [Datadog’s Logos & Press Kit](https://www.datadoghq.com/about/resources/).

- [Official logo archive](https://corp.dd-static.net/zip/Logo_Assets.zip): `Logo Assets/DD Vector Logos/Horizontal/SVG/dd_logo_h_rgb.svg` and `dd_logo_h_white.svg` are copied byte-for-byte to `public/datadog/datadog-logo-light.svg` and `datadog-logo-dark.svg`.
- The light logo is the official purple RGB wordmark; the dark logo is the official white wordmark. Their original viewBoxes and paths are preserved. Shared styles use each SVG's intrinsic aspect ratio and retain a matching surface in forced-colors mode.
- [Official geometric banner](https://corp.dd-static.net/img/logos-press-kit/header-banner.png?format=png&auto=format&fit=max) is copied unchanged to `images/datadog-brand-pattern.png` (2800 × 628). The existing image pipeline creates the standard 2:1 responsive crops. The landing-page-only layer scrolls with the page, uses 20% opacity, and fades out; interior pages omit it. No generated or retouched brand artwork is used.

## Review

Use the current development server at `/datadog`, or `npm run build:review` and `npm run preview:review` for a static review. `npm run build` must exclude this draft's routes and public assets. Shared navigation, project links, article links, and résumé download remain scoped to `/datadog`.

The proposed opening remains in the positioning draft for review; it has not replaced website copy. Review and production builds passed at the September 26 draft checkpoint. Carl asked to leave this draft for today while starting the next application.
