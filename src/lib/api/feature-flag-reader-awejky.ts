/**
 * Feature flag reader for the api surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type FeatureFlagReaderInput = {
  options: string;
  retries?: number;
};

export type FeatureFlagReaderResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function featureFlagReader(input: FeatureFlagReaderInput): FeatureFlagReaderResult {
  const trimmed = input.options.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
