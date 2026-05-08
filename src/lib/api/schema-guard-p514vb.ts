/**
 * Schema guard for the api surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type SchemaGuardInput = {
  options: string;
  retries?: number;
};

export type SchemaGuardResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function schemaGuard(input: SchemaGuardInput): SchemaGuardResult {
  const trimmed = input.options.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
