/**
 * Public types for feature flag reader.
 * Imported by the API surface.
 */

export type FeatureFlagReader = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type FeatureFlagReaderPatch = Partial<Pick<FeatureFlagReader, "status">>;

export const isActive = (value: FeatureFlagReader): boolean => value.status === "active";
