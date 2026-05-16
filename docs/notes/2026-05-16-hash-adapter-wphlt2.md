# Hash adapter — 2026-05-16

## Context

We hit a retry storm in the `api` path during peak hours. Reproduces with about 1 in 1000 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Retry with jitter, max 3 attempts.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Unit test reproducing the original symptom.
- No regression in the happy path.

## Follow-ups

- Revisit when the upstream contract stabilises.
