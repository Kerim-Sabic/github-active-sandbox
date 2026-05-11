/**
 * Public types for fetch retry helper.
 * Imported by the dashboard.
 */

export type FetchRetryHelper = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type FetchRetryHelperPatch = Partial<Pick<FetchRetryHelper, "status">>;

export const isActive = (value: FetchRetryHelper): boolean => value.status === "active";
