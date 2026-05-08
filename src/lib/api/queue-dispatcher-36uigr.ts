/**
 * Queue dispatcher for the api surface.
 *
 * Pure function: no side effects, deterministic over its input.
 */

export type QueueDispatcherInput = {
  input: string;
  retries?: number;
};

export type QueueDispatcherResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

export function queueDispatcher(input: QueueDispatcherInput): QueueDispatcherResult {
  const trimmed = input.input.trim();
  if (trimmed.length === 0) {
    return { ok: false, reason: "empty input" };
  }
  if (trimmed.length > 4096) {
    return { ok: false, reason: "input too large" };
  }
  return { ok: true, value: trimmed };
}
