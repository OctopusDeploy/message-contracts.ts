import type { MachineCleanupPolicy } from "./machineCleanupPolicy";
import type { MachineConnectivityPolicy } from "./machineConnectivityPolicy";
import type { MachineHealthCheckPolicy } from "./machineHealthCheckPolicy";
import type { MachineUpdatePolicy } from "./machineUpdatePolicy";
import type { NamedResource } from "./namedResource";

export interface MachinePolicyResource extends NamedResource {
  ConnectionConnectTimeout: string;
  ConnectionRetryCountLimit: number;
  ConnectionRetrySleepInterval: string;
  ConnectionRetryTimeLimit: string;
  Description: string;
  IsDefault: boolean;
  MachineCleanupPolicy: MachineCleanupPolicy;
  MachineConnectivityPolicy: MachineConnectivityPolicy;
  MachineHealthCheckPolicy: MachineHealthCheckPolicy;
  MachineUpdatePolicy: MachineUpdatePolicy;
  Name: string;
  PollingRequestMaximumMessageProcessingTimeout: string;
  PollingRequestQueueTimeout: string;
}