import type MachineScriptPolicy from "./machineScriptPolicy";

export interface MachineHealthCheckPolicy {
  BashHealthCheckPolicy: MachineScriptPolicy;
  HealthCheckCron?: string;
  HealthCheckCronTimezone?: string;
  HealthCheckInterval?: string;
  HealthCheckType: HealthCheckType;
  PowerShellHealthCheckPolicy: MachineScriptPolicy;
}

export enum HealthCheckType {
  RunScript = "RunScript",
  OnlyConnectivity = "OnlyConnectivity",
}

export default MachineHealthCheckPolicy;
