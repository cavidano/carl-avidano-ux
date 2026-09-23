# BNY: requirements and portfolio evidence

Working editorial notes, not published copy. The BNY homepage and four selected case studies now have local application drafts. Carl approved the four-project selection on September 22, 2026 and asked us to establish the structure and overall story before collecting more detailed examples. Carl approved publishing the BNY microsite on September 23; deployment verification is pending.

## Target position

- Director, Product Design; Fund and Investor Solutions; New York.
- Job ID 82305; posting supplied by Carl, dated September 18, 2026.
- The description also calls the position Senior Product Designer. Its responsibilities emphasize hands-on interaction design, complex workflows, systems thinking, collaboration, and mentorship.
- The supplied description says prior domain expertise matters less than learning new domains and applying strong design principles. Do not imply Carl has financial-services experience without evidence.

The original posting is [Director, Product Design — BNY Careers, job 82305](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/BNY-Careers/job/82305). Recovered from Carl's recent browser history and verified against the employer page on September 22, 2026. The page matches the supplied role, Fund and Investor Solutions team, New York location, and September 18 posting date.

The supplied job description is retained in [job-posting.txt](job-posting.txt). These reference files are not served as web pages.

## Application handoff — September 22, 2026

Carl plans to return and complete the BNY website application together. No application has been submitted in this task. Resume from this note when he returns; no reminder or automatic submission is scheduled.

### September 23 session

- The official posting still has Apply Now and the application flow opens for job 82305.
- Carl explicitly approved accepting the recruitment terms and proceeding with his email. The terms were accepted and the email submitted. Email verification is complete and the saved application is open on Personal Info; no application has been submitted. Do not store verification codes in this repository.
- A replacement cover-letter draft is in `cover-letter.md`. Carl requested emphasizing that he built Natura11y as an open-source design system and is its developer, rather than framing it as experience collaborating with other developers. Those revisions are applied in the draft. The Reingold paragraph now establishes the breadth of his UX Director role, including management, mentorship, and developer collaboration. Carl confirmed contributions to NFL and St. Jude Global projects and UX research leadership, including user journeys, for Maximus. The letter uses Maximus and Phoenix as concrete examples and includes Nebraska among the broader project work. Do not infer that he led every named engagement or invent details of the NFL work. Carl approved the revised letter on September 23. It has been placed in the tailored InDesign source and exported as a tagged, one-page PDF; text comparison matches the approved Markdown exactly and the layout and signature were visually checked.
- Both InDesign sources were checked. The original `Carl-Avidano-CV.indd` still shows the older letter; the tailored `Carl-Avidano-CV-BNY-82305.indd` is open on page 3 for the eventual approved replacement.
- Reviewed the exported cover letters for ACLU, ActBlue, AmEx, Code for America, Farther, Figma, and both Vanta versions. The revised Markdown now puts Reingold's broader research and leadership first, uses the NYC work to explain operational workflows and technical constraints, and adds Avidano Digital with UNICEF as a concrete example. Natura11y remains explicitly open source and Carl's own design and development work. The older letters supplied useful evidence, not wording to copy wholesale. The review is recorded in `cover-letter-review.md`; Carl subsequently approved this version, which is now saved in InDesign and exported.
- `npm run build`, `npm run check:site-links`, and `git diff --check` passed. All 22 BNY pages were checked; the source résumé, public asset, and built PDF match byte for byte. The live `/bny` URL still returns 404. Carl requested committing the current branch; merging and deployment have not been performed.
- The rejected portrait experiment under `output/imagegen/bny-portrait/` must not be included in the website publication.

### Files and current status

- **Editable source:** `/Users/carlavidano/Projects/Job Applications/CVs/BNY/Carl-Avidano-CV-BNY-82305.indd`. Pages 1–2 are the résumé; page 3 is the cover letter. Saved September 23 with the approved cover letter. Carl also edits this document directly, so inspect its current contents before making changes. The adjacent IDML exchange file predates his latest edits; do not reopen it over the current InDesign document.
- **Tailored résumé PDF:** `/Users/carlavidano/Projects/Job Applications/CVs/BNY/_PDF/carl-avidano-resume-bny-82305.pdf`. Revised and exported as two pages; layout and links checked. Preserve Carl's Senior Product Designer opening. Reingold employment ended August 31, 2026; the résumé displays August 2026.
- **Current cover-letter PDF:** `/Users/carlavidano/Projects/Job Applications/CVs/BNY/_PDF/carl-avidano-cover-letter.pdf`. Approved September 23 and exported from page 3 of the tailored InDesign source. One page, tagged PDF, 38,945 bytes. The extracted body matches `cover-letter.md` exactly. The approved letter includes the correct BNY role, broader Reingold research and leadership, NYC operational workflows, Avidano Digital and UNICEF, and ownership of the open-source Natura11y design system. The existing header, typography, and signature are preserved. Carl requested proceeding with the application using this letter and the tailored résumé.
- **Website résumé copy:** `public/bny/resume-carl-avidano.pdf`, downloaded from `/bny/resume-carl-avidano.pdf`. It matches the tailored résumé export above byte for byte as of September 22. Verified the local BNY About button serves this file and the main About page serves its separate general résumé. New InDesign exports must also be copied into this website file.
- **Portfolio:** local preview `http://127.0.0.1:4321/bny`; intended public URL `https://carlavidano.com/bny`. Work is tracked on `codex/bny-microsite`. The résumé already links to the intended public URL, so complete and verify publication with Carl's authorization before submitting the application.

### When Carl returns

