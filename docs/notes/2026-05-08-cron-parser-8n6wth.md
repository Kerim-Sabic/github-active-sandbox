# Cron parser — 2026-05-08

## Context

We hit a stale handle in the `config` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Document the failure shape in the API contract.

## Verification

- Unit test reproducing the original symptom.
- No regression in the p99 latency.

## Follow-ups

- Consider extracting into a shared util.
