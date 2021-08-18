export interface MachineUpdatePolicy {
  CalamariUpdateBehavior: CalamariUpdateBehavior;
  TentacleUpdateBehavior: TentacleUpdateBehavior;
  TentacleUpdateAccountId: string;
}

export enum CalamariUpdateBehavior {
  UpdateOnDeployment = "UpdateOnDeployment",
  UpdateOnNewMachine = "UpdateOnNewMachine",
  UpdateAlways = "UpdateAlways",
}

export enum TentacleUpdateBehavior {
  NeverUpdate = "NeverUpdate",
  Update = "Update",
}

export default MachineUpdatePolicy;
