import type { MachineModelHealthStatus } from "./machineResource";
import type { Resource } from "./resource";
import type WorkerPoolResource from "./workerPoolResource";

export interface WorkerPoolSummaryResource extends Resource {
  WorkerPool: WorkerPoolResource;
  TotalMachines: number;
  TotalDisabledMachines: number;
  MachineHealthStatusSummaries: Record<
    keyof typeof MachineModelHealthStatus,
    number
  >;
  MachineEndpointSummaries: {};
  TentacleUpgradesRequired: boolean;
  MachineIdsForCalamariUpgrade: string[];
  MachineIdsForTentacleUpgrade: string[];
}

export default WorkerPoolSummaryResource;
