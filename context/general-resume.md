# General résumé

## Current source and export — October 7, 2026

Carl asked to save the current general résumé and replace every website résumé download with it. Preserve this approved export and existing InDesign layout; this request does not authorize rewriting résumé copy. Separate employer application archives and submitted attachments remain unchanged.

- Saved InDesign source: `/Users/carlavidano/Projects/Job Applications/CVs/__Templates/Carl-Avidano-CV.indd`.
- Current general PDF: `/Users/carlavidano/Projects/Job Applications/CVs/__Templates/resume-carl-avidano.pdf`.
- Exported résumé pages 1–2 through InDesign after saving the open source. Two US Letter pages; 98,107 bytes.
- SHA-256: `5fc496affe4f005863397e20e8f5a14f5a6ae097d467ae90930c874c9ee2c424`.
- Contains Carl’s current overview, full early-career roles, UNICEF QA wording, and the Reingold contributions bullet naming NFL Players Community, South Carolina Department of Transportation, and VA REACH.
- Both pages rendered and visually inspected without clipping or overlapping text. InDesign preflight reports no errors. Text extraction and hyperlink targets checked; portfolio link points to `https://carlavidano.com`.
- PDF has tags, a structure tree, and `en-US` language. This is not a full PDF accessibility audit; existing heading style roles map to paragraphs.

## Website copies

All four independent PDF assets contain the same verified export:

- `public/resume-carl-avidano.pdf`
- `public/datadog/resume-carl-avidano.pdf`
- `public/accenture/resume-carl-avidano.pdf`
- `public/chromatic/resume-carl-avidano.pdf`

Keep existing scoped download URLs. Main and Datadog are published; Accenture and Chromatic remain drafts. Retired sites remain retired. Do not replace employer document archives or resubmit any application.

## Publication

Both builds passed from an isolated snapshot containing only this release: 25 tests, zero Astro diagnostics, and audits of 96 review pages and 54 production pages. All four review PDFs and both production PDFs match the source hash; scoped About download links are correct. Draft and retired sites are absent from production. Release `a401686665af13baa8a6bf883a128aa098ac7b7b` is live after [successful Cloudways run 37633783961](https://github.com/cavidano/carl-avidano-ux/actions/runs/37633783961). Both GitHub builds and deployment passed. The main and Datadog PDFs return HTTP 200, match the saved export byte-for-byte, and are linked from their About pages. Both homepages, both About pages, and both PDFs match the production artifact. Accenture and Chromatic assets are updated in the repository and review build; those sites remain drafts and are absent from production. Unrelated local edits were excluded. Verification files are in `output/general-resume-2026-10-07/`.
