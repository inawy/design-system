---
name: arabic-rtl-ux
description: Use when implementing or reviewing Arabic interfaces, right-to-left layouts, mixed Arabic and Latin content, localization, typography, or bidirectional text in Nawy products.
metadata:
  author: nawy
  version: "1.0.0"
---
# Arabic and RTL UX

## Workflow
1. Inspect document language, direction, font loading, design tokens, layout primitives, and current localization approach.
2. Set language and direction at the document or correct component boundary. Arabic interfaces should use Arabic language metadata and RTL direction; English interfaces should use LTR.
3. Prefer CSS logical properties over hard-coded left/right. Avoid mirroring the DOM or applying transforms to reverse the whole interface.
4. Distinguish directional icons (back, forward, previous, next) from non-directional icons. Mirror only when meaning requires it.
5. Use approved Nawy typography and tokens. Cairo is the default Arabic font in the shared system; verify the target project actually loads it before reporting that it does.
6. Handle mixed scripts carefully: use appropriate direction for email addresses, URLs, codes, numbers, and user-entered text; use automatic direction where content is unknown.
7. Test Arabic and English content, long labels, punctuation, numerals, dates, currency, forms, empty states, validation messages, and truncation.
8. Verify layout at narrow mobile and desktop widths, including drawers, menus, tabs, dialogs, tables, and swipe affordances.
9. Check keyboard navigation, focus order, screen-reader labels, text scaling, and contrast in both directions.

## Nawy-specific guardrails
- Do not translate product names or fixed product copy without checking product facts.
- Do not assume right-aligning every text node creates a correct RTL interface.
- Do not reverse chronological order, progress direction, charts, or numeric values unless product semantics require it.
- Avoid hard-coded Arabic glyphs as layout hacks. Use the project's typography and icon systems.

## Reporting
List languages and directions tested, device widths, components checked, and unresolved bidi or typography issues. Do not claim full localization or accessibility from a visual glance.
