/**
 * Request signer for the metrics surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type RequestSignerInput = {
  request: string;
  retries?: number;
};

export type RequestSignerResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function requestSigner(input: RequestSignerInput): RequestSignerResult {
  const trimmed = input.request.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
