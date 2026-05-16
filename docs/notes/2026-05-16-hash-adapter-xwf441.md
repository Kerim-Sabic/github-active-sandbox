# Hash adapter — 2026-05-16

## Context

We hit a stale handle in the `core` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Surface a typed error and let the caller decide.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Unit test reproducing the original symptom.
- No regression in the happy path.

## Follow-ups

- Watch error rate for one release cycle.
