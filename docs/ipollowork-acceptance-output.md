# Source-trail audit: Northstar Assist

## 1. Scope and as-of time

- Decision or question: Decide whether a team should enable Northstar Assist for all support agents this week.
- Material reviewed: `source-trail-auditor-packet.md`, including draft claims C1-C5 and supplied excerpts S1-S3.
- As-of time: 2026-10-17.
- Access limits: The URLs were not opened. This audit relies only on the supplied excerpts; cited URLs remain unverified beyond those excerpts.

## 2. Verdict

**not-ready**. The packet does not establish worldwide availability for every Pro workspace, the claimed universal exclusion of customer data from model training, or one-click activation from the product page. The only setup evidence is one EU Pro workspace completing visible screens in four minutes, which is insufficient to support enabling the product for all support agents this week.

## 3. Claim-source matrix

| Claim ID | Atomic claim | Source and exact location | State | Reason |
|---|---|---|---|---|
| C1 | Northstar Assist is available to every Pro workspace worldwide. | S1, “Northstar Assist helps Pro teams draft responses. Regional availability varies.” | `contradicted` | S1 addresses the same product and says regional availability varies, which is incompatible with an unqualified worldwide-availability claim. It does not establish the current scope of availability by region. |
| C2 | Northstar Assist keeps customer data out of model training for all customers/plans. | S2, “Customer content from opted-out enterprise workspaces is not used to train shared models. Other plans follow the workspace data-control selection.” | `partial` | The excerpt supports a narrower condition: opted-out enterprise workspaces, plus plan-dependent workspace selection. It does not support an unconditional claim for all customer data. |
| C3 | Northstar Assist can be enabled from the product page in one click. | S1, “Administrators can review data controls in workspace settings.” | `unverified` | The supplied excerpt points to workspace settings for data controls but gives no activation path, one-click behavior, or product-page instruction. |
| C4 | Setup takes less than five minutes. | S3, “Our EU Pro workspace received access. An administrator completed the visible setup screens in four minutes.” | `partial` | S3 reports one community reviewer’s experience in one EU Pro workspace and only the visible setup screens. It does not establish a general setup time for all workspaces or agents. |
| C5 | The team should enable Northstar Assist for all support agents immediately/this week. | Recommendation based on C1-C4; no supplied passage directly recommends universal enablement. | `unverified` | This is a recommendation, not a source-established fact. Its premises include unsupported or only partially supported availability, data-control, activation, and setup claims, so the supplied evidence does not justify the recommendation. |

## 4. Source ledger

| Source | Publisher / type | Date | Access | Role |
|---|---|---|---|---|
| S1 — `https://docs.example.test/northstar` | Northstar documentation / product overview | Updated 2026-09-30 | Excerpt-only; URL not opened | Primary official, but the excerpt is not an activation or availability-detail page |
| S2 — `https://docs.example.test/privacy/northstar` | Northstar privacy policy | Updated 2026-10-12 | Excerpt-only; URL not opened | Primary official |
| S3 — `https://community.example.test/northstar-setup` | Community setup review | Published 2026-10-02 | Excerpt-only; URL not opened | Contextual; firsthand report for one workspace, not official product evidence |

## 5. Official task links

| Intended action | Best verified link | Why it is the action page | Gap |
|---|---|---|---|
| Configure / enable Northstar Assist | None verified from supplied material | S1 mentions workspace settings for data controls, but does not identify an enablement page or URL. | Need the official administrator setup or workspace-settings page and its current activation steps. |
| Review data controls | `https://docs.example.test/privacy/northstar` (S2) | It is identified as the Northstar privacy policy and addresses training use and workspace data-control selection. | The excerpt does not show the complete control semantics or UI path. |
| Check regional availability / eligibility | None verified from supplied material | S1 explicitly says regional availability varies but supplies no eligibility matrix or status page. | Need the official availability/eligibility page for the team’s region and Pro workspace. |

## 6. Freshness queue

| Claim ID | Volatile field | Last supported date | Recheck target |
|---|---|---|---|
| C1 | Regional availability and Pro-workspace eligibility | 2026-09-30 (S1 only says availability varies) | Official current availability or eligibility documentation for the team’s region and workspace, checked as of 2026-10-17. |
| C2 | Training-data treatment by plan and workspace data-control selection | 2026-10-12 (S2) | Current privacy/data-controls policy, including the exact setting and its effect for the team’s plan. |
| C3 | Activation location and number of steps | No supporting date; S1 updated 2026-09-30 only mentions settings | Current administrator setup/workspace-settings instructions. |
| C4 | Setup duration and scope of access | 2026-10-02 (S3) | Current official setup flow and, if timing matters, representative timing for the team’s workspace and agent population. |

## 7. Source diversity and independence

S1 and S2 are separate official pages from the same `docs.example.test` origin, so they should not be treated as independent corroboration of availability or data handling. S3 is independent community commentary, but it is limited to one EU Pro workspace and one administrator’s visible setup screens. The decision-critical claims C1 and C2 are not supported by independent evidence: C1 is contradicted by the official excerpt, while C2 is supported only for a narrower condition than the draft states. C3 has no supporting source, and C4 relies only on the single community experience.

## 8. Verification route

- **P0 — C1:** Inspect the official current regional-availability/eligibility page or administrator documentation for the team’s region, Pro plan, and workspace. Resolution: a passage or matrix explicitly confirms or denies eligibility for every relevant support-agent workspace; do not treat “regional availability varies” as universal access.
- **P0 — C2:** Inspect the complete official privacy policy and workspace data-control documentation for the team’s plan. Resolution: the policy explicitly states whether customer content is excluded from shared-model training under the selected control, including any enterprise-only or opt-out limitation.
- **P1 — C3:** Inspect the official administrator setup or workspace-settings action page. Resolution: the page identifies the enablement location and confirms the actual number of required actions; otherwise rewrite the claim without “product page” or “one click.”
- **P1 — C4:** Inspect the official setup flow for the target workspace and compare it with the community report. Resolution: the target workspace’s required steps and access state are known; the four-minute anecdote is not generalized without representative evidence.
- **P2 — C5:** Reassess the enablement recommendation after C1-C4 are resolved, including a bounded rollout or pilot if availability, controls, or setup differ by workspace. Resolution: a decision owner can tie the recommendation to verified scope, controls, and operational steps.

## 9. Rewrite guidance

- **C1:** “Northstar Assist helps Pro teams draft responses, but regional availability varies; confirm eligibility for the team’s Pro workspace before enabling it.”
- **C2:** “The supplied privacy excerpt says customer content from opted-out enterprise workspaces is not used to train shared models; other plans follow the workspace data-control selection. Confirm the team’s applicable setting before making a broader data-use claim.”
- **C3:** “The supplied material does not verify where or how many steps are required to enable Northstar Assist; S1 only says administrators can review data controls in workspace settings.”
- **C4:** “A community reviewer reported that an administrator completed visible setup screens in four minutes for one EU Pro workspace; this is not a general setup-time guarantee.”
- **C5:** “Do not enable Northstar Assist for all support agents yet on this packet alone. First verify workspace eligibility, the applicable data-control behavior, and the official activation flow.”

## 10. Coverage boundary

No URLs were opened. S1, S2, and S3 were assessed as excerpt-only material supplied in the packet; S1 and S2 are official-source excerpts and S3 is a community excerpt. Conclusions about C1-C5 remain bounded by those excerpts: C1 is contradicted as drafted, C2 and C4 are partial, and C3 and C5 are unverified. No conclusion is made about facts omitted from the excerpts, current UI behavior, complete regional eligibility, or the full privacy-policy terms.
