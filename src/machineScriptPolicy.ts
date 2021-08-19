import type { MachineScriptPolicyRunType } from "./machineScriptPolicyRunType";

export interface MachineScriptPolicy {
  RunType: MachineScriptPolicyRunType;
  ScriptBody: string;
}
