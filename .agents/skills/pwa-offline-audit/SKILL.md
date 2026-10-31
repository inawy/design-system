---
name: pwa-offline-audit
description: Use when reviewing or changing PWA manifests, service workers, installability, caching, offline startup, update behavior, or background capabilities in a Nawy web app.
metadata:
  author: nawy
  version: "1.0.0"
---
# PWA and Offline Audit

## Workflow
1. Inspect the manifest, service worker registration, build output, caching strategy, app shell, route fallback, and deployment base path.
2. Confirm the expected offline contract from product facts. Separate installability, offline UI shell, offline data, background sync, and push notifications; these are different capabilities.
3. Audit cache keys and versioning. Ensure a release can update assets without trapping users on mixed old/new bundles.
4. Define behavior for first visit online, repeat visit offline, stale cache, failed asset request, service-worker update waiting, and deployment under a sub-path or custom domain.
5. Keep private user data out of shared caches by default. Do not cache authenticated/private API responses without a reviewed policy.
6. Verify durable user records are stored in the intended persistence layer. Cache eviction must not be confused with IndexedDB deletion or user backup.
7. Review install prompts, manifest icons, display mode, theme colors, and standalone navigation on supported browsers.
8. Test the production build: cold start online, reload offline, route navigation offline, update from an older version, and recovery after cache failure.
9. Inspect actual browser support before claiming background sync, periodic sync, push, or notification behavior.

## Nawy-specific guardrails
- Do not add push notifications or background behavior as a default.
- Do not claim full offline support if only static assets are cached.
- Do not remove or clear a user's database as a service-worker recovery strategy.
- Do not change service-worker cache names or scope blindly; inspect the deployed app path first.

## Reporting
Report manifest validation, service-worker scope, asset/data caching boundaries, browser/device coverage, offline scenarios actually tested, and unsupported platform features.
