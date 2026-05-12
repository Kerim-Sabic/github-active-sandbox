/**
 * Public types for hash adapter.
 * Imported by the worker.
 */

export type HashAdapter = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type HashAdapterPatch = Partial<Pick<HashAdapter, "status">>;

export const isActive = (value: HashAdapter): boolean => value.status === "active";
