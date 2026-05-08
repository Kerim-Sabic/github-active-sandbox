/**
 * Public types for error envelope.
 * Imported by the dashboard.
 */

export type ErrorEnvelope = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type ErrorEnvelopePatch = Partial<Pick<ErrorEnvelope, "status">>;

export const isActive = (value: ErrorEnvelope): boolean => value.status === "active";
