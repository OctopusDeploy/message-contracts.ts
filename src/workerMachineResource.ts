/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { MachineResource, NewMachineResource } from "./machineResource";

export interface WorkerMachineResource extends MachineResource {
  WorkerPoolIds: string[]; //ReferenceCollection;
}

export interface NewWorkerMachineResource extends NewMachineResource {
  WorkerPoolIds: string[]; //ReferenceCollection;
}

export function isWorkerMachine(
  machine: MachineResource
): machine is WorkerMachineResource {
  return (machine as WorkerMachineResource).WorkerPoolIds !== undefined;
}