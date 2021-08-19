import type { EnvironmentResource } from "./environmentResource";
import type { ResourceWithId } from "./resource";

export interface EnvironmentSummaryResource extends ResourceWithId {
  Environment: EnvironmentResource;
  MachineEndpointSummaries: {};
  MachineHealthStatusSummaries: { [key: string]: number };
  MachineIdsForCalamariUpgrade: string[];
  MachineIdsForTentacleUpgrade: string[];
  MachineTenantSummaries: {};
  MachineTenantTagSummaries: {};
  TentacleUpgradesRequired: boolean;
  TotalDisabledMachines: number;
  TotalMachines: number;
}