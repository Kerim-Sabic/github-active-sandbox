/**
 * Fetch retry helper for the queue surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type FetchRetryHelperInput = {
  value: string;
  retries?: number;
};

export type FetchRetryHelperResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function fetchRetryHelper(input: FetchRetryHelperInput): FetchRetryHelperResult {
  const trimmed = input.value.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
