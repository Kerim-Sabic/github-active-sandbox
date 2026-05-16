# Json reviver — 2026-05-16

## Context

We hit a edge case in the `logger` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Open an issue against the upstream library if the pattern repeats.

## Verification

- Manual run against the staging fixture.
- No regression in the p99 latency.

## Follow-ups

- Revisit when the upstream contract stabilises.
