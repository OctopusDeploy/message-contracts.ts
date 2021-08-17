import type { RunbookSnapshotUsageEntry } from "./runbookSnapshotUsageEntry";

export interface RunbookSnapshotUsage {
  ProjectId: string;
  ProjectName: string;
  Snapshots: RunbookSnapshotUsageEntry[];
  RunbookId: string;
  RunbookName: string;
}
