import type { ResourceWithId } from "./resource";

export default interface DashboardEnvironmentResource extends ResourceWithId {
  Id: string;
  Name: string;
}
