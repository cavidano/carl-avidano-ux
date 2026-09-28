# Case studies

Use this file for case-study structure, source locations, Carl's confirmed account, and evidence that may support later revisions. Read the current Confluence page and matching local source before writing. Historical reviews below are evidence and proposals, not a fresh assessment or permission to change approved copy.

Apply the shared [plain-language standard](plain-language.md) to each revision while preserving approved facts and structure.

On September 27, 2026, Carl chose **Case Studies** for the section name, navigation, page metadata, and URLs. The main listing uses `/case-studies`, and individual pages use `/case-studies/<slug>` or `/<application>/case-studies/<slug>`. He described this as a new start and explicitly requested no redirects from the old portfolio URLs. This route change is local until publication is requested. Source MDX folders remain named `portfolio`. On September 28, Carl requested that the main listing's copy, metadata, and markup live directly in `src/pages/case-studies/index.astro`, matching the homepage's editing approach. The separate `CaseStudiesPage` wrapper and the main `site.json` listing-copy block were removed; the shared card renderer still reads the individual MDX files. The Case Studies landing section uses `margin-y-6`, matching the homepage. Carl initially chose **Key projects and organizations** because entries such as NYC OTI group several projects under one organization; his later local edit changed the H1 to **Case studies**. Preserve the latest wording. The introduction is “I've led and collaborated on digital projects for government agencies, global nonprofits, and intergovernmental organizations.” Keep the organization categories parallel; Carl explicitly rejected naming UNICEF alongside the other broad categories. Navigation, metadata, and URLs retain Case Studies.

