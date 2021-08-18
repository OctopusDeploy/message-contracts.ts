import type { ResourceWithId } from "./resource";

export default interface DashboardProjectGroupResource extends ResourceWithId {
  Name: string;
  EnvironmentIds: string[];
}
