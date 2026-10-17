# Source Trail Auditor

[中文说明](README.zh-CN.md)

Source Trail Auditor is a reusable Skill for editors, analysts, researchers, product teams, and developers who need to review an AI-assisted web research draft before acting on it. It converts prose and links into an atomic claim map, checks what each source actually supports, separates official action pages from background reading, and produces a short route for resolving the gaps that matter most.

It supports [iPolloWork](https://github.com/Devin-AXIS/iPolloWork) through a declarative `.ipollowork-plugin` package. It does not require a local service, credential, or external runtime.

## Problems it solves

AI-assisted research often contains plausible statements beside relevant links, while leaving several practical questions unanswered: does the page directly support the sentence, is its scope narrower than the draft, is the claim still current, and is the link the page where a user can complete the stated task? Source Trail Auditor makes those relationships explicit without treating link count or an official domain as proof.

## Suitable use cases

- Review a linked product comparison before purchase or rollout.
- Check a policy, compliance, or market brief for claim-level traceability.
- Audit an AI-generated answer whose current facts may have changed.
- Find the official setup, download, pricing, policy, or status page behind a recommendation.
- Turn unresolved research gaps into a prioritized verification checklist.

## Implemented capabilities

- Splits checkable prose into atomic claim IDs.
- Classifies checked evidence as `supported`, `partial`, `contradicted`, or `unverified`.
- Records source publisher, page type, date, access state, and claim-specific role.
- Separates official task links from overview and contextual pages.
- Flags volatile claims that need an as-of date or current recheck.
- Detects repeated claims that ultimately depend on the same origin.
- Produces `P0`–`P2` verification steps and bounded rewrite guidance.
- Works from supplied excerpts when browsing is unavailable and states that limitation in the output.

## Workflow

1. Provide a research draft, cited URLs or excerpts, the decision it informs, and an as-of time.
2. Ask the model to use `source-trail-auditor`.
3. The Skill creates atomic claims and a source ledger.
4. When browsing is available, it opens the cited pages. Otherwise it limits conclusions to the supplied excerpts.
5. It maps each claim to exact evidence and checks scope, time, and source independence.
6. It identifies direct official pages for the actions named in the draft.
7. It returns a decision verdict, evidence tables, freshness queue, verification route, and rewrite guidance.

## Inputs and outputs

### Inputs

- A draft answer, memo, research brief, or recommendation.
- Its cited URLs, page excerpts, or attached source files.
- The decision or question the research must support.
- An as-of time when current facts matter.

### Output

A Markdown audit with ten sections: scope, verdict, claim-source matrix, source ledger, official task links, freshness queue, source independence, verification route, rewrite guidance, and coverage boundary.

## End-to-end example

The included [research packet](examples/research-packet.md) asks whether a fictional team should enable an assistant for every support agent. The draft overstates worldwide availability, broadens an enterprise privacy rule to every plan, and links to a product overview instead of a configuration page.

Invoke the Skill with:

```text
Use source-trail-auditor to audit examples/research-packet.md as of 2026-10-17. Preserve every factual claim and produce the complete report.
```

The expected result is [examples/expected-audit.md](examples/expected-audit.md): a `not-ready` verdict, five atomic claims, two contradicted claims, missing official task links, and three prioritized verification steps.

## Use in iPolloWork

1. Download `source-trail-auditor-1.0.0.ipollowork-plugin` from the GitHub Release.
2. Open iPolloWork and go to **Extensions → Plugins → Add → File**.
3. Select the downloaded package and review the publisher, version, and single Skill resource.
4. Choose **Install Plugin**, confirm the plugin and `source-trail-auditor` Skill are enabled, and reload the project if prompted.
5. Add your draft and source material to the project.
6. Start a task such as: `Use source-trail-auditor to audit <file> as of <date> and save the complete Markdown report.`
7. Confirm the result contains a claim-source matrix, official task links, a freshness queue, and a coverage boundary. Export or save the Markdown file from the project.

For the standalone Skill archive, unzip `source-trail-auditor-1.0.0-skill.zip` and import the contained `source-trail-auditor` folder from the local Skill page.

## Build and package

Requirements: Node.js 20+ and the system `zip` command.

```bash
npm test
npm run package
```

The build creates the iPolloWork installer, standalone Skill ZIP, source ZIP, and `SHA256SUMS.txt` in `dist/`. Archives are assembled from clean staging directories with normalized timestamps.

## Tested environment

- Package format: iPolloWork schema version 2, untrusted declarative Skill package.
- Desktop: iPolloWork 0.50.20 on macOS 15.5 arm64, using the OpenCode engine.
- Desktop acceptance: recorded in [docs/desktop-acceptance.md](docs/desktop-acceptance.md).
- Automated tests cover evidence states, official task-link handling, temporal checks, report structure, manifest safety, archive layout, and bilingual documentation.

## Functional limits

- The Skill cannot prove content from a URL it cannot open; it marks excerpt-only and unavailable material explicitly.
- It does not guarantee that a source is true, unbiased, complete, or independent merely because the page is official.
- It does not make the underlying business, legal, medical, financial, or security decision.
- Current product availability and policies still require direct checks against the relevant authoritative page.

## FAQ

### Does it search the web automatically?

It uses browsing only when the host provides it and the task permits it. Without browsing, it audits supplied excerpts and reports which URLs remain unopened.

### Why can an official page still be insufficient?

Authority is claim-specific. A product landing page may be official while failing to support a price, current rollout, policy, or exact configuration path.

### Does more than one source prove a claim?

No. Several pages may repeat the same unsupported statement or trace to one origin. The report records direct support and source independence separately.

## License

MIT
