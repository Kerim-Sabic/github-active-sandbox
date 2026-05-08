/**
 * Public types for cookie parser.
 * Imported by the API surface.
 */

export type CookieParser = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type CookieParserPatch = Partial<Pick<CookieParser, "status">>;

export const isActive = (value: CookieParser): boolean => value.status === "active";
