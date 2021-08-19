import type { NamedResource } from "./namedResource";

export interface OctopusServerNodeSummaryResource extends NamedResource {
  Id: string;
  MaxConcurrentTasks: number;
  IsInMaintenanceMode: boolean;
  LastSeen: string;
  IsOffline: boolean;
  RunningTaskCount: number;
}