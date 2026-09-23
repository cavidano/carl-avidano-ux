# BNY: requirements and portfolio evidence

Working editorial notes, not published copy. Carl approved the four-project selection on September 22, 2026 and publishing the BNY microsite on September 23. The approved site is now live at `https://carlavidano.com/bny/`; all 22 BNY pages and the tailored résumé download were verified after deployment.

## Target position

- Director, Product Design; Fund and Investor Solutions; New York.
- Job ID 82305; posting supplied by Carl, dated September 18, 2026.
- The description also calls the position Senior Product Designer. Its responsibilities emphasize hands-on interaction design, complex workflows, systems thinking, collaboration, and mentorship.
- The supplied description says prior domain expertise matters less than learning new domains and applying strong design principles. Do not imply Carl has financial-services experience without evidence.

The original posting is [Director, Product Design — BNY Careers, job 82305](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/BNY-Careers/job/82305). Recovered from Carl's recent browser history and verified against the employer page on September 22, 2026. The page matches the supplied role, Fund and Investor Solutions team, New York location, and September 18 posting date.

The supplied job description is retained in [job-posting.txt](job-posting.txt). These reference files are not served as web pages.

## Application handoff — September 22, 2026

The BNY application was completed and submitted with Carl on September 23, 2026. The latest status below supersedes the historical preparation notes; no reminder or automatic follow-up is scheduled.

### Latest application status — September 23, 2026

- **Submitted successfully.** After Carl explicitly approved final submission and the e-signature statement, BNY displayed “Thank you for your job application.” The candidate profile lists Director, Product Design, job **82305**, under Active Job Applications with status **Application Received** and “Applied on 09/23/2026.” Do not submit a duplicate application.
- Both final PDFs are now uploaded and their filenames were verified in Supporting Documents and URLs. Carl requested consistent, clean filenames: `carl-avidano-resume-bny.pdf` and `carl-avidano-cover-letter-bny.pdf`, both in `/Users/carlavidano/Projects/Job Applications/CVs/BNY/_PDF/`. Use these for the application; the earlier numbered résumé remains a local source copy.
- The résumé is unchanged and still matches the website download. The cover letter was re-exported after Carl's latest InDesign design change: one tagged page, 42,019 bytes, approved wording intact, and an explicit portfolio hyperlink. This replaces the earlier 38,945-byte cover-letter export.
- Browser uploads work by starting the file-chooser listener and pressing Enter on the upload control, then using the returned chooser's `setFiles`. Mouse activation had timed out. Upload completion was verified by the final filenames and Remove buttons.
- The employment timeline was corrected: Reingold ends in August 2026, Avidano Digital remains the current role with the Owner / Principal title, and the malformed duplicate was removed. Carl confirmed the pre-existing Avidano Digital and education month/year dates. NYC dates and the degree/institution were checked against the résumé.
- Carl corrected the conflicting screening selection himself, and the correction was verified before submission. Do not record sensitive screening or demographic responses here.

The session notes below preserve earlier progress; this status supersedes their attachment, timeline, and submission blockers.

### September 23 session

- The official posting still has Apply Now and the application flow opens for job 82305.
- Carl explicitly approved accepting the recruitment terms and proceeding with his email. The terms were accepted and the email submitted. Email verification is complete and the saved application is open on Personal Info; no application has been submitted. Do not store verification codes in this repository.
- A replacement cover-letter draft is in `cover-letter.md`. Carl requested emphasizing that he built Natura11y as an open-source design system and is its developer, rather than framing it as experience collaborating with other developers. Those revisions are applied in the draft. The Reingold paragraph now establishes the breadth of his UX Director role, including management, mentorship, and developer collaboration. Carl confirmed contributions to NFL and St. Jude Global projects and UX research leadership, including user journeys, for Maximus. The letter uses Maximus and Phoenix as concrete examples and includes Nebraska among the broader project work. Do not infer that he led every named engagement or invent details of the NFL work. Carl approved the revised letter on September 23. It has been placed in the tailored InDesign source and exported as a tagged, one-page PDF; text comparison matches the approved Markdown exactly and the layout and signature were visually checked.
- Both InDesign sources were checked. The original `Carl-Avidano-CV.indd` still shows the older letter; the tailored `Carl-Avidano-CV-BNY-82305.indd` is open on page 3 for the eventual approved replacement.
- Reviewed the exported cover letters for ACLU, ActBlue, AmEx, Code for America, Farther, Figma, and both Vanta versions. The revised Markdown now puts Reingold's broader research and leadership first, uses the NYC work to explain operational workflows and technical constraints, and adds Avidano Digital with UNICEF as a concrete example. Natura11y remains explicitly open source and Carl's own design and development work. The older letters supplied useful evidence, not wording to copy wholesale. The review is recorded in `cover-letter-review.md`; Carl subsequently approved this version, which is now saved in InDesign and exported.
- `npm run build`, `npm run check:site-links`, and `git diff --check` passed. All 22 BNY pages were checked; the source résumé, public asset, and built PDF match byte for byte. The live `/bny` URL still returns 404. Carl requested committing the current branch; merging and deployment have not been performed.
- The rejected portrait experiment under `output/imagegen/bny-portrait/` must not be included in the website publication.

