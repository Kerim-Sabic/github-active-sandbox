/**
 * Public types for session refresher.
 * Imported by the API surface.
 */

export type SessionRefresher = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type SessionRefresherPatch = Partial<Pick<SessionRefresher, "status">>;

export const isActive = (value: SessionRefresher): boolean => value.status === "active";
