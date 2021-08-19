import type { ResourceWithId } from "./resource";

export interface OctopusServerNodeDetailsResource extends ResourceWithId {
  RunningTasks: number;
}