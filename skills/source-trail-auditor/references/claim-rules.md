# Claim and source rules

## Atomic claims

A claim is atomic when one source passage can support or refute it without also having to prove a second assertion. Split statements that combine availability, price, eligibility, performance, configuration, or dates.

## Support states

| State | Meaning |
|---|---|
| `supported` | The checked source directly entails the claim for the same subject, scope, and time. |
| `partial` | The source supports only part of the claim or uses a narrower scope. |
| `contradicted` | A checked source addresses the same scope and time and states an incompatible fact. |
| `unverified` | No checked source directly supports the claim, or the cited page was not accessible. |

Do not use `supported` merely because the source is official, the title resembles the claim, several pages repeat it, or a search result snippet contains similar words.

## Source roles

1. **Primary official:** product documentation, changelog, policy, status page, release, dataset, paper, or statement from the responsible organization.
2. **Authoritative secondary:** standards body, regulator, independent paper, or reporting with direct evidence.
3. **Contextual:** commentary, community posts, tutorials, aggregations, or examples that help interpretation but do not establish official product facts.
4. **Unknown:** provenance or authorship cannot be established from the supplied material.

Authority is claim-specific. A community benchmark may be primary evidence for its own measurements, while an official landing page may still be insufficient for a current pricing claim.

## Official task links

Classify an official link by the action it enables: configure, download, sign in, check status, review policy, inspect pricing, or read release notes. If a supplied official page does not enable the named action, mark the action link missing.

## Freshness

Flag claims about availability, price, supported regions, model names, limits, schedules, incidents, policies, or current UI when they lack an as-of time. Compare the source date with the claim's time window and add a concrete recheck target.

## Verification priority

Use `P0` for gaps that can reverse the decision, `P1` for gaps that can change scope or steps, and `P2` for contextual improvements. Within a priority, open the most direct primary source first.
