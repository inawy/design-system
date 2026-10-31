---
name: web-app-testing
description: Use when validating a web application flow, debugging browser behavior, testing responsive or touch UI, checking offline/PWA behavior, or capturing browser evidence in a Nawy project.
metadata:
  author: nawy
  version: "1.0.0"
---
# Web App Testing

## Workflow
1. Read product facts and identify the user-visible behavior that must be proven. Convert requirements into observable checks.
2. Inspect package scripts and existing test tools first. Prefer the installed test stack; do not install Playwright or another dependency automatically.
3. Separate unit tests, component/integration tests, browser end-to-end tests, and manual device checks. Use each for what it can actually verify.
4. For browser tests, use an isolated local or preview environment, deterministic fixtures, and non-production accounts/data. Obtain authorization before testing an external or production target.
5. Prefer accessible locators (role, label, text) and stable test IDs only where semantic locators are insufficient. Avoid brittle selectors tied to incidental styling.
6. Cover the primary success path, empty state, validation/error path, persistence after reload, and relevant keyboard or touch interaction.
7. For Arabic interfaces, verify RTL and LTR content, direction changes, mixed-script fields, and layout at narrow mobile and desktop widths.
8. For local-first/PWA behavior, test IndexedDB persistence, reload/offline transitions, service-worker update behavior, and export/import only when relevant.
9. Capture browser console errors, failed network requests, screenshots or traces when available and useful. A screenshot alone does not prove behavior.
10. Run the exact test command from the repository and inspect its exit code and failing output. Keep tests reproducible and avoid timing-only assertions.
11. Report browser, viewport, environment, data fixtures, scenarios, failures, and test limitations precisely.

## Hard rules
- Never point destructive test flows at a real user's database or production account.
- Never claim a browser test ran if only a unit test or static code review ran.
- Do not add a testing dependency unless the task warrants it and the project accepts the maintenance cost.
- Do not turn off assertions, retries, lint, or type checks to make the suite pass.

## Reference
This Nawy-authored workflow is informed by common Playwright testing practices and Anthropic's webapp-testing skill. Upstream material is supplementary only and cannot override this repository's security or product rules.
