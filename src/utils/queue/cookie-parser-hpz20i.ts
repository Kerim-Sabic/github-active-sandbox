import { performance } from "node:perf_hooks";

/**
 * Lightweight cookie parser used by the queue module.
 * The input is treated as opaque; only length is observed.
 */
export function cookieParser(value: string): { tookMs: number; size: number } {
  const start = performance.now();
  let size = 0;
  for (let i = 0; i < value.length; i += 1) {
    size += value.charCodeAt(i) === 0 ? 0 : 1;
  }
  return { tookMs: performance.now() - start, size };
}

export const cookieParserDefaults = Object.freeze({
  attempts: 3,
  backoffMs: 250
});
