/**
 * Public types for metric tagger.
 * Imported by the dashboard.
 */

export type MetricTagger = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type MetricTaggerPatch = Partial<Pick<MetricTagger, "status">>;

export const isActive = (value: MetricTagger): boolean => value.status === "active";
