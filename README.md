# Carl Avidano UX portfolio

One Astro website with a general portfolio and tailored application landing pages. Every site renders the same case-study cards and pages and the same Drawing Board article collection. Each employer keeps its own introduction, project selection, About copy, and résumé.

## Local development

Use Node 22.12 or newer (`.nvmrc` selects Node 22), then install the locked dependencies:

```sh
npm ci
npm run dev
```

The development server includes all registered applications. The current application draft is at `/accenture`; BNY is at `/bny`. Restart the server after registering a new application or changing publication settings.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Work on the main site and all applications, including drafts |
| `npm test` | Check article behavior, application registration, publication, and link scoping |
| `npm run check` | Astro diagnostics and application file validation |
| `npm run build` | Validate and build the main site plus published applications into `dist/`; audit the output |
| `npm run preview` | Serve that production build locally |
| `npm run build:review` | Validate and build all applications into `dist-review/`; audit the output |
| `npm run preview:review` | Serve the separate review build locally |
| `npm run check:site-links` | Recheck the existing production build |

`build:review` includes application drafts, but retains the normal article publication rules. Article drafts marked `preview: true` appear only in the development server. Never deploy `dist-review/`.

## Where things live

**Edit the main homepage in [src/pages/index.astro](src/pages/index.astro).** Its headline, About Me text, button labels, and page metadata are written directly in that file. Project-card names (`title`), headlines (`cardHeadline`), descriptions, and button labels come from each case study in `src/content/portfolio/`; article summaries come from `src/content/drawing-board/`.

Edit the main [About page](src/pages/about.astro) and [Drawing Board listing](src/pages/drawing-board/index.astro) directly too. About's biography, skills, contact links, résumé link, metadata, and markup are together in its page. The Drawing Board index owns its heading, introduction, metadata, and layout; topic routes reuse it with filtered posts. Application versions retain their own content and templates in `src/components/Applications/`.

| Location | Responsibility |
| --- | --- |
| [context/](context/README.md) | Project background, working preferences, Confluence writing directory, and application guidance |
| [src/pages/index.astro](src/pages/index.astro) | Main homepage copy and markup |
| `src/content/` | Main-site case studies and Drawing Board posts |
| `src/sites/<application>/` | Application copy, selected projects/articles, decorative artwork, and working records |
| `public/<application>/` | That application's résumé, employer SVG logos, and server rules |
| `src/images/`, `public/media/` | Shared project illustrations, photographs, and videos |
| `src/components/`, `src/layouts/` | Shared page composition, navigation, theme, and interactions |
| `src/components/Applications/` | Application homepage, About, and Drawing Board templates; hero, background, and SCSS |
| `src/pages/[site]/[...path].astro` | Routes for every registered application |
| `src/pages/[site]/background.css.ts` | Optimized decorative background assets for each application |
| `src/lib/application-sites.js` | Application IDs and website publication status |
| `src/lib/site-paths.js`, `SiteLink.astro` | Scope links to the current application |
| `scripts/application-build.mjs` | Validate application files and exclude draft public assets from production output |
| `scripts/check-site-links.mjs` | Check matching case-study headers/bodies/figures, links, assets, metadata, and application isolation |

Case studies have one source: `src/content/portfolio/*.mdx`. Every main and application route reads these files at build time, so an edit is included everywhere on the next deployment. Each application’s `projects.json` lists its featured project slugs in display order; it contains no copied case-study text. All published case studies remain available within each application’s URL space. Do not create application `portfolio/` copies. Drawing Board articles also have one source, `src/content/drawing-board/*.mdx`: updates and new published articles appear on every site. Each application’s `articles.json` controls only its featured homepage articles. Homepage introductions, Who I am/What I do, selections, artwork, and résumés stay independently editable. About defaults to the main page; an optional `pages/about.mdx` supplies application-specific copy.

The main Case Studies listing is at `/case-studies`, with individual pages at `/case-studies/<slug>`. Application case studies use `/<application>/case-studies/<slug>`; their overview is the application's homepage `#projects` section. The editable case-study MDX files live only in `src/content/portfolio/`. The main listing’s copy, metadata, and markup are directly editable in `src/pages/case-studies/index.astro`.

## Application workflow

Follow [the application-site guide](context/application-sites.md). Start a new `codex/<application>-microsite` branch and register each new site as `draft`. Review current Confluence sources before writing website copy, as required by [AGENTS.md](AGENTS.md).

The registry's `published` status means the website is approved for production builds. It does not mean the job application has been submitted, or that its documents are final. Those facts belong in the application's `application-brief.md` and `application-documents.md`.

## Build and deployment

The Cloudways workflow is manually dispatched. It checks a review build, then produces and audits `dist/`; only that production output is uploaded as the deployment artifact. Deployment happens only when the workflow's `deploy` input is enabled. A local build never publishes anything. Deployment removes old `portfolio/` directories only for the main site and published applications with a built `case-studies/` replacement; Carl requested this route migration without redirects.

Production builds exclude draft application routes and the corresponding `public/<application>/` directory, including PDFs and logos. Approved application pages remain `noindex, follow` and excluded from the sitemap. Indexing controls are not access controls.

After Carl confirms a rejection, remove the applicant site's dedicated source and assets and add its slug to `retiredApplicationSites` in the registry. Builds verify that retired sites are absent and produce a deployment removal list. The next authorized Cloudways deployment removes only those named server directories. A local deletion or commit does not itself change the live site.

Dependencies are pinned to the currently verified versions and `package-lock.json` is committed. Upgrade deliberately and run both builds; ordinary application work does not need dependency upgrades. Natura11y uses the current `@natura11y/*` packages, with its canonical source in `/Users/carlavidano/Sites/natura11y`.

## Content references

- [Project context and writing workspace](context/README.md)
- [Plain-language writing standard](context/plain-language.md)
- [Case-study conventions](context/case-studies.md)
- [Drawing Board conventions and source records](context/drawing-board.md)
- [Portfolio workshop reference](context/jared-spool-ux-portfolio-2026.md)
