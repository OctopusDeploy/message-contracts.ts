import type { WorkerPoolType } from "./workerPoolType";

export interface WorkerPoolsSupportedTypes {
  SupportedPoolTypes: WorkerPoolType[];
}

export interface DynamicWorkerType {
  DeprecationDateUtc?: Date;
  Description: string;
  EndOfLifeDateUtc?: Date;
  StartDateUtc?: Date;
  Type: string;
}

export interface DynamicWorkerTypes {
  id: "dynamicworkertypes";
  WorkerTypes: DynamicWorkerType[];
}
