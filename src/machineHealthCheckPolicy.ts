import type MachineScriptPolicy from "./machineScriptPolicy";

export interface MachineHealthCheckPolicy {
  PowerShellHealthCheckPolicy: MachineScriptPolicy;
  BashHealthCheckPolicy: MachineScriptPolicy;
  HealthCheckInterval?: string;
  HealthCheckCron?: string;
  HealthCheckCronTimezone?: string;
  HealthCheckType: HealthCheckType;
}

export enum HealthCheckType {
  RunScript = "RunScript",
  OnlyConnectivity = "OnlyConnectivity",
}

export default MachineHealthCheckPolicy;
