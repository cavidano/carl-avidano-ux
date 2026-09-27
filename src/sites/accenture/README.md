# Accenture / Work & Co application site

Local preview: http://127.0.0.1:4321/accenture

Branch: `codex/accenture-microsite`. Created September 23, 2026, from the approved BNY microsite structure. Carl selected **Senior Design Lead at Work & Co, part of Accenture Song**, requisition **R00334614**, on September 23, superseding the initial Design Lead target. It is a local draft, not a submitted application or deployed website.

## Edit this site

| Content | File |
| --- | --- |
| Homepage headline, introduction, section introductions, and metadata | `site.json` |
| Logo width and optional role label | `Hero.astro` |
| Decorative background image | `site.json` → `backgroundImage` |
| Shared background dimensions, crop, opacity, and fade | `../../components/Applications/style.scss` and `../../pages/[site]/background.css.ts` |
| About page and skills | `pages/about.mdx` |
| Case-study cards, order, and page content | `portfolio/*.mdx` |
| Article selection and content | `drawing-board/*.mdx` |
| Résumé download | `../../../public/accenture/resume-carl-avidano.pdf` |

`logoMaxWidth` in `Hero.astro` is the maximum width in pixels; height follows the SVG's original proportions. The shared `src/components/Applications/ApplicationHero.astro` uses a normal-flow introduction with a theme-aware header gradient. `ApplicationBackground.astro` provides decorative CSS artwork and a downward fade only on the application landing page; their shared styles live in the adjacent `style.scss`. Accenture uses its own `images/purple-abstract-backdrop.png`, exported from [Carl's Figma artwork](https://www.figma.com/design/RELqPD0MlE9xfVLxRMGJTR/Portfolio?node-id=1287-104) on September 23, 2026. Astro produces the same 2:1 responsive WebP sizes for every employer. The artwork uses a top-aligned cover treatment on the landing page and scrolls with the page.

Phoenix.gov, Visionlearning, NYC OTI, Natura11y, and UNICEF are featured in that order. Carl requested leading with Phoenix.gov. Edit `isFeatured` and `sortOrder` to change the selection. All eight copied case studies remain independently editable. Their body copy, figures, colors, and supported results are preserved; featured card descriptions and hero taglines are tailored to this role.

The homepage features navigation components, social graphics, and ESR captioning. All published Drawing Board articles remain available in the listing, topic archives, and related-article sections. Draft visibility follows the existing local-preview rules. Changing this site's content does not change BNY or the main portfolio.

The shared background uses 20% opacity in both themes and fades to transparent over one viewport height. `Layout.astro` includes it only on the landing page; interior pages have no decorative background image. The original image file is unchanged.

## Navigation and résumé

Use ordinary internal links such as `/about` or `/case-studies/visionlearning`. `SiteLink` prefixes those routes with `/accenture`, including the logo home link and résumé download. Case-study list links resolve to `/accenture#projects`. External links, shared media, and same-page anchors keep their destinations.

The local résumé asset is an unchanged copy of the main site's general résumé, including its August 2026 Reingold end date. It contains no BNY branding or links, but it is **not yet tailored to Work & Co**. Its printed portfolio address remains `carlavidano.com`. Replace this dedicated asset with the approved Accenture export before applying; do not overwrite either the main or BNY PDF.

Tailored copy drafts are in `resume.md` and `cover-letter.md`. The separate InDesign working copy and planned exports are recorded in [application-documents.md](application-documents.md), along with their exact approval and export status. Do not treat a source copy or Markdown draft as a finished PDF.

All application pages use `noindex, follow` and are excluded from the sitemap. This is indexing control, not authentication. Deployment still requires Carl's instruction.

## Official logo source

The SVG paths come directly from [Accenture's official job page](https://www.accenture.com/us-en/careers/jobdetails?id=R00337068_en&title=Design+Lead), retrieved September 23, 2026. The expanded wordmark placement is taken from the page's `cmp-logo` CSS: the greater-than mark is scaled to `.396` and translated `88.5px` in its `153 × 40` viewBox. The paths are unchanged.

- Light mode: the official purple-on-light treatment, black wordmark with purple symbol.
- Dark mode: white lettering with the same purple symbol as light mode.
- Forced colors: retain the shared hero's protected matching logo surface and hide the decorative photograph.

## Checks

Accenture is registered as `draft`. Use `npm run dev` or `npm run build:review` followed by `npm run preview:review` to inspect it locally. The review build audits all registered applications and writes to `dist-review/`. The normal `npm run build` audits production output and excludes Accenture's pages and public assets until Carl requests publication and its registry status is changed to `published`.

See [the shared application-site guide](../../../context/application-sites.md) for setup, verification, and publication steps.

To start another microsite, create a new branch first, copy the editable content folders and site settings, add its official SVG logos and résumé directory, and register its slug once in `src/lib/application-sites.js`. The shared route and content loaders discover its pages and `Hero.astro` automatically. Follow the root `AGENTS.md` and check current Confluence sources before tailoring copy.
