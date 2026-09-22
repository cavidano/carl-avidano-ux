# Visionlearning case-study research

Reviewed September 21, 2026. Working notes for the next case-study revision; not publication copy.

## Agreed presentation

Use the approved Phoenix structure: Challenge, Solution, My role, and Results before the detailed process and figures; finish with Looking back. Results can describe delivered capabilities and supported qualitative outcomes. Do not invent statistics or imply measured improvements from the existence of a feature. Preserve Visionlearning's intentional colors, themed sections, and existing reflection while revising the narrative.

## Sources reviewed

- Current portfolio copy: `src/content/portfolio/visionlearning.mdx`.
- Local front-end repository: `/Users/carlavidano/Sites/visionlearning`, `main` at `1cae46c`, read only.
- Repository README, component documentation, source JavaScript and Sass, Jekyll layouts, HTML examples, and selected commit history.
- Existing portfolio graphics showing glossary/NGSS annotations, the Periodic Table, and Spanish mobile screens.
- Public Visionlearning homepage, Library, Interactive Animations listing, Chemical Equations module, Discovery and Structure of Cells module, and The Periodic Table of Elements I module.
- Carl's firsthand account of the strategy, ten-plus-year engagement, front-end ownership, custom tools, scientific visuals, and CMS developer's adoption of Natura11y.

## What the repository supports

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

## Timeline clues, not launch dates

- Repository history begins March 25, 2021 (`5a9003a`). This is not necessarily the start of the client engagement.
- NGSS and glossary-toggle work is visible in January–February 2022; subsequent revisions continue across later years.
- The README describes the front-end stack for the 2023 redesign.
- Periodic Table work appears March–June 2024, including the HTML example and JSON data.
- July 29, 2025 (`a68ceed`) expands the NGSS summary to multiple dimensions. Template comments refer to feedback and implementation guidance, but do not establish who initiated the feature or when it shipped.
- July 24, 2026 (`1cae46c`) updates the global-header template.

Some documentation is incomplete or stale. In particular, the reading-toggle update entry repeats the interactive-animation announcement, and several documentation pages contain placeholders. Use source implementation and specific commits where they conflict; confirm production behavior separately before describing it as live.

## Questions for Carl

Carl has now answered the origin, audience, information architecture, ownership, client-requested tools, and framework-adoption questions. The questions below record the original interview prompts; use the remaining gaps only when they would materially strengthen a later revision.

1. What brought you into Visionlearning, and what was the most important problem for students, teachers, or the organization at the time?
2. How did the glossary and NGSS reading tools come about? Why make them optional, and what feedback changed their design?
3. Who did you collaborate with, and how were responsibilities divided among UX, front-end work, backend integration, educational content, translation, and scientific accuracy?
4. What was the hardest mobile or bilingual design decision? One specific example would give the mobile figure a purpose beyond showing smaller screens.
5. What changed after the work was released? Examples could include a new teaching capability, a task people could now complete, client or educator feedback, or a maintenance improvement you directly observed. Which features shipped, and when?
6. Which scientific illustration best shows your process? What was difficult to explain, how did you simplify it, and who reviewed it for accuracy?

## Carl's account: the original problem

Provided September 21, 2026 in response to the first interview question:

- The existing website was outdated and non-responsive, at a time when responsive websites were becoming expected.
- The logo looked old, and the organization lacked a developed visual identity.
- The information architecture was unclear: users encountered many links leading to more links, making the site confusing to navigate.
- The intended audience was unclear. It was difficult to tell whether the site was for teachers, students, or both.

This account supports framing the challenge around identity, information architecture, audience clarity, and responsive access. Do not imply these observations came from a formal usability study unless Carl confirms that research.

## Carl's account: strategy, ownership, and outcomes

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

## Live-site findings and claim boundaries

