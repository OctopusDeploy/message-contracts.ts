export interface MachineScriptPolicy {
  RunType: MachineScriptPolicyRunType;
  ScriptBody: string;
}

export enum MachineScriptPolicyRunType {
  InheritFromDefault = "InheritFromDefault",
  Inline = "Inline",
}

export default MachineScriptPolicy;
