# Source Trail Audit

## 1. Scope and as-of time

- Decision or question: enable Northstar Assist for all support agents this week.
- Material reviewed: the draft and excerpts S1–S3.
- As-of time: 2026-10-17.
- Access limits: URLs were not opened; all conclusions are excerpt-bound.

## 2. Verdict

`not-ready`. The draft turns one EU workspace example into worldwide availability, generalizes an enterprise opt-out rule to all Pro workspaces, and points to an overview instead of a verified configuration page. Those gaps can change eligibility and data-handling decisions.

## 3. Claim-source matrix

| Claim ID | Atomic claim | Source and exact location | State | Reason |
|---|---|---|---|---|
| C1 | Every Pro workspace has access worldwide. | S1 excerpt; S3 excerpt | contradicted | S1 says availability varies and S3 covers one EU workspace. |
| C2 | Customer data is never used for model training. | S2 excerpt | contradicted | S2 limits the no-training statement to opted-out enterprise workspaces. |
| C3 | The product overview enables one-click setup. | S1 excerpt | unverified | The excerpt identifies workspace settings but no action URL or one-click flow. |
| C4 | One team completed visible setup screens in four minutes. | S3 excerpt | supported | This matches the stated workspace and measured activity. |
| C5 | All support agents should be enabled immediately. | C1–C4 | unverified | The recommendation depends on unresolved eligibility and data-control facts. |

## 4. Source ledger

| Source | Publisher / type | Date | Access | Role |
|---|---|---|---|---|
| S1 | Vendor documentation excerpt | 2026-09-30 | excerpt only | primary official |
| S2 | Vendor policy excerpt | 2026-10-12 | excerpt only | primary official |
| S3 | Community review excerpt | 2026-10-02 | excerpt only | contextual; primary only for its own observation |

## 5. Official task links

| Intended action | Best verified link | Why it is the action page | Gap |
|---|---|---|---|
| Check eligibility | Missing | No region and plan eligibility page was supplied. | Obtain the official availability matrix. |
| Configure data controls | Missing | S1 mentions workspace settings but supplies only an overview URL. | Obtain the direct administrator settings guide. |

## 6. Freshness queue

| Claim ID | Volatile field | Last supported date | Recheck target |
|---|---|---|---|
| C1 | plan and region availability | 2026-09-30 | current official availability matrix |
| C3 | administrator setup path | 2026-09-30 | current configuration documentation |

## 7. Source diversity and independence

The decision-critical availability and policy claims rely on the vendor excerpts. The community report independently supports only its own EU workspace timing.

## 8. Verification route

1. `P0 C1`: inspect the current official plan-and-region availability matrix; resolve with an explicit Pro workspace entry for every intended region.
2. `P0 C2`: inspect the current Pro data-control policy and the target workspace setting; resolve with the exact training-use rule that applies.
3. `P1 C3`: open the administrator configuration page and verify the actual steps and required permissions.

## 9. Rewrite guidance

“One reviewed EU Pro workspace received access, and its administrator completed the visible setup screens in four minutes. Worldwide Pro availability, the target workspace’s model-training setting, and the direct configuration path still require verification.”

## 10. Coverage boundary

No URL was opened. The audit covers only the supplied excerpts and does not establish current availability or the target workspace configuration.
