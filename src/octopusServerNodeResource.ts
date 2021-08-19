import type { NamedResource } from "./namedResource";

export interface OctopusServerNodeResource extends NamedResource {
  MaxConcurrentTasks: number;
  IsInMaintenanceMode: boolean;
}