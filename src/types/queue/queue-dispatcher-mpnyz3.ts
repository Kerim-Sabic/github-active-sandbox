/**
 * Public types for queue dispatcher.
 * Imported by the dashboard.
 */

export type QueueDispatcher = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type QueueDispatcherPatch = Partial<Pick<QueueDispatcher, "status">>;

export const isActive = (value: QueueDispatcher): boolean => value.status === "active";
