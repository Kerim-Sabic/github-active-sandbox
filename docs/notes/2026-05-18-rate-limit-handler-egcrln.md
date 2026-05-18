# Rate-limit handler — 2026-05-18

## Context

We hit a retry storm in the `queue` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Unit test reproducing the original symptom.
- No regression in the p99 latency.

## Follow-ups

- Watch error rate for one release cycle.
