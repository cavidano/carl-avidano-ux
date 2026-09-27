# Carl Avidano UX portfolio

One Astro website with a general portfolio and independently editable application portfolios. Layouts, components, Natura11y behavior, and URL handling are shared. Each employer has its own copy and résumé.

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

| Location | Responsibility |
| --- | --- |
| [context/](context/README.md) | Project background, working preferences, Confluence writing directory, and application guidance |
| `src/content/` | Main-site homepage copy, About page, case studies, and Drawing Board posts |
| `src/sites/<application>/` | Application copy, selected projects/articles, decorative artwork, and working records |
| `public/<application>/` | That application's résumé, employer SVG logos, and server rules |
| `src/images/`, `public/media/` | Shared project illustrations, photographs, and videos |
| `src/components/`, `src/layouts/` | Shared page composition, navigation, theme, and interactions |
| `src/components/Applications/` | Components and SCSS shared specifically by applicant sites |
| `src/pages/[site]/[...path].astro` | Routes for every registered application |
| `src/pages/[site]/background.css.ts` | Optimized decorative background assets for each application |
| `src/lib/application-sites.js` | Application IDs and website publication status |
| `src/lib/site-paths.js`, `SiteLink.astro` | Scope links to the current application |
| `scripts/application-build.mjs` | Validate application files and exclude draft public assets from production output |
| `scripts/check-site-links.mjs` | Check built links, assets, responsive images, metadata, and application isolation |

Application content copies are deliberate snapshots. A change to the main case study or a shared image does not automatically approve new wording for an already submitted application. Keep application text independently editable. If an image must differ for one application, give it a separate source file and import it from that application's MDX or hero.

## Application workflow

Follow [the application-site guide](context/application-sites.md). Start a new `codex/<application>-microsite` branch and register each new site as `draft`. Review current Confluence sources before writing website copy, as required by [AGENTS.md](AGENTS.md).

The registry's `published` status means the website is approved for production builds. It does not mean the job application has been submitted, or that its documents are final. Those facts belong in the application's `application-brief.md` and `application-documents.md`.

## Build and deployment

The Cloudways workflow is manually dispatched. It checks a review build, then produces and audits `dist/`; only that production output is uploaded as the deployment artifact. Deployment happens only when the workflow's `deploy` input is enabled. A local build never publishes anything.

Production builds exclude draft application routes and the corresponding `public/<application>/` directory, including PDFs and logos. Approved application pages remain `noindex, follow` and excluded from the sitemap. Indexing controls are not access controls.

After Carl confirms a rejection, remove the applicant site's dedicated source and assets and add its slug to `retiredApplicationSites` in the registry. Builds verify that retired sites are absent and produce a deployment removal list. The next authorized Cloudways deployment removes only those named server directories. A local deletion or commit does not itself change the live site.

Dependencies are pinned to the currently verified versions and `package-lock.json` is committed. Upgrade deliberately and run both builds; ordinary application work does not need dependency upgrades. Natura11y uses the current `@natura11y/*` packages, with its canonical source in `/Users/carlavidano/Sites/natura11y`.

## Content references

- [Project context and writing workspace](context/README.md)
- [Plain-language writing standard](context/plain-language.md)
- [Case-study conventions](context/case-studies.md)
- [Drawing Board conventions and source records](context/drawing-board.md)
- [Portfolio workshop reference](context/jared-spool-ux-portfolio-2026.md)
