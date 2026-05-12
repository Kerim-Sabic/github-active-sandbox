# Session refresher — 2026-05-12

## Context

We hit a race condition in the `metrics` path during peak hours. Reproduces with about 1 in 1000 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Retry with jitter, max 3 attempts.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Replay of yesterday's incident traffic.
- No regression in the rate-limit budget.

## Follow-ups

- Watch error rate for one release cycle.
