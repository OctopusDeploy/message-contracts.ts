import type { ResourceWithId } from "./resource";

export interface DashboardProjectGroupResource extends ResourceWithId {
  Name: string;
  EnvironmentIds: string[];
}
