import type { ResourceWithId } from "./resource";

export interface DashboardEnvironmentResource extends ResourceWithId {
  Id: string;
  Name: string;
}
