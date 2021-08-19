export interface MachineConnectivityPolicy {
  MachineConnectivityBehavior: MachineConnectivityBehavior;
}

export enum MachineConnectivityBehavior {
  ExpectedToBeOnline = "ExpectedToBeOnline",
  MayBeOfflineAndCanBeSkipped = "MayBeOfflineAndCanBeSkipped",
}