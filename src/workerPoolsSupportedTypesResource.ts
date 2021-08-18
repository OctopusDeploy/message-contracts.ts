import type { WorkerPoolType } from "./workerPoolType";

export interface WorkerPoolsSupportedTypes {
  SupportedPoolTypes: WorkerPoolType[];
}

export interface DynamicWorkerType {
  Type: string;
  Description: string;
  StartDateUtc?: Date;
  DeprecationDateUtc?: Date;
  EndOfLifeDateUtc?: Date;
}

export interface DynamicWorkerTypes {
  id: "dynamicworkertypes";
  WorkerTypes: DynamicWorkerType[];
}
