import type MachineCleanupPolicy from "./machineCleanupPolicy";
import type MachineConnectivityPolicy from "./machineConnectivityPolicy";
import type MachineHealthCheckPolicy from "./machineHealthCheckPolicy";
import type MachineUpdatePolicy from "./machineUpdatePolicy";
import type NamedResource from "./namedResource";

export interface MachinePolicyResource extends NamedResource {
  ConnectionConnectTimeout: string;
  ConnectionRetryCountLimit: number;
  ConnectionRetrySleepInterval: string;
  ConnectionRetryTimeLimit: string;
  Description: string;
  IsDefault: boolean;
  MachineHealthCheckPolicy: MachineHealthCheckPolicy;
  MachineConnectivityPolicy: MachineConnectivityPolicy;
  MachineCleanupPolicy: MachineCleanupPolicy;
  MachineUpdatePolicy: MachineUpdatePolicy;
  Name: string;
  PollingRequestMaximumMessageProcessingTimeout: string;
  PollingRequestQueueTimeout: string;
}

export default MachinePolicyResource;
