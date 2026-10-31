---
name: vercel-react-best-practices
description: Use when writing, reviewing, or refactoring React components and data flows for rendering performance, client bundles, asynchronous work, or responsive interaction.
license: MIT
metadata:
  author: Vercel Engineering
  upstream_version: "1.0.0"
  upstream_commit: "1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62"
---
# Vercel React Best Practices — Nawy Adapter

## Workflow
1. Confirm the project uses React and inspect its installed React version, framework, bundler, rendering mode, and package scripts.
2. Read UPSTREAM-SKILL.md and UPSTREAM-REFERENCE.md in this directory before applying this skill.
3. Prioritize the highest-impact applicable areas: async waterfalls, unnecessary bundle cost, repeated data fetching, avoidable re-renders, and rendering work.
4. Apply only rules compatible with the actual project. Server Components, Next.js APIs, React 19 APIs, and optional libraries are not universal React rules.
5. Prefer measurement and a reproducible performance problem over speculative memoization or broad refactors.
6. Preserve user-visible behavior and local-first data ownership. Do not add dependencies merely because an upstream example uses one.
7. Run the project's typecheck, tests, production build, and relevant performance/browser checks. Compare before/after evidence when claiming an optimization.

## Nawy guardrails
- Never migrate a project to Next.js or another framework to apply a performance recommendation.
- Do not add SWR, better-all, or another package without a concrete need, compatibility review, and approval where required.
- Do not memoize everything. Follow React's current documentation and the project's React version.
- Avoid performance changes that degrade keyboard, touch, RTL, or vertical-scroll behavior.

## Source and license
The upstream skill and compiled reference below are copied from Vercel's official agent-skills repository. The upstream skill declares MIT. See THIRD-PARTY-NOTICES.md and the pinned source metadata in agent-skills.sources.json.
