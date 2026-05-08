# Path normaliser — 2026-05-08

## Context

We hit a stale handle in the `cache` path during peak hours. Reproduces with about 1 in 200 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Add a metric counter so we can see this in the dashboard.

## Verification

- Unit test reproducing the original symptom.
- No regression in the p99 latency.

## Follow-ups

- Consider extracting into a shared util.
