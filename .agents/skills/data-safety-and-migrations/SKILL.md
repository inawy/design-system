---
name: data-safety-and-migrations
description: Use when changing IndexedDB, Dexie schemas, persistent data models, migrations, imports, exports, backups, or data deletion in a Nawy project.
metadata:
  author: nawy
  version: "1.0.0"
---
# Data Safety and Migrations

## Workflow
1. Identify the database engine, database name, current schema version, migration history, data volume assumptions, and callers of affected tables or fields.
2. Determine whether the change is additive, compatible, or destructive. Write down the before-and-after data shape and what happens to old records.
3. Never edit a migration that may already have shipped. Add a new forward migration using the project's existing mechanism.
4. Make migrations deterministic, bounded in memory, and safe when optional or malformed legacy fields are encountered.
5. Use transactions for logically atomic multi-table changes. Preserve stable IDs and user-created timestamps unless an approved decision changes them.
6. Build a backup/export or recovery path before destructive transformations. Test restore against a representative pre-migration dataset.
7. Validate imported payloads at the trust boundary, enforce schema versions, reject malformed formats safely, and never overwrite existing user data silently.
8. Test fresh install, upgrades from supported schemas, partially populated records, empty database, failed migration, import, export, and recovery where supported.
9. Inspect the final diff for accidental database deletion, database-name changes, version regressions, and migrations that drop or reinterpret user data.

## Approval gates
- Get explicit approval before deleting or irreversibly transforming user data, changing a published migration, changing database identity, or running a destructive production migration.
- Never add a fallback that silently deletes and recreates the database to make an upgrade pass.
- Never claim rollback is available unless the migration and data recovery design actually support it.

## Reporting
List old and new schema versions, migration behavior, compatibility window, test datasets and actual outcomes. Separate an untested migration from a verified migration.
