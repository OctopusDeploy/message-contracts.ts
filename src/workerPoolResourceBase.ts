import type { NamedResource } from "./namedResource";
import type { WorkerPoolType } from "./workerPoolType";

export interface WorkerPoolResourceBase
  extends NamedResource<{ Self: string }> {
  Description: string;
  SortOrder: number;
  SpaceId: string;
  IsDefault: boolean;
  CanAddWorkers: boolean;
  WorkerPoolType: WorkerPoolType;
  LastModifiedOn?: string;
  LastModifiedBy?: string;
}
