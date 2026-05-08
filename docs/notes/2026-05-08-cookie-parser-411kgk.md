# Cookie parser — 2026-05-08

## Context

We hit a rounding error in the `api` path during peak hours. Reproduces with about 1 in 200 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Retry with jitter, max 3 attempts.
- Add a metric counter so we can see this in the dashboard.

## Verification

- Unit test reproducing the original symptom.
- No regression in the p99 latency.

## Follow-ups

- Revisit when the upstream contract stabilises.
