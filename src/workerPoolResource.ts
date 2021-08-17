import type { WorkerPoolType } from "./workerPoolType";
import type { WorkerPoolResourceBase } from "./workerPoolResourceBase";

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

export default WorkerPoolResource;
