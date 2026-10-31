---
name: vercel-composition-patterns
description: Use when designing reusable React component APIs, reducing boolean prop combinations, separating UI from state, or building compound components.
license: MIT
metadata:
  author: Vercel Engineering
  upstream_version: "1.0.0"
  upstream_commit: "1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62"
---
# Vercel Composition Patterns — Nawy Adapter

## Workflow
1. Confirm the actual React version and inspect the existing component API and call sites.
2. Read UPSTREAM-SKILL.md and UPSTREAM-REFERENCE.md in this directory.
3. Prefer composition when a component has many interacting boolean props, duplicated modes, or unclear responsibilities.
4. Consider compound components, provider boundaries, explicit variants, children composition, and a stable state/actions interface where they solve a real problem.
5. Do not refactor a small stable component solely to match a pattern. Keep simple components simple.
6. Use React 19-only APIs only when the project actually uses React 19 or later and its tooling supports them.
7. Add tests for each supported composition and confirm no behavior or accessibility regression.

## Nawy guardrails
- Prefer explicit component APIs that are easy to maintain and reason about.
- Avoid adding a state library or context provider when ordinary props and local state are enough.
- Keep business rules and persistence out of presentation-only components.
- Do not introduce abstraction that increases complexity without reducing duplication or coupling.

## Source and license
The upstream skill and compiled reference below are copied from Vercel's official agent-skills repository. The upstream skill declares MIT. See THIRD-PARTY-NOTICES.md and the pinned source metadata in agent-skills.sources.json.
