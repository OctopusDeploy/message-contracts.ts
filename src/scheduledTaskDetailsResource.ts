import type { ActivityElement } from "./taskDetailsResource";
import type { ResourceWithId } from "./resource";

// TaskDetailsServerResource in Octopus.Server
export default interface ScheduledTaskDetailsResource extends ResourceWithId {
  ActivityLog: ActivityElement;
}
