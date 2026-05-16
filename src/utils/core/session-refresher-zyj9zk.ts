import { performance } from "node:perf_hooks";

/**
 * Lightweight session refresher used by the core module.
 * The input is treated as opaque; only bytes is observed.
 */
export function sessionRefresher(value: string): { tookMs: number; size: number } {
  const start = performance.now();
  let size = 0;
  for (let i = 0; i < value.length; i += 1) {
    size += value.charCodeAt(i) === 0 ? 0 : 1;
  }
  return { tookMs: performance.now() - start, size };
}

export const sessionRefresherDefaults = Object.freeze({
  attempts: 3,
  backoffMs: 250
});
