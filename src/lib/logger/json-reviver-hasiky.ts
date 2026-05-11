/**
 * Json reviver for the logger surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type JsonReviverInput = {
  value: string;
  retries?: number;
};

export type JsonReviverResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function jsonReviver(input: JsonReviverInput): JsonReviverResult {
  const trimmed = input.value.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
