/**
 * Session refresher for the cache surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type SessionRefresherInput = {
  payload: string;
  retries?: number;
};

export type SessionRefresherResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function sessionRefresher(input: SessionRefresherInput): SessionRefresherResult {
  const trimmed = input.payload.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
