---
name: privacy-security-review
description: Use when handling user data, authentication, secrets, network requests, permissions, third-party services, storage, encryption claims, or security-sensitive changes in a Nawy product.
metadata:
  author: nawy
  version: "1.0.0"
---
# Privacy and Security Review

## Workflow
1. Map the data involved: type, sensitivity, source, destination, retention, access paths, and whether it leaves the device.
2. Inspect actual code and configuration. Do not infer privacy behavior from marketing copy, UI labels, README text, or architecture intent.
3. Apply least privilege to permissions, API keys, OAuth scopes, database policies, and service credentials. Secrets must never ship in frontend bundles or VITE-prefixed variables.
4. Review input validation and output encoding at trust boundaries. Check DOM injection, unsafe HTML, URL handling, file imports, and cross-origin behavior.
5. Inspect authentication and authorization separately. A hidden UI control is not authorization; server-side operations must enforce access.
6. Review dependencies and external scripts for necessity, maintenance, license, supply-chain and data-exfiltration risks.
7. Check browser storage for sensitive data, XSS exposure, retention and deletion behavior. Do not promise encryption merely because IndexedDB or a cloud provider uses encrypted disks.
8. Review backups, exports and sync for unintended disclosure and accidental overwrite. Encrypt exports only when a defined, tested key-management design exists.
9. Review logs, analytics and crash reports for personal data and tokens. Minimize collected data and redact sensitive values.
10. For material changes, document threats, mitigations, residual risk, and what was not tested. Escalate high-impact or uncertain findings.

## Nawy-specific guardrails
- Privacy-first does not mean nothing ever leaves the device; verify all network and third-party paths.
- No server-side database, analytics, account system, or cloud sync should be introduced without product authorization.
- Do not store secrets in source control or client code.
- Do not change production permissions, OAuth scopes, RLS policies, or data deletion behavior without explicit approval.
- Do not call a system secure, private, encrypted, or compliant without evidence for the exact claim.

## Reporting
Provide evidence-based findings with severity, affected data, attack or failure path, remediation, and residual risk. Separate verified facts from assumptions.
