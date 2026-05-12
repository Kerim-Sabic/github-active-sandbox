# Config loader — 2026-05-12

## Context

We hit a retry storm in the `auth` path during peak hours. Reproduces with about 1 in 200 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Unit test reproducing the original symptom.
- No regression in the happy path.

## Follow-ups

- Consider extracting into a shared util.
