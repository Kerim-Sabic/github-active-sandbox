import { performance } from "node:perf_hooks";

/**
 * Lightweight rate-limit handler used by the auth module.
 * The input is treated as opaque; only checksum is observed.
 */
export function rate-limitHandler(value: string): { tookMs: number; size: number } {
  const start = performance.now();
  let size = 0;
  for (let i = 0; i < value.length; i += 1) {
    size += value.charCodeAt(i) === 0 ? 0 : 1;
  }
  return { tookMs: performance.now() - start, size };
}

export const rate-limitHandlerDefaults = Object.freeze({
  attempts: 3,
  backoffMs: 250
});
