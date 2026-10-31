# ADR 0004: Evidence-first AI Governance

- **Status:** Accepted
- **Date:** 2026-10-31

## Context

Coding agents can fill missing facts with plausible but unverified details, misreport checks, or perform risky actions when project boundaries are unclear.

## Decision

Adopt a layered governance model:
- Root `AGENTS.md` as project entry instructions.
- Task-specific Agent Skills under `.agents/skills/`, with standard `SKILL.md` manifests.
- Product facts, architecture, glossary and limitations as explicit references.
- ADRs as the record of accepted shared decisions.
- Human approval for destructive, irreversible, production and externally consequential actions.
- GitHub Actions as independent validation for repository governance and starter quality.
- Evidence-based task reports distinguishing tested, untested, assumed and unknown.

## Alternatives

- One very large prompt: rejected because it creates context bloat and is difficult to maintain.
- Rely only on model self-report: rejected because an agent's claim is not independent evidence.
- Allow autonomous production changes by default: rejected because of data-loss and external-impact risks.

## Consequences

- Instructions are concise and layered; specialized procedures live in Skills.
- Each coding agent must be configured to discover its supported instruction and skill locations.
- CI validates repository rules and the starter template but cannot guarantee defect-free software or prevent every model hallucination.
- Product repositories need their own product-specific facts, architecture docs and quality gates.