Carl confirmed on September 28, 2026 that the current priority is the regular website and its main case studies. Finish that work and keep its Confluence copies aligned before moving into individual application sites. For those later custom applications, [reuse the approved foundation and tailor the emphasis](application-tailoring-evidence-guide.md#reuse-the-foundation-and-tailor-the-emphasis). Keep useful wording intact and highlight the evidence relevant to each role; a new application does not call for a complete case-study rewrite.

- [Writing sources](#writing-sources)
- [Approved structure](#approved-structure)
- [Portfolio comparisons](#portfolio-comparisons)
- [Recorded editorial state](#recorded-editorial-state)
- [Portfolio review checkpoints](#portfolio-review-checkpoints)
- [Visionlearning research and confirmed account](#visionlearning-research-and-confirmed-account)

## Writing sources

The [Case Studies index](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24444930) holds the main-site working copies. Employer-specific variants belong under Custom Applications, as linked from the [context index](README.md).

| Case study | Website source | Confluence copy |
| --- | --- | --- |
| Phoenix.gov | [phoenix.mdx](../src/content/portfolio/phoenix.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23789570/Phoenix.gov) |
| Visionlearning | [visionlearning.mdx](../src/content/portfolio/visionlearning.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23429129/Visionlearning) |
| Natura11y | [natura11y.mdx](../src/content/portfolio/natura11y.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23855116/Natura11y) |
| Cheetah.org | [cheetah-conservation-fund.mdx](../src/content/portfolio/cheetah-conservation-fund.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24182787/Cheetah.org) |
| NYC OTI | [nyc-oti.mdx](../src/content/portfolio/nyc-oti.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24510466/NYC+OTI) |
| LADRC | [ladrc.mdx](../src/content/portfolio/ladrc.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24543233/LADRC) |
| Mr. Ellie Pooh | [mr-ellie-pooh.mdx](../src/content/portfolio/mr-ellie-pooh.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24576001/Mr.+Ellie+Pooh) |
| UNICEF | [unicef.mdx](../src/content/portfolio/unicef.mdx) | [Edit in Confluence](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24444947/UNICEF) |

The September 21 import used commit `7174f95` and was checked for text, headings, role descriptions, results, captions, metadata descriptions, and image references. This does not prove that the copies still match. At import, body images were external website images, captions were separate editable paragraphs, and card/SEO descriptions were in an expandable section.

For approved changes, synchronize Confluence and the relevant local copy and verify the saved content. Preserve project colors, figures, captions, and original proportions. Keep research and Rovo transcripts separate from audience-facing case-study copy.

## Approved structure

Use the revised Phoenix structure as the pattern for future case-study edits: Challenge, Solution, My role, and Results at the beginning; supporting process and figures afterward; Looking back at the end. Results do not require statistic cards when quantitative evidence is unavailable. Preserve each project's intentional colors and figure backgrounds. Apply the pattern individually with verified project facts rather than rewriting all cases at once.

Use a plain paragraph under “My role” to state Carl's contribution and the organization through which he worked. Keep project context in Challenge. Preserve related Drawing Board articles; the shared site component shows up to three published matches, newest first. Animated examples need pause/play controls and must respect reduced-motion preferences.

## Portfolio comparisons

On September 27, Carl requested Kate's card hierarchy for the main homepage and then extended it to all eight projects on the Case Studies landing page: the project name in smaller, normally styled text, then a larger headline explaining the impact of his work, followed by the description and a “View Case Study” button. Omit years and date separators. All eight working headlines are stored as `cardHeadline` beside each project's existing `title` and `description`; the matched Confluence working copies record the headline and button label. Keep claims grounded in each case study: LADRC's card describes research and recommendations, and Mr. Ellie Pooh's sales result is attributed to the business. Preserve application-specific cards unless Carl requests the same change there.

During the September 28 headline review, Carl approved “Building an inclusive design system from design to code” for Natura11y and agreed to try “Helping a fair-trade business increase sales tenfold” for Mr. Ellie Pooh. Both were applied to the main website source and verified in Confluence (Natura11y version 10; Mr. Ellie Pooh version 5). He kept “Reimagining a website serving 1.5 million residents” for Phoenix.gov and “Bringing science learning into the next generation” for Visionlearning, and rejected the proposed UNICEF rewrite. His later local edit set UNICEF’s headline to “Designing a fundraising platform used across 80+ country offices”; preserve that latest wording. Avoid repeating the public-services wording already used by NYC OTI. This follow-up synchronized only the two accepted edits; the earlier all-page synchronization is a dated checkpoint, not proof that later local headline edits still match Confluence.

Researched September 27, 2026 at Carl's request for three strong senior UX designer or UX director portfolio references with evidence of effectiveness. Carl confirmed that the main website is his generalist portfolio; custom applications remain separate. These are research findings for discussion, not approved changes to his site.

The shortlist contains two portfolio websites and one management portfolio presentation. Public hiring accounts support their selection, but cannot isolate a portfolio's contribution from experience, referrals, interviews, or the rest of an application. A successful historical portfolio also does not prove that every element of its current version is effective. No director-level hiring outcome was verified; the leadership example below concerns a move from senior designer into design management.

### Kate Kalento — senior product designer and team lead

- **Portfolio:** [Kate Kalento](https://katekalento.framer.website/).
- **Hiring evidence:** [Recruiter Lena Kul's account](https://www.linkedin.com/posts/lena-kul_after-the-last-weeks-session-someone-told-activity-7478406190834831360-TaFQ) explicitly connects discovering Kate's portfolio to the team's interest and a subsequent signed offer after interviews and a task. This is firsthand evidence from the recruiter who placed her, with a promotional context: the post advertises a portfolio workshop. The [event page](https://luma.com/bnht7k8e) identifies Kate as Nevis's founding product designer.
- **Inspect:** [Scheduling case study](https://katekalento.framer.website/case-study-scheduling). It states her role and the two teams involved, then explains why a simple calendar dropdown gave users too little context. The alternative exposes the full schedule and acknowledges greater implementation effort. [Task-card case study](https://katekalento.framer.website/case-study-task-card) also compares layout options and explains the selected approach.
- **Our assessment:** The specific decisions and tradeoffs make this a useful benchmark for senior design judgment. For Carl, select similarly concrete moments within existing projects and explain the reasoning beside the relevant figure. Preserve project names and verified outcomes.
- **Limits:** Project metrics are the designer's published claims, not independently audited results. The large introduction and long pages are not requirements to copy. Browser inspection covered the homepage and scheduling page; this was not an accessibility or performance audit.

Carl's September 28 follow-up emphasized that his multidisciplinary, often multiyear projects should not be forced into the same format as Kate's two focused feature studies. Preserve the breadth of research, design, development, and systems work while making individual decisions easy to follow. He deferred interactive annotations and dislikes pervasive animation.

Carl likes Kate's compact band of project information on the detail pages. He also wondered whether his own openings feel heavy, while recognizing that the projects' scope may justify the context. This is a possible later review, not an approved layout change. Keep years off the cards; project dates can be explained within a case study when useful.

### Emanuel Serbanoiu — lead product designer

- **Portfolio:** [Emanuel Serbanoiu](https://emanuelsfolio.framer.website/).
- **Hiring evidence:** In his [firsthand account](https://www.linkedin.com/posts/eserbanoiu_i-built-a-system-to-create-my-portfolio-activity-7468293043889164289-VBNF), Emanuel attributes multiple interviews and an offer at Mistral to his portfolio. The account also promotes a workshop. His prior Meta experience and the rest of the hiring process remain relevant factors.
- **Inspect:** [Events Studio preview](https://emanuelsfolio.framer.website/studio) and [Fitbit Premium preview](https://emanuelsfolio.framer.website/premium). The homepage connects project cards to role, scope, and reported results. Studio describes coordination across designers and collaboration with product management on priorities. Fitbit connects design to experimentation and product growth.
- **Our assessment:** Useful for making each project's relevance apparent before someone opens it. For Carl, a short description can identify the problem, his contribution, and a supported result; use qualitative evidence where numbers are unavailable. This can be a focused wording change.
- **Limits:** Both reviewed case studies offer public previews; their full presentations require contacting the designer. We did not inspect that private material or independently verify the project metrics. The visually expressive homepage is not an accessibility benchmark: the browser exposed many separate headings for pieces of its animated headline. Its live homepage showed August 2026 updates, while the search index still described an earlier version.

### Femke van Schoonhoven — senior designer to design manager

- **Portfolio presentation:** [The portfolio presentation that got me hired as a design manager](https://www.youtube.com/watch?v=TxBrcdiNqcM), published December 7, 2022. This is a slide portfolio walkthrough, not a generalist portfolio website.
- **Hiring evidence:** Femke's own description explicitly says this portfolio supported her move into a design-manager role. Her [newsletter](https://ck.femke.design/posts/is-it-time-to-update-your-portfolio) links it alongside other successful portfolio walkthroughs. This is a self-reported historical outcome; it does not establish director-level qualification.
- **Inspect:** The coaching section begins at 7:33. At 8:06, the visible slide supports leadership with mentoring, education, speaking, and workshop examples. The chapter list distinguishes individual design influence, coaching, principles, project work, and the final pitch.
- **Our assessment:** Useful for explaining how Carl helps other people and teams succeed, alongside hands-on work. Keep mentoring, technical guidance, project leadership, and formal people management accurately distinguished.
- **Review scope:** Read the published description and chapter list and inspected selected video frames. Transcript export was unavailable; the entire spoken presentation was not reviewed.

### How to use these comparisons

Start with Kate for decision narratives, Emanuel for concise project summaries, and Femke for leadership evidence. This selection follows the saved Jared Spool guidance: help a hiring reader recognize relevant contribution and judgment. It does not prescribe a project count, visual style, platform change, or full rewrite. Maintain Carl's accessibility standards and plain language, and test any proposed changes with actual readers before calling them effective for his portfolio.

## Recorded editorial state

On September 28, 2026, Carl explicitly requested that all main Confluence case studies be aligned with the current regular website before work continues on the individual application sites. The current local main-site MDX files were authoritative for this synchronization. All eight main pages were updated and read back; saved headings, paragraphs, card headlines/descriptions/button labels, role statements, result figures, project links, figure captions, image descriptions, and media dimensions were compared with the source. Working website links now use `/case-studies/`. The Case Studies index records the main-site-first sequence. This resolves the September 22 reconciliation gaps; it does not constitute a new rewrite, substantiate existing outcome claims, or verify a website deployment. Application sources and employer-specific Confluence pages were not changed.

Verified main-page versions after synchronization: Phoenix.gov **11**, Visionlearning **7**, Natura11y **9**, Cheetah.org **6**, NYC OTI **4**, LADRC **3**, Mr. Ellie Pooh **4**, and UNICEF **3**. Case Studies index: **6**. These version numbers are a dated checkpoint; read live pages again before editing.

Visionlearning's main page now contains the latest website narrative, role, captions, corrected mobile description, CMS-adoption paragraph, and interactive-learning-tools figure. The current PNG and matching MP4 demonstration were attached using their existing filenames. The body uses the verified public website WebP rendition of `visionlearning-interactive-learning-tools.png`, preserving its 1800:939 proportions. Confluence discarded this new figure’s alt attribute through both the API and editor, so its exact source image description is preserved as an adjacent labeled paragraph. This remains a Confluence alt-attribute limitation; do not claim that attribute was verified. Other source image descriptions were retained and verified. The MP4 is available with a descriptive caption inside the source-details expansion. The separate revised draft is retained as reference, with a notice directing ongoing edits to the main page (draft version **12**). Rovo source and correction notes remain separate reference material.

The full narrative rewrite pass documented in September covered Phoenix.gov and Visionlearning. Natura11y already had its expanded ecosystem narrative; its role and card copy were refreshed. Cheetah.org, NYC OTI, LADRC, Mr. Ellie Pooh, and UNICEF received role and card-copy updates, not the same detailed narrative rewrite. Keep this distinction when reporting progress.

- Phoenix: main Confluence version 7 recorded the launch attribution as a paragraph before the video, with no duplicate caption. The video comes before Looking back. The separate [Phoenix revised draft](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24870914) was archived September 22 after consolidation; its history retains the earlier rewrite and image recommendations. [Phoenix Rovo notes](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/24838145) remain reference material.
- Visionlearning: the [main page](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/23429129) is the current synchronized working copy. The [earlier revised draft](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/25100290) is reference only. Preserve the hero, five body figures, blue themed backgrounds, periodic-table demonstration, and reflection in the website source.
- [Visionlearning Rovo source](https://avidanodigital-team.atlassian.net/wiki/spaces/CAU/pages/25886721): the original supplied transcript and correction notes were read again on September 27 and are retained in Confluence. The duplicate local transcript has been removed.
- **Timeline correction:** Visionlearning involved multiple redesigns over more than ten years. A single redesign did not take a decade. Connect Library, Glossary, Classroom, and the learning tools to their distinct uses. The CMS developer's adoption of Natura11y is a qualitative outcome; it is not proof of learning gains or accessibility conformance.

## Portfolio review checkpoints

This review was made September 21, with the Phoenix video follow-up on September 22. It covered the eight portfolio MDX files, representative figures, the rendered Phoenix case study and selected live Phoenix pages. It did not independently audit analytics, research records, or accessibility reports. Several copy and image errors below were corrected later, including Visionlearning's duplicated paragraph, mobile alt text, and caption typo. Check current sources before reopening any item. The suggestions are not a current task queue.

### Main opportunity

The portfolio documents substantial scope, identifiable responsibilities, and a wide range of artifacts. The most useful improvement is to connect selected evidence to a specific decision and then to what was delivered or learned. Some of that evidence is already inside the graphics, but the surrounding copy does not explain it.

Use a small number of readable examples. Large collages establish breadth, but the detailed text and interface states are difficult to inspect at page size, especially on a phone. Keep useful overview images and supplement selected ones with a close-up and an explanatory caption.

### Phoenix.gov

Source: [Phoenix case study](../src/content/portfolio/phoenix.mdx).

The role statement is clear: UX strategy, research, information architecture, tree testing, wireframes, and low-fidelity prototypes. The case also credits the broader Reingold team. The decision to separate services and topics from departments is particularly relevant evidence of UX judgment.

**Add a small amount of finished-site evidence.** The opening composite contains a finished homepage, but the body concentrates on research and wireframes. Pair the payment-page wireframe with the current [Pay a Bill, Fine, or Fee page](https://www.phoenix.gov/residents/pay-bill.html). Both organize access around a resident task; the current page brings together city-service bills, traffic fines, and other payments. Explain the relationship without implying that the final screen exactly reproduces the wireframe. A navigation comparison could be a second example if it adds a distinct point.

Keep the wireframes central to the account of Carl's work. Label live captures with their capture date and credit final visual design and development to the appropriate team once the precise attribution is confirmed. A September 2026 capture is evidence of the current implementation, not automatically the March 2025 launch design. No need to defend visual choices Carl did not own.

**Explain one research finding in the prose.** The existing `PHX-tree-testing-ppt.png` records 92 participants. Its homelessness-assistance task shows 68% overall success and recommends moving Homeless Solutions into Housing or cross-linking the sections. This is more informative than the current general statement that testing helped refine the sitemap. It supports a finding and recommendation; it does not establish a later improvement in task success. Confirm the actual subsequent decision before describing it as implemented because of that test.

**Clarify outcome evidence.** The 37% to 57% download statement needs a definition of the percentage, comparison period, and source. The WCAG AA claim needs its version, scope, and assessment basis. The sentence saying mobile prototypes “confirmed” effectiveness needs the relevant validation evidence or more limited wording. These are requests for context, not findings that the claims are false.

The City's [March 19, 2025 employee newsletter](https://www.phoenix.gov/content/dam/phoenix/commsite/documents/phx-connect/PHXConnect-March-19-2025.pdf) announced the March 24 launch, consistent with the case study. A City overview report also surfaced in search, but its full PDF could not be fetched by the web tool; this review does not treat it as verification of all portfolio metrics.

On September 22, the video link was extracted directly from page 2 of that newsletter: [Upcoming phoenix.gov sneak peek](https://www.youtube.com/watch?v=bNropFe0m0M), published by CityofPhoenixAZ. Carl approved embedding it near the end of the case study, before Looking back. The local case study and main Confluence copy now include it with City attribution; the original upload remains hosted on YouTube.

### Visionlearning

Source: [Visionlearning case study](../src/content/portfolio/visionlearning.mdx).

The case demonstrates unusually broad ownership: identity, bilingual templates, front-end work, interactive learning features, and scientific illustration. The interactive-features graphic already shows glossary highlights, science-standard annotations, and the Periodic Table.

The missing explanation is how one interaction solves a particular learning or teaching problem. A close-up of the glossary interaction could explain why the definition remains beside the reading, how the reader controls it, and how the same pattern works on mobile or in Spanish. Confirm the actual design rationale rather than inventing it from the screenshot.

The mobile and interactive-feature sections currently repeat the same paragraph verbatim. The mobile section could instead explain the bilingual or small-screen decisions visible in its own image. The claim that the redesign reduces cognitive load needs supporting evaluation or wording that describes the design intent.

### Natura11y

Source: [Natura11y case study](../src/content/portfolio/natura11y.mdx).

This already explains the shared ecosystem and includes an architecture diagram, HTML/React examples, Storybook, Figma kits, documentation, templates, and client use. More ecosystem overview imagery would repeat what is present.

The useful addition is one component decision followed through design, behavior, testing, documentation, and release. Use a real example already discussed in the Drawing Board and link to the deeper article. Explain the constraint and why the chosen approach works across the supported environments. Include the verified accessibility behavior or test evidence relevant to that example.

The “months to days” statement needs a concrete, comparable example or qualification as a personal estimate. The case would also benefit from distinguishing what is personally maintained from any documented contribution or adoption by others. Do not invent community scale or team governance.

### Cheetah Conservation Fund

Source: [CCF case study](../src/content/portfolio/cheetah-conservation-fund.mdx).

The case shows an actual delivered website, a recognizable logo transformation, mobile layouts, and the Kids identity. The role statement includes WordPress authoring tools, and the results include donation and volunteer-application measures.

The main gap is the connection between those results and the work shown. Expand one supported example: a donation pathway, the volunteer application, or a staff authoring workflow. Identify what changed and show the relevant screen rather than adding another general website montage.

The five metrics need their source and measurement period. Define “accuracy” for volunteer applications and “engagement” for the 3x figure. A client report can be an appropriate source when attributed clearly; it does not by itself establish that design caused every change.

Keep the June 2019 launch distinct from the current CCF design-system work. Any later update should have its own date and scope so readers can assess which work the screenshots and results describe.

### NYC OTI

Source: [NYC OTI case study](../src/content/portfolio/nyc-oti.mdx).

The four-project overview establishes breadth across public services and internal tools. Roles are described within each project. The most promising deeper examples already have specific material: MFTA's stalled delivery and manual donation process, or DoRIS's conditional record-ordering forms.

Develop one of those into a short, complete account within the page or a dedicated case study. For DoRIS, show one actual branching decision, its form state, and how the design helped people understand requirements or fees. For MFTA, explain a verified workflow or delivery decision that helped move the project forward. The current screenshots show the interfaces but do not explain these decisions.

Add project dates and distinguish shipped functionality from measured improvements. Claims about easier use or faster delivery need supporting evidence or narrower language. For management roles, a real example of coordinating people or resolving competing requirements would add information beyond the current list of responsibilities.

### LADRC

Source: [LADRC case study](../src/content/portfolio/ladrc.mdx).

This already contains a clear research-to-design example: participants struggled to find mobile search, leading to a recommendation to separate search and menu controls. The mobile wireframe visibly demonstrates that recommendation. Preserve and emphasize it.

The main gap is what happened after the recommendations. Clarify which were accepted, implemented, or tested again, if those records exist. The Results section currently describes the recommendations' intended value rather than reporting a measured post-launch change. Research and recommendations are a valid project outcome; do not imply a launch or follow-up study that did not happen.

A readable view of the original search problem beside the proposed controls would be useful if the original evidence is available. Add participant context and one actual tree-test finding where supported. The reflection's “validated recommendations” phrase should identify what validation took place.

### Mr. Ellie Pooh

Source: [Mr. Ellie Pooh case study](../src/content/portfolio/mr-ellie-pooh.mdx).

The photography, artisan story, and product catalog give this case a distinctive identity. The finished layouts already show retail and wholesale entry points, product categories, and product details. The 10x sales result is explicitly attributed to the client, which should be retained.

The case needs more explanation of the shopping problem: how retail and wholesale needs differed, what the Shopify implementation changed, and which design choice helped the customer complete a purchase. A selected catalog-to-product or wholesale flow would add more than another general site screenshot. Use whichever flow Carl actually owned and can document.

Add the comparison period and clarify whether the reported 10x increase refers to online sales, total sales, orders, or revenue. The claim that photography increased trust should be supported or presented as the reason for investing in better photography.

### UNICEF

Source: [UNICEF case study](../src/content/portfolio/unicef.mdx).

The sole UX/front-end role is clearly stated. The phases, Dublin workshop, dashboard, and wireframe collection show substantial systems work. The existing wireframe image contains many screens, but it is difficult to follow a single interaction through that montage.

Select one actual content-review, approval, or toolkit-management flow. Identify the participating roles, show a few readable states, and explain a verified decision about permissions, status, or handoff. This would make the systems thinking easier to evaluate.

Add dates for the project phases. The $300M+ result already has a 2010–2016 period; it still needs a source and a clear explanation of what “supported” means. Preserve the distinction between platform use and revenue caused by the design. An internal application does not need a public live link to demonstrate delivery.

### Concrete content and accessibility cleanup

- Phoenix has eight informative body figures with empty alt text. Its header/footer wireframe image incorrectly describes CCF layouts.
- All five LADRC body figures have empty alt text. Several findings are available only visually in the graphics. Add an appropriate text explanation as well as useful image descriptions; a short alt cannot carry an entire research deck.
- Visionlearning's mobile image incorrectly describes Mr. Ellie Pooh. Its mobile and interactive-feature paragraphs are duplicated, and the scientific-illustration caption has a stray apostrophe.
- CCF reuses “CCF logo before redesign” for the redesigned logo, Kids logo, and custom-font example. These need distinct descriptions.
- Add compact, factual dates and delivery status where missing. Preserve the role statements already present instead of inserting another generic responsibilities section.

### Suggested order

1. Correct the concrete copy and image-description errors.
2. Strengthen Phoenix with the existing tree-test finding and one wireframe-to-current-site comparison.
3. Add one complete component decision to Natura11y, using the Drawing Board as supporting detail.
4. Deepen one NYC workflow or Visionlearning interaction according to the roles being targeted.
5. Gather sources and definitions for the outcome claims across the portfolio, then revise only what those records support.

For UX management applications, also surface one documented example of guiding other designers or resolving stakeholder priorities. The portfolio states leadership responsibilities, but currently provides limited detail about how that leadership operated. This is a presentation opportunity, not a conclusion about Carl's management experience.

## Visionlearning research and confirmed account

Research was recorded September 21–22. Repository behavior and live-page findings below describe that inspection, not a fresh verification. Carl has already answered the origin, audience, information architecture, ownership, client-requested tools, and framework-adoption questions; do not ask him to repeat those answers.

### Sources reviewed

- Current portfolio copy: `src/content/portfolio/visionlearning.mdx`.
- Local front-end repository: `/Users/carlavidano/Sites/visionlearning`, `main` at `1cae46c`, read only.
- Repository README, component documentation, source JavaScript and Sass, Jekyll layouts, HTML examples, and selected commit history.
- Existing portfolio graphics showing glossary/NGSS annotations, the Periodic Table, and Spanish mobile screens.
- Public Visionlearning homepage, Library, Interactive Animations listing, Chemical Equations module, Discovery and Structure of Cells module, and The Periodic Table of Elements I module.
- Carl's firsthand account of the strategy, ten-plus-year engagement, front-end ownership, custom tools, scientific visuals, and CMS developer's adoption of Natura11y.

### What the repository supports

| Evidence | Useful case-study material | Source |
| --- | --- | --- |
| Readers can enable glossary highlighting and display a definition in an annotation panel, with a separate link to the glossary. | Explain the choice to make reference information available within the reading. Confirm the original problem and rationale with Carl. | `src/js/customJS/reading-toggles.js:93`, `_docs/reading-annotations.md` |
| NGSS annotations display standards-related information; the implementation turns off glossary highlighting when NGSS highlighting is enabled, and vice versa. | A concrete example of accommodating different reading and teaching tasks. Ask why the modes were mutually exclusive. | `src/js/customJS/reading-toggles.js:68`, `:157` |
| The module layout combines reading, quiz/teaching navigation, audio, and tools; desktop tools sit beside the reading, and the templates include mobile toggle tabs. | Show one responsive reading interaction rather than repeating a feature list. | `_layouts/module.html:154`, `src/scss/customSCSS/_module.scss:23` |
| A custom audio player implements playback, seeking, volume, and arrow-key controls. Quiz and checkpoint examples reveal responses to selected answers. | Explain the options built into the learning experience. Code alone does not establish accessibility conformance or improved learning. | `src/js/customJS/audio-player.js`, `src/js/customJS/quiz.js`, `_includes/comprehension-checkpoint.html` |
| The Periodic Table example loads element data from JSON and populates a detail dialog. The portfolio graphic also shows Table View and Search and List controls. | Potential focused example of turning scientific information into an exploratory tool. Confirm shipped scope: the local example still includes sample content. | `html/periodic-table.html:1654`, `html/_json/periodic-table.json`, portfolio interactive-features graphic |
| Reusable styles, layouts, and component documentation cover modules, figures, math, audio, and annotations. | Evidence of a front-end system and implementation guidance. Ask how this was handed off and whether it changed maintenance or content production. | `src/scss`, `_layouts`, `_docs` |
| The repository contains classroom/course creation and module-management templates, including placeholder links. | Ask whether this work belongs in the case study and what reached production. Do not describe backend course management as delivered based on these files. | `classroom/create-course.html`, `classroom/course/add-modules.html`, `classroom/course/edit-modules.html` |
| The Spanish mobile graphic shows translated navigation, a module quiz, glossary definition, pronunciation control, and mathematical notation. | Explain actual bilingual/mobile design decisions. The graphic does not establish translation ownership or equal availability of all features in both languages. | `src/images/visionlearning/visionlearning-mobile-spanish.png` in the portfolio repository |

### Timeline clues, not launch dates

- Repository history begins March 25, 2021 (`5a9003a`). This is not necessarily the start of the client engagement.
- NGSS and glossary-toggle work is visible in January–February 2022; subsequent revisions continue across later years.
- The README describes the front-end stack for the 2023 redesign.
- Periodic Table work appears March–June 2024, including the HTML example and JSON data.
- July 29, 2025 (`a68ceed`) expands the NGSS summary to multiple dimensions. Template comments refer to feedback and implementation guidance, but do not establish who initiated the feature or when it shipped.
- July 24, 2026 (`1cae46c`) updates the global-header template.

Some documentation is incomplete or stale. In particular, the reading-toggle update entry repeats the interactive-animation announcement, and several documentation pages contain placeholders. Use source implementation and specific commits where they conflict; confirm production behavior separately before describing it as live.

### Carl's account: the original problem

Provided September 21, 2026 in response to the first interview question:

- The existing website was outdated and non-responsive, at a time when responsive websites were becoming expected.
- The logo looked old, and the organization lacked a developed visual identity.
- The information architecture was unclear: users encountered many links leading to more links, making the site confusing to navigate.
- The intended audience was unclear. It was difficult to tell whether the site was for teachers, students, or both.

This account supports framing the challenge around identity, information architecture, audience clarity, and responsive access. Do not imply these observations came from a formal usability study unless Carl confirms that research.

### Carl's account: strategy, ownership, and outcomes

Provided September 21, 2026 in follow-up messages:

- We created a sitemap with Library, Glossary, and Classroom as three main areas with distinct purposes.
- Plain language positioned the site as an online learning space for science educators and students.
- The Library separated Learning Modules, Interactive Animations, and Research Videos. Modules formed most of the content and could be searched or browsed by discipline from the homepage and Library.
- Glossary highlighting and NGSS annotations were specific client requests. Carl designed custom interfaces and wrote the front-end behavior for them.
- Carl shaped the design through multiple iterations over more than ten years, built the front end, and worked directly with the backend developer.
- The platform moved onto Natura11y. The developer responsible for the backend CMS subsequently used Natura11y for the teacher-facing interface. This is a firsthand qualitative outcome demonstrating another developer's adoption of the framework; it does not mean Natura11y implements server-side CMS logic.
- Scientific visual work included fully custom illustrations, smaller diagrams, and selected high-resolution imagery combined with scientific concepts. Carl describes hundreds of images across the site; the draft describes the breadth without publishing an independently unverified count or attributing every image to him.
- Accessible math and the interactive periodic table deserve explicit coverage. Carl emphasized that the periodic table is a standout example.
- Carl requested a full rewrite following the revised Phoenix case study, to review with ROVO and combine the useful parts of both drafts.

### Live-site findings and claim boundaries

- [Homepage](https://www.visionlearning.com/en/) and [Library](https://www.visionlearning.com/en/library/): confirm the Library / Glossary / Classroom navigation, their short purpose labels, and the three Library content types. The homepage explicitly identifies educators and students as audiences.
- [Chemical Equations](https://www.visionlearning.com/en/library/Chemistry/1/Chemical-Equations/268/): browser inspection found 42 rendered MathJax containers and 42 assistive MathML nodes. The equation structure includes operators and subscripts. This supports describing structured mathematical markup; it is not a screen-reader test or a conformance assessment.
- `_docs/math.md` documents inline and display TeX input, chemical formulas, and MathJax setup. Its headings sometimes call the TeX input MathML; the draft avoids repeating that terminology error. MathJax produces the assistive MathML observed on the live page.
- [Discovery and Structure of Cells](https://www.visionlearning.com/en/library/Biology/2/Discovery-and-Structure-of-Cells/64/) includes the animal-cell, plant-cell, and RNA/DNA figures represented in the portfolio collage. The live credits name Visionlearning, not an individual illustrator. Carl's account establishes his contribution.
- The local Periodic Table implementation supports data-driven element detail dialogs. The existing portfolio graphic shows Table View and Search and List. The reviewed live Periodic Table I module still uses a static figure and links to a different, older animation; this review did not independently locate or test the newer table in production. The draft describes the interface Carl created without adding a launch date or claims about learning outcomes.
- The repository includes older copied Natura11y sources. It is historical evidence for this case study, not current design-system integration guidance. No dependencies or implementation in that repository were changed.

Still useful for a later pass: one example of feedback that changed a tool, the precise math accessibility testing performed, and an example of how an illustration was reviewed for scientific accuracy. None is required to describe the verified work in this first draft.

### MathJax examples for a possible figure

Reviewed on the live website September 22, 2026. These are candidates for discussion; no new figure or case-study claim has been added.

- **Recommended first: [Unit Conversion — Dimensional Analysis](https://www.visionlearning.com/en/library/Math-in-Science/49/Unit-Conversion/144/#toc_1).** Worked examples show stacked fractions and diagonal cancellation marks on units, including converting dozens to individual eggs and calculating a fuel purchase from gallons and a price per gallon. The following section converts kilometers per hour to miles per hour. Live DOM: eight MathJax containers and eight assistive MathML nodes, including `mfrac` and `menclose` with `updiagonalstrike`. A crop of a worked calculation and its explanation would make the typography's instructional purpose visible.
- **[Chemical Equations — Writing chemistry in shorthand](https://www.visionlearning.com/en/library/Chemistry/1/Chemical-Equations/268/#toc_1).** The iron oxidation equation combines coefficients, chemical subscripts, and a reaction arrow. The later balancing section builds the equation step by step. Live DOM: 42 MathJax containers and 42 assistive MathML nodes. A useful second example because it shows scientific notation beyond conventional algebra.
- **[Wave Mathematics — Plotting a basic sine wave](https://www.visionlearning.com/en/library/Math-in-Science/62/Wave-Mathematics/131/#toc_3).** Sine equations are presented alongside wave graphs; the next section includes the period equation with pi and a fraction. Live DOM: six MathJax containers and six assistive MathML nodes. A useful visual alternative when pairing notation with a diagram.
- **[Exponential Equations I — Sample problem 1](https://www.visionlearning.com/en/library/Math-in-Science/62/Exponential-Equations-I/206/#toc_4).** A worked growth example uses powers through a table of calculations; Sample problem 2 applies exponential growth to reindeer population data. Live DOM: 23 MathJax containers and 23 assistive MathML nodes. Some other expressions on this page are ordinary text rather than MathJax, so choose a verified rendered example for a figure.

The markup inspection confirms the use of MathJax and structured math support. It does not establish how accurately a particular browser and screen reader announce every formula, or prove accessibility conformance. Existing scientific content belongs to the credited module authors; Carl's case-study claim concerns interface and rendering implementation.

#### Larger display equations

Carl clarified that he was looking for larger equations. [Introduction to Descriptive Statistics](https://www.visionlearning.com/en/library/Math-in-Science/62/Introduction-to-Descriptive-Statistics/218/) is a stronger match than the initial simple examples. Browser inspection confirmed 19 MathJax containers. The standard-deviation calculations in `#toc2_5` and the worked solutions in `#toc2_6` span the reading column; the normal-distribution formula in `#toc_5` combines a radical, nested fractions, Greek symbols, and an exponential term.

Check the scientific notation before selecting a figure: the live standard-deviation equation puts division by the number of values outside the square root, while its own instructions say to calculate the mean of the squared deviations and then take the square root. The displayed normal-distribution prefactor also places an unsquared sigma inside the radical. These are observations of the current source/rendering, not errors introduced by the portfolio draft. No source formulas were edited.
