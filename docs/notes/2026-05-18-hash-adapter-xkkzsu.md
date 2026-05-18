# Hash adapter — 2026-05-18

## Context

We hit a timezone drift in the `api` path during peak hours. Reproduces with about 1 in 50 requests when the upstream is degraded.

## Decision

- Treat the failure mode as transient.
- Retry with jitter, max 3 attempts.
- Document the failure shape in the API contract.

## Verification

- Manual run against the staging fixture.
- No regression in the happy path.

## Follow-ups

- Revisit when the upstream contract stabilises.
