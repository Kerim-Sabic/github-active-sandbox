# Queue dispatcher — 2026-05-16

## Context

We hit a race condition in the `queue` path during peak hours. Reproduces with about 1 in 200 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Add a metric counter so we can see this in the dashboard.

## Verification

- Replay of yesterday's incident traffic.
- No regression in the happy path.

## Follow-ups

- Consider extracting into a shared util.
