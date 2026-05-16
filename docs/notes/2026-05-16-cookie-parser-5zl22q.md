# Cookie parser — 2026-05-16

## Context

We hit a regression in the `queue` path during peak hours. Reproduces with about 1 in 1000 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Document the failure shape in the API contract.

## Verification

- Replay of yesterday's incident traffic.
- No regression in the p99 latency.

## Follow-ups

- Consider extracting into a shared util.
