# Accenture / Work & Co application site

Local preview: http://127.0.0.1:4321/accenture

Branch: `codex/accenture-microsite`. Created September 23, 2026, from the approved BNY microsite structure. This application targets **Design Lead at Work & Co, part of Accenture Song**, requisition **R00337068**. It is a local draft, not a submitted application or deployed website.

## Edit this site

| Content | File |
| --- | --- |
| Homepage headline, introduction, section introductions, and metadata | `site.json` |
| Logo width, role label, and backdrop image | `Hero.astro` |
| About page and skills | `pages/about.mdx` |
| Case-study cards, order, and page content | `portfolio/*.mdx` |
| Article selection and content | `drawing-board/*.mdx` |
| Résumé download | `../../../public/accenture/resume-carl-avidano.pdf` |

`logoMaxWidth` in `Hero.astro` is the maximum width in pixels; height follows the SVG's original proportions. The shared `src/components/ApplicationHero.astro` retains the approved Natura11y backdrop, theme-aware header gradient, and downward image fade. This version initially shares Carl's NYC photograph from `../bny/images/new-york-city-at-night.png`. Save a separate image here when changing the Accenture artwork.

Visionlearning, NYC OTI, Natura11y, Phoenix, and UNICEF are featured in that order. Carl requested adding Phoenix above UNICEF. Edit `isFeatured` and `sortOrder` to change the selection. All eight copied case studies remain independently editable. Their body copy, figures, colors, and supported results are preserved; featured card descriptions and hero taglines are tailored to this role.

The homepage features navigation components, social graphics, and ESR captioning. All published Drawing Board articles remain available in the listing, topic archives, and related-article sections. Draft visibility follows the existing local-preview rules. Changing this site's content does not change BNY or the main portfolio.

## Navigation and résumé

Use ordinary internal links such as `/about` or `/portfolio/visionlearning`. `SiteLink` prefixes those routes with `/accenture`, including the logo home link and résumé download. `/accenture/portfolio` redirects to `/accenture#projects`. External links, shared media, and same-page anchors keep their destinations.

The local résumé asset is an unchanged copy of the main site's general résumé, including its August 2026 Reingold end date. It contains no BNY branding or links, but it is **not yet tailored to Work & Co**. Its printed portfolio address remains `carlavidano.com`. Replace this dedicated asset with the approved Accenture export before applying; do not overwrite either the main or BNY PDF. The BNY cover letter and private application records were not copied.

All application pages use `noindex, follow` and are excluded from the sitemap. This is indexing control, not authentication. Deployment still requires Carl's instruction.

## Official logo source

The SVG paths come directly from [Accenture's official job page](https://www.accenture.com/us-en/careers/jobdetails?id=R00337068_en&title=Design+Lead), retrieved September 23, 2026. The expanded wordmark placement is taken from the page's `cmp-logo` CSS: the greater-than mark is scaled to `.396` and translated `88.5px` in its `153 × 40` viewBox. The paths are unchanged.

- Light mode: the official purple-on-light treatment, black wordmark with purple symbol.
- Dark mode: the official white-on-dark treatment.
- Forced colors: retain the shared hero's protected matching logo surface and hide the decorative photograph.

## Checks

Run `npm run build` and `npm run check:site-links`. The latter audits every registered microsite for scoped navigation, existing assets, metadata, sitemap exclusion, and isolation from the main site and other applications.

To start another microsite, create a new branch first, copy the editable content folders and site settings, add its official SVG logos and résumé directory, and register its slug once in `src/lib/application-sites.js`. The shared route and content loaders discover its pages and `Hero.astro` automatically. Follow the root `AGENTS.md` and check current Confluence sources before tailoring copy.
