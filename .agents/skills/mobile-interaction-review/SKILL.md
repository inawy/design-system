---
name: mobile-interaction-review
description: Use when implementing or reviewing touch gestures, swipes, drag-and-drop, scrolling, timers, mobile controls, responsive interactions, or animation performance in Nawy apps.
metadata:
  author: nawy
  version: "1.0.0"
---
# Mobile Interaction Review

## Workflow
1. Inspect the interaction on a small viewport and identify whether it uses pointer, touch, mouse, keyboard, or a gesture library.
2. Map gesture states and thresholds: start, direction lock, activation, cancellation, completion, and boundary behavior.
3. Preserve native vertical scrolling unless the feature explicitly owns that gesture. For horizontal swipes, establish intent before preventing default scrolling or capturing the pointer.
4. Use appropriate touch-action and pointer-capture behavior. Avoid global touchmove handlers, broad preventDefault calls, and passive-listener violations.
5. Keep controls usable by tap and keyboard when a gesture is an enhancement rather than the only way to act.
6. Check gesture conflicts between nested carousels, drawers, lists, tabs, and draggable content.
7. Measure work during pointer movement. Avoid repeated layout reads/writes, expensive React state updates, and high-cost animation on every event.
8. Respect reduced-motion preferences and provide visual feedback for active, cancelled, and completed gestures.
9. Test slow movement, diagonal movement, short flicks, long drags, edge boundaries, interrupted gestures, browser back/forward, and scrolling while a gesture is rejected.
10. Test on actual mobile browsers when possible. Desktop emulation alone is not proof of touch behavior.

## Nawy-specific guardrails
- Make swipe transitions responsive, but never sacrifice ordinary vertical scrolling.
- Do not add fullscreen behavior or hide browser chrome unless explicitly required by the product.
- Keep gesture UI discoverable and accessible; provide a non-gesture route to important actions.
- Do not introduce a gesture dependency when a small existing implementation is sufficient.

## Reporting
State the device/browser tested, interaction cases, scroll behavior, performance evidence, reduced-motion behavior, and untested hardware conditions.
