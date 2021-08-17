import type { ISnapshotResource } from "./releaseResource";

export interface RunbookSnapshotResource extends ISnapshotResource {
  Name: string;
  Notes: string;
  RunbookId: string;
  FrozenRunbookProcessId: string;
  FrozenProjectVariableSetId: string;
}

export default RunbookSnapshotResource;
