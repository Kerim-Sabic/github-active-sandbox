/**
 * Public types for tracing context.
 * Imported by the API surface.
 */

export type TracingContext = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type TracingContextPatch = Partial<Pick<TracingContext, "status">>;

export const isActive = (value: TracingContext): boolean => value.status === "active";
