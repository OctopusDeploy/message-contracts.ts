export interface MachineCleanupPolicy {
  DeleteMachinesBehavior: DeleteMachinesBehavior;
  DeleteMachinesElapsedTimeSpan: string;
}

export enum DeleteMachinesBehavior {
  DoNotDelete = "DoNotDelete",
  DeleteUnavailableMachines = "DeleteUnavailableMachines",
}