# Request signer — 2026-05-08

## Context

We hit a retry storm in the `logger` path during peak hours. Reproduces with about 1 in 200 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Surface a typed error and let the caller decide.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Manual run against the staging fixture.
- No regression in the happy path.

## Follow-ups

- Consider extracting into a shared util.
