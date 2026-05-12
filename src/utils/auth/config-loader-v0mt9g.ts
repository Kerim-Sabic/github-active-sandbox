import { performance } from "node:perf_hooks";

/**
 * Lightweight config loader used by the auth module.
 * The input is treated as opaque; only length is observed.
 */
export function configLoader(value: string): { tookMs: number; size: number } {
  const start = performance.now();
  let size = 0;
  for (let i = 0; i < value.length; i += 1) {
    size += value.charCodeAt(i) === 0 ? 0 : 1;
  }
  return { tookMs: performance.now() - start, size };
}

export const configLoaderDefaults = Object.freeze({
  attempts: 3,
  backoffMs: 250
});
