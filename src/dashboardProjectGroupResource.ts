import type { ResourceWithId } from "./resource";

export interface DashboardProjectGroupResource extends ResourceWithId {
  EnvironmentIds: string[];
  Name: string;
}
