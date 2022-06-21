import type { NamedResource } from "./namedResource";
import type { WorkerPoolType } from "./workerPoolType";

interface WorkerPoolResourceBase extends NamedResource<{ Self: string }> {
  Description: string;
  SortOrder: number;
  SpaceId: string;
  IsDefault: boolean;
  CanAddWorkers: boolean;
  WorkerPoolType: WorkerPoolType;
  LastModifiedOn?: string;
  LastModifiedBy?: string;
}

export interface StaticWorkerPoolResource extends WorkerPoolResourceBase {
  WorkerPoolType: WorkerPoolType.Static;
}

export interface DynamicWorkerPoolResource extends WorkerPoolResourceBase {
  WorkerPoolType: WorkerPoolType.Dynamic;
  WorkerType: string;
}

export type NewStaticWorkerPoolResource = Omit<
  StaticWorkerPoolResource,
  "Id" | "Links" | "LastModifiedOn" | "LastModifiedBy" | "SpaceId"
>;
export type NewDynamicWorkerPoolResource = Omit<
  DynamicWorkerPoolResource,
  "Id" | "Links" | "LastModifiedOn" | "LastModifiedBy" | "SpaceId"
>;
export type NewWorkerPoolResource =
  | NewStaticWorkerPoolResource
  | NewDynamicWorkerPoolResource;

export type WorkerPoolResource =
  | StaticWorkerPoolResource
  | DynamicWorkerPoolResource;
