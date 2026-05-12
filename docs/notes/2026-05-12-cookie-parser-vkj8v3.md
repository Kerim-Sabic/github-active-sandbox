# Cookie parser — 2026-05-12

## Context

We hit a edge case in the `telemetry` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Add a metric counter so we can see this in the dashboard.

## Verification

- Unit test reproducing the original symptom.
- No regression in the rate-limit budget.

## Follow-ups

- Watch error rate for one release cycle.
