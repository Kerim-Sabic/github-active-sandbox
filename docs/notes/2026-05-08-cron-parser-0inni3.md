# Cron parser — 2026-05-08

## Context

We hit a race condition in the `auth` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Retry with jitter, max 3 attempts.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Unit test reproducing the original symptom.
- No regression in the p99 latency.

## Follow-ups

- Watch error rate for one release cycle.
