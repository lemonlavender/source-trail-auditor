---
name: source-trail-auditor
description: Use when auditing an AI-assisted web research draft, answer, brief, or recommendation that includes links or source excerpts and needs claim-level traceability, authority ranking, freshness checks, and a prioritized verification route.
---

# Source Trail Auditor

Turn a linked research draft into a claim-level evidence map. A link supports a claim only when its accessible content entails that claim; link count, domain reputation, and topical similarity are not substitutes for support.

## Inputs

Collect the draft, available URLs or excerpts, the decision the draft will inform, and the relevant as-of time. If any item is missing, continue with the supplied material and mark the limitation.

## Workflow

1. Split externally checkable statements into atomic claim IDs. Keep recommendations separate from their factual premises.
2. Build a source ledger. Record publisher, page type, publication or update date, access state, and whether the page is primary, authoritative secondary, contextual, or unknown.
3. Open the cited pages when browsing is available. Otherwise assess only provided excerpts and label unopened URLs as unverified.
4. Map each claim to exact source evidence using [references/claim-rules.md](references/claim-rules.md). Assign `supported`, `partial`, `contradicted`, or `unverified`; do not average multiple weak sources into direct support.
5. Identify official task links separately. An official product overview is not the action page for setup, download, policy, pricing, or status.
6. Check temporal fit. Flag volatile claims without an as-of date, sources older than the claim, and language that turns a limited rollout into universal availability.
7. Produce the report in [references/report-format.md](references/report-format.md). Order the verification route by decision impact, then by the smallest source-opening effort that can resolve the gap.

## Evidence boundaries

- Preserve uncertainty when a page cannot be opened or an excerpt omits the relevant passage.
- Use exact page titles, dates, URLs, and quoted fragments only when they are present in the material or observed directly.
- Treat search snippets, AI summaries, and link labels as discovery aids until the underlying page is checked.
- Mark a claim contradicted only when a source addresses the same scope and time window.
- Do not infer current availability from an announcement, changelog from a landing page, or user eligibility from general documentation.

## Output

Return a decision-ready Markdown audit with a verdict, claim-source matrix, official task links, freshness queue, verification route, and bounded rewrite guidance. End with the stated coverage limit so readers know which pages and claims were actually checked.
