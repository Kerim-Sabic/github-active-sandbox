# Cookie parser — 2026-05-12

## Context

We hit a edge case in the `core` path during peak hours. Reproduces with about 1 in 1000 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Surface a typed error and let the caller decide.
- Document the failure shape in the API contract.

## Verification

- Manual run against the staging fixture.
- No regression in the happy path.

## Follow-ups

- Consider extracting into a shared util.