### September 23 publication and application progress

- Carl explicitly approved merging, pushing, and deploying after automatic approval review requested a more specific publication authorization. The BNY branch was fast-forwarded into `main`, pushed, and deployed at commit `640a77297db95acba8a6a07eda533773510e6e3e`.
- GitHub Actions run `35841059912` completed successfully: `https://github.com/cavidano/carl-avidano-ux/actions/runs/35841059912`.
- Production verification: all 22 BNY pages returned HTTP 200 and retained `noindex`; the live résumé PDF is byte-for-byte identical to the approved 95,230-byte tailored résumé. The main homepage, About, and Drawing Board also returned HTTP 200.
- The application's portfolio URL was updated to `https://carlavidano.com/bny/`. Contact fields were completed from the existing profile and résumé, and the application advanced to step 2, Job Application Questions.
- The two older application attachments were removed in preparation for replacement. Both automated file-chooser attempts timed out, so the new résumé and cover letter are NOT yet uploaded. Native control of the Codex app is unavailable. The two approved PDFs remain safely in the BNY `_PDF` folder; use the upload controls manually or a supported browser upload path before submission.
- Carl was asked to complete step 2 directly because it requires his eligibility, compensation, regulatory/conflict, government-connection, and accommodation answers. Do not infer these answers or record sensitive responses in this repository. The application has NOT been submitted.

### Files and current status

- **Editable source:** `/Users/carlavidano/Projects/Job Applications/CVs/BNY/Carl-Avidano-CV-BNY-82305.indd`. Pages 1–2 are the résumé; page 3 is the cover letter. Saved September 23 with the approved cover letter. Carl also edits this document directly, so inspect its current contents before making changes. The adjacent IDML exchange file predates his latest edits; do not reopen it over the current InDesign document.
- **Submitted résumé PDF:** `/Users/carlavidano/Projects/Job Applications/CVs/BNY/_PDF/carl-avidano-resume-bny.pdf`. Two tagged pages, 95,230 bytes; layout and links checked. Byte-identical to the earlier numbered export and the website download. Preserve Carl's Senior Product Designer opening. Reingold employment ended August 31, 2026; the résumé displays August 2026.
- **Submitted cover-letter PDF:** `/Users/carlavidano/Projects/Job Applications/CVs/BNY/_PDF/carl-avidano-cover-letter-bny.pdf`. Approved September 23 and re-exported from page 3 of the tailored InDesign source after Carl's final design change. One page, tagged PDF, 42,019 bytes, with an explicit portfolio hyperlink. The extracted body matches `cover-letter.md` exactly. The approved letter includes the correct BNY role, broader Reingold research and leadership, NYC operational workflows, Avidano Digital and UNICEF, and ownership of the open-source Natura11y design system. The existing header, typography, and signature are preserved.
- **Website résumé copy:** `public/bny/resume-carl-avidano.pdf`, downloaded from `/bny/resume-carl-avidano.pdf`. It matches the tailored résumé export above byte for byte as of September 22. Verified the local BNY About button serves this file and the main About page serves its separate general résumé. New InDesign exports must also be copied into this website file.
- **Portfolio:** `https://carlavidano.com/bny/` is live and verified. Local preview remains `http://127.0.0.1:4321/bny`. The approved work from `codex/bny-microsite` is merged into `main`; the working checkout is on `main`.

### When Carl returns

The application is complete. If Carl requests a status check, inspect the existing job 82305 entry in My Applications. Keep the submitted PDFs above as the record of what BNY received; do not reapply or replace documents unless Carl requests it.

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
