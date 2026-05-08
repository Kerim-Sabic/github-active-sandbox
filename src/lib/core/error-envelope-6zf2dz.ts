/**
 * Error envelope for the core surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type ErrorEnvelopeInput = {
  value: string;
  retries?: number;
};

export type ErrorEnvelopeResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function errorEnvelope(input: ErrorEnvelopeInput): ErrorEnvelopeResult {
  const trimmed = input.value.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
