# Metric tagger — 2026-05-08

## Context

We hit a race condition in the `queue` path during peak hours. Reproduces with about 1 in 1000 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Cache the last successful result for 30s.
- Document the failure shape in the API contract.

## Verification

- Manual run against the staging fixture.
- No regression in the rate-limit budget.

## Follow-ups

- Watch error rate for one release cycle.
