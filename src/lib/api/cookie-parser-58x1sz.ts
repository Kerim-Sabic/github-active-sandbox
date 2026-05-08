/**
 * Cookie parser for the api surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type CookieParserInput = {
  options: string;
  retries?: number;
};

export type CookieParserResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function cookieParser(input: CookieParserInput): CookieParserResult {
  const trimmed = input.options.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
