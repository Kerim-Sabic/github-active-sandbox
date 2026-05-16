/**
 * Path normaliser for the config surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type PathNormaliserInput = {
  request: string;
  retries?: number;
};

export type PathNormaliserResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function pathNormaliser(input: PathNormaliserInput): PathNormaliserResult {
  const trimmed = input.request.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
