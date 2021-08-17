import ResourceWithId from "./resource";

export interface OctopusServerNodeDetailsResource extends ResourceWithId {
  RunningTasks: number;
}

export default OctopusServerNodeDetailsResource;
