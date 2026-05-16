# Queue dispatcher — 2026-05-16

## Context

We hit a rounding error in the `queue` path during peak hours. Reproduces with about 1 in 1000 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Document the failure shape in the API contract.

## Verification

- Replay of yesterday's incident traffic.
- No regression in the happy path.

## Follow-ups

- Watch error rate for one release cycle.
