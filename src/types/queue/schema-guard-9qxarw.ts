/**
 * Public types for schema guard.
 * Imported by the dashboard.
 */

export type SchemaGuard = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type SchemaGuardPatch = Partial<Pick<SchemaGuard, "status">>;

export const isActive = (value: SchemaGuard): boolean => value.status === "active";
