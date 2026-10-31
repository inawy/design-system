---
name: local-first-engineering
description: Use when designing or changing storage, offline behavior, persistence, data ownership, or optional synchronization in a Nawy product.
metadata:
  author: nawy
  version: "1.0.0"
---
# Local-first Engineering

## Workflow
1. Inspect the actual persistence layer, schema, data flow, and storage adapters before proposing a design. IndexedDB, Cache Storage, localStorage, and remote APIs are not interchangeable.
2. Confirm data ownership and offline requirements from verified product facts. Do not assume a backend, account, cloud sync, or analytics service is wanted.
3. Keep the local device as the source of truth when the product decision says local-first. Network services must not silently become the only copy of user data.
4. Put persistence behind repositories or services. Keep UI components from opening databases directly or duplicating query logic.
5. Define explicit loading, empty, unavailable-storage, quota, read-error, write-error, and recovery states.
6. For sync, define identity, conflict policy, deletion/tombstone behavior, retry strategy, idempotency, and offline queue semantics before implementation. Sync is optional.
7. Treat export/import and backup as recovery paths where user data matters. Validate imported data and preserve a safe restore path.
8. Test reload persistence, offline operation, multiple tabs where relevant, storage failures, and browser restart. Verify with the real storage adapter rather than mocks alone.
9. Document which data remains on-device, which data leaves the device, and the exact conditions under which that happens.

## Nawy-specific guardrails
- Do not claim data survives cache clearing without verifying its storage location and testing that flow.
- Do not equate PWA caching with user-data backup.
- Do not add server-side storage, cloud sync, sign-in, telemetry, or third-party integrations unless explicitly required.
- Do not claim encryption at rest or end-to-end encryption unless implemented and independently verified.
- Prefer the smallest existing storage abstraction; do not add another database or state library for convenience.

## Verification evidence
Report the storage technology and database name as read from the code, schema/version changes, offline tests run, export/import tests run, and browser-specific limitations.
