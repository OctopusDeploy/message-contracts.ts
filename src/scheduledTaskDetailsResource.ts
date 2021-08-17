import ResourceWithId from "./resource";
import type { ActivityElement } from "./taskDetailsResource";

// TaskDetailsServerResource in Octopus.Server
export interface ScheduledTaskDetailsResource extends ResourceWithId {
  ActivityLog: ActivityElement;
}

export default ScheduledTaskDetailsResource;
