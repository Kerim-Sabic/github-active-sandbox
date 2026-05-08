/**
 * Public types for request signer.
 * Imported by the dashboard.
 */

export type RequestSigner = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type RequestSignerPatch = Partial<Pick<RequestSigner, "status">>;

export const isActive = (value: RequestSigner): boolean => value.status === "active";
