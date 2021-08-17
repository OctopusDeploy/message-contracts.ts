import ResourceWithId from "./resource";
import type EnvironmentResource from "./environmentResource";

export interface EnvironmentSummaryResource extends ResourceWithId {
  Environment: EnvironmentResource;
  TotalMachines: number;
  TotalDisabledMachines: number;
  MachineHealthStatusSummaries: { [key: string]: number };
  MachineEndpointSummaries: {};
  MachineTenantSummaries: {};
  MachineTenantTagSummaries: {};
  TentacleUpgradesRequired: boolean;
  MachineIdsForCalamariUpgrade: string[];
  MachineIdsForTentacleUpgrade: string[];
}

export default EnvironmentSummaryResource;
