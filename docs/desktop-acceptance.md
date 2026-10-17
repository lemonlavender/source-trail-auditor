# Desktop acceptance

## Environment

- Application: iPolloWork 0.50.20
- Platform: macOS 15.5 arm64
- Project: AI 热点交付验收 2026-09-14 (`ws_ae06a808c439`)
- Engine: OpenCode
- Package: `source-trail-auditor-1.0.0.ipollowork-plugin`
- Session: `ses_eb5d9d18effeyrpYTf6Llz5J7S`

## Installation

- The native file importer accepted the `.ipollowork-plugin` package.
- Preview showed publisher `lemonlavender`, version `1.0.0`, one Skill, zero agents, zero commands, and zero MCP servers.
- The declarative safety check passed.
- Installation completed with the plugin and `source-trail-auditor` Skill enabled.

## Invocation

The acceptance task asked the installed Skill to audit `source-trail-auditor-packet.md`, load both references, preserve S1–S3 and C1–C5, produce all ten sections, avoid browsing, and save `source-trail-auditor-acceptance.md`.

iPolloWork displayed the Skill load and reads of `claim-rules.md` and `report-format.md`. The model read the packet, wrote the report, and checked the required sections and IDs. The saved output contains all ten sections, all source and claim IDs, a `not-ready` verdict, excerpt-only access limits, three evidence tables, and a decision-ordered verification route.

## Lifecycle checks

- Disable/re-enable: passed; the Skill switch changed to off and back to on.
- Project data: the acceptance input and output remained in the dedicated project.
- Same-version update: not attempted because version 1.0.0 is immutable.
- Uninstall/reinstall: not performed to avoid destructive removal of a successfully installed global plugin.

## Boundary

This run validates native file import, manifest preview, installation, resource enablement, loading both installed references, a real OpenCode model invocation, file creation, report invariants, and disable/re-enable. It does not validate live URL opening, Google Search integration, Windows, Linux, other engines, or legal/factual correctness of external sources.
