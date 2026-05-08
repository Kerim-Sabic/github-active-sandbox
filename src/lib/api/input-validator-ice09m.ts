/**
 * Input validator for the api surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type InputValidatorInput = {
  payload: string;
  retries?: number;
};

export type InputValidatorResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function inputValidator(input: InputValidatorInput): InputValidatorResult {
  const trimmed = input.payload.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