1. Open the official job 82305 link above and check that it is still accepting applications.
2. Finish and review the cover letter with Carl, save the current InDesign source, and export page 3 to the cover-letter PDF. Keep résumé exports limited to pages 1–2.
3. Confirm the tailored résumé is still current and that the BNY portfolio and download are live before using their public URLs in the application.
4. Help Carl fill out the employer's application using these files and verified work history. Ask him for any required answers not already supplied; do not infer personal eligibility or other sensitive answers. Review the completed application with him before the final submission, and handle any account or legal confirmations at the point they appear.

## Applying Jared's guidance

Follow [the workshop reference](../../../docs/references/jared-spool-ux-portfolio-2026.md), especially pages 13–14: respond to the actual job bullets through relevant work, Carl's contribution, and the judgment behind decisions. A broad skills list cannot substitute for concrete evidence.

The examples below are grounded in the current local case studies, the relevant Confluence pages reviewed for this pass, and Carl's account. The BNY variants are separate drafts; the approved main-site case studies and their Confluence pages remain unchanged. The portfolio does not yet answer every requirement in detail.

| BNY requirement | Evidence already in the portfolio | What a tailored version should make explicit |
| --- | --- | --- |
| User-centered design informed by research | Phoenix: stakeholder interviews, personas, user stories, and tree testing with 92 residents | The homelessness task had 68% overall success and prompted a recommendation to connect Homeless Solutions with Housing. Do not claim a measured improvement or an implemented change beyond the evidence |
| End-to-end journeys across customers, operations, and servicing teams | NYC OTI: Materials for the Arts donation workflows across donors, participants, staff, and warehouse volunteers; UNICEF approval and reporting workflows | A concrete journey across roles. Workflow diagrams and sitemaps should not be relabeled as journey maps without confirming the work |
| Complex interfaces, navigation, and interaction models | NYC OTI: vital-record ordering, conditional forms, and PoleTop Manager dashboards/maps; Natura11y flyout and nested navigation | The user task, difficult interaction choice, alternatives, and final behavior. Link a prototype or working example when available |
| Figma/Miro, high-fidelity design, prototypes, and specifications | Natura11y Figma kits; Phoenix sitemap and wireframes in Miro; NYC and UNICEF interface designs and wireframes | The drafts explain how these artifacts connect structure, interaction, stakeholder review, and implementation. Do not infer tools for other projects |
| Reusable workflow patterns and a global design system | Natura11y: shared Core, React, icons, Figma libraries, documentation, and examples adopted across projects | How one pattern carried across design and implementation, and what maintaining it required |
| Distilling complex requirements into understandable systems | PoleTop Manager infrastructure workflows; DoRIS eligibility/document collection; UNICEF country-office dashboard | A specific requirement or constraint and the design choice that made it manageable |
| Cross-functional collaboration and technical constraints | MFTA work with the project manager and agency staff; DoRIS pairing with a React developer; UNICEF workshop with stakeholders and developers | One tradeoff or disagreement Carl resolved and how the team reached a workable decision |
| Explaining rationale and aligning stakeholders | Phoenix iterative wireframing and stakeholder reviews; UNICEF Dublin workshop and subsequent flows | The rationale Carl communicated and the decision it enabled, supported by an artifact if possible |
| Mentoring junior designers and elevating team standards | Carl confirmed that he managed and mentored several designers as UX Director at Reingold | Included in the Phoenix role paragraph as a Reingold responsibility. A concrete example is deferred: whom he supported, his feedback or practice, and what changed. Do not assume all mentees worked on Phoenix |

## Approved selection and current emphasis

1. **NYC OTI:** public and administrative workflows, conditional forms, and interfaces for agency operations. Its opening now follows the same Challenge, Solution, Results, and My role structure as the other three.
2. **UNICEF:** a global platform spanning resource discovery, content management, approvals, and reporting; collaboration with stakeholders and developers across phases.
3. **Natura11y:** creating and maintaining reusable patterns across Figma, Core, React, Icons, Storybook, and documentation, with evidence of use by another developer.
4. **Phoenix:** user research, information architecture, iterative wireframing, and stakeholder review across more than 40 departments.

Each case-study card and hero introduces its relevant contribution. Detailed sections and the existing figures support that opening. All four retain project colors and media. The related-case-study introduction describes the capabilities demonstrated rather than merely saying the selection was curated.

## Curated Drawing Board articles

The BNY homepage features three articles, ordered for this application independently of their publication dates:

- **AI-ready monorepo:** shared styles, documentation, and Figma guidance show how Carl maintains a consistent system and supplies context for AI-assisted development.
- **Menu components:** flyout and nested navigation show interaction patterns for deeper content structures, with shared behavior and keyboard support.
- **Contrast themes:** specific component states, keyboard focus, and accessibility checks show the implementation judgment behind usable interfaces.

Each is marked `isFeatured: true` with a `sortOrder` in the BNY article frontmatter. Carl approved keeping the full Drawing Board available through navigation while curating only the homepage. All published articles have BNY routes and appear newest first in the full listing and tags. Related case-study articles use the full published collection. The article text, media, and dates remain intact. The homepage keeps its focused introduction; the full Drawing Board uses its original broader description. The public site and its Confluence articles are unchanged.

## Deferred follow-up

Carl confirmed experience with government and development constraints but wants to provide concrete examples later. Do not interrupt the layout pass to ask again. When he is ready to refine the stories, ask for one cross-role workflow decision, one technical tradeoff, and one mentorship example. No specific tradeoff, feedback method, or mentoring outcome should be invented. Add outcomes only when supported; do not invent financial-domain knowledge, metrics, or tool experience.
