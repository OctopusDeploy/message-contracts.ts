import type {
  CreateDeploymentBaseResource,
  IExecutionResource,
} from "./deploymentResource";

export interface RunbookRunResource extends IExecutionResource {
  RunbookSnapshotId: string;
  RunbookId: string;
  FrozenRunbookProcessId: string;
}

export interface CreateRunbookRunRequestResource
  extends CreateDeploymentBaseResource {
  RunbookSnapshotId: string;
  RunbookId: string;
  FrozenRunbookProcessId: string;
}

export default RunbookRunResource;