- [Homepage](https://www.visionlearning.com/en/) and [Library](https://www.visionlearning.com/en/library/): confirm the Library / Glossary / Classroom navigation, their short purpose labels, and the three Library content types. The homepage explicitly identifies educators and students as audiences.
- [Chemical Equations](https://www.visionlearning.com/en/library/Chemistry/1/Chemical-Equations/268/): browser inspection found 42 rendered MathJax containers and 42 assistive MathML nodes. The equation structure includes operators and subscripts. This supports describing structured mathematical markup; it is not a screen-reader test or a conformance assessment.
- `_docs/math.md` documents inline and display TeX input, chemical formulas, and MathJax setup. Its headings sometimes call the TeX input MathML; the draft avoids repeating that terminology error. MathJax produces the assistive MathML observed on the live page.
- [Discovery and Structure of Cells](https://www.visionlearning.com/en/library/Biology/2/Discovery-and-Structure-of-Cells/64/) includes the animal-cell, plant-cell, and RNA/DNA figures represented in the portfolio collage. The live credits name Visionlearning, not an individual illustrator. Carl's account establishes his contribution.
- The local Periodic Table implementation supports data-driven element detail dialogs. The existing portfolio graphic shows Table View and Search and List. The reviewed live Periodic Table I module still uses a static figure and links to a different, older animation; this review did not independently locate or test the newer table in production. The draft describes the interface Carl created without adding a launch date or claims about learning outcomes.
- The repository includes older copied Natura11y sources. It is historical evidence for this case study, not current design-system integration guidance. No dependencies or implementation in that repository were changed.

Still useful for a later pass: one example of feedback that changed a tool, the precise math accessibility testing performed, and an example of how an illustration was reviewed for scientific accuracy. None is required to describe the verified work in this first draft.

## Editorial issues to resolve in the draft

- Mobile learning experience and Interactive learning features currently repeat the same paragraph.
- The mobile image's alt text incorrectly names Mr. Ellie Pooh.
- The scientific-illustration caption has a stray apostrophe.
- The current Results claim that the redesign reduces cognitive load is not substantiated by this repository review. Ask for evaluation evidence or describe the design intention and observable behavior instead.
- Separate the initial redesign from later feature improvements, and distinguish existing educational content from capabilities Carl introduced or redesigned.

## First rewrite

The first rewrite is applied to the local portfolio's `src/content/portfolio/visionlearning.mdx` on `codex/case-study-rework`. It uses the shared Overview and role option, puts Challenge, Solution, and Results before the process, and retains all five body figures, the hero, and both original blue figure backgrounds. The original reflection is retained with a short paragraph about sustained involvement. The duplicated paragraph, incorrect mobile alt text, and caption typo are corrected.

The original copy is recoverable from Git and also saved at `/private/tmp/visionlearning-case-study-rework/visionlearning-original.mdx`. No changes were made to the Visionlearning source repository or either public website. Confluence review-copy details are recorded in `docs/CASE-STUDIES.md`.

Verification: Astro check passed with 0 errors, warnings, or hints. All six local images loaded successfully; both blue figure backgrounds remain `rgb(76, 170, 217)`. The page was reviewed at desktop and 390px phone widths, with no horizontal overflow. The Confluence review copy was read back and matched to the prepared text and six image URLs.

## MathJax examples for a possible figure

Reviewed on the live website September 22, 2026. These are candidates for discussion; no new figure or case-study claim has been added.

- **Recommended first: [Unit Conversion — Dimensional Analysis](https://www.visionlearning.com/en/library/Math-in-Science/49/Unit-Conversion/144/#toc_1).** Worked examples show stacked fractions and diagonal cancellation marks on units, including converting dozens to individual eggs and calculating a fuel purchase from gallons and a price per gallon. The following section converts kilometers per hour to miles per hour. Live DOM: eight MathJax containers and eight assistive MathML nodes, including `mfrac` and `menclose` with `updiagonalstrike`. A crop of a worked calculation and its explanation would make the typography's instructional purpose visible.
- **[Chemical Equations — Writing chemistry in shorthand](https://www.visionlearning.com/en/library/Chemistry/1/Chemical-Equations/268/#toc_1).** The iron oxidation equation combines coefficients, chemical subscripts, and a reaction arrow. The later balancing section builds the equation step by step. Live DOM: 42 MathJax containers and 42 assistive MathML nodes. A useful second example because it shows scientific notation beyond conventional algebra.
- **[Wave Mathematics — Plotting a basic sine wave](https://www.visionlearning.com/en/library/Math-in-Science/62/Wave-Mathematics/131/#toc_3).** Sine equations are presented alongside wave graphs; the next section includes the period equation with pi and a fraction. Live DOM: six MathJax containers and six assistive MathML nodes. A useful visual alternative when pairing notation with a diagram.
- **[Exponential Equations I — Sample problem 1](https://www.visionlearning.com/en/library/Math-in-Science/62/Exponential-Equations-I/206/#toc_4).** A worked growth example uses powers through a table of calculations; Sample problem 2 applies exponential growth to reindeer population data. Live DOM: 23 MathJax containers and 23 assistive MathML nodes. Some other expressions on this page are ordinary text rather than MathJax, so choose a verified rendered example for a figure.

The markup inspection confirms the use of MathJax and structured math support. It does not establish how accurately a particular browser and screen reader announce every formula, or prove accessibility conformance. Existing scientific content belongs to the credited module authors; Carl's case-study claim concerns interface and rendering implementation.

### Larger display equations

Carl clarified that he was looking for larger equations. [Introduction to Descriptive Statistics](https://www.visionlearning.com/en/library/Math-in-Science/62/Introduction-to-Descriptive-Statistics/218/) is a stronger match than the initial simple examples. Browser inspection confirmed 19 MathJax containers. The standard-deviation calculations in `#toc2_5` and the worked solutions in `#toc2_6` span the reading column; the normal-distribution formula in `#toc_5` combines a radical, nested fractions, Greek symbols, and an exponential term.

Check the scientific notation before selecting a figure: the live standard-deviation equation puts division by the number of values outside the square root, while its own instructions say to calculate the mean of the squared deviations and then take the square root. The displayed normal-distribution prefactor also places an unsquared sigma inside the radical. These are observations of the current source/rendering, not errors introduced by the portfolio draft. No source formulas were edited.

## ROVO revision and role clarification — September 22

Carl clarified that there were multiple redesigns over more than ten years, supporting the organization’s growing needs. Do not describe the engagement as one decade-long redesign. The local metadata, role, solution, results, and reflection now make the distinction explicit. The [separate ROVO source record](visionlearning-rovo-summary.md) preserves the supplied transcript and editorial corrections.

The shared sidebar is now “My role,” with a simple paragraph about Carl's contribution through Avidano Digital. Project background belongs in the Challenge. Confluence version 5 contains the updated copy, verified after saving. The transcript and timeline correction are saved on child page 25886721. See CASE-STUDIES.md for links and current review status.

## Pass following Phoenix structure approval — September 22

The next local pass retains Challenge, Solution, and Results before the process, My role in the shared sidebar, and Looking back at the end. The copy more clearly separates the initial website work from later redesigns and explains the tasks supported by the glossary, NGSS annotations, periodic table, and mathematical notation. Results emphasize delivered capabilities and the CMS developer's adoption of Natura11y. The hero, five body figures, captions, image descriptions, widths, themed wrappers, and colors are unchanged.

The local text was verified in the rendered preview and synchronized with Confluence review-copy version 6; the saved paragraphs, headings, captions, and image references were read back and compared. This remains a local and Confluence draft, with no public deployment. One optional follow-up question asks for a specific example of feedback that changed a tool or mobile design; no such feedback has been invented in the draft.
