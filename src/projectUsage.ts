import type { ReleaseUsageEntry } from "./releaseUsageEntry";
import type { RunbookSnapshotUsageEntry } from "./runbookSnapshotUsageEntry";

export interface ProjectUsage {
  IsCurrentlyBeingUsedInProject: boolean;
  ProjectName: string;
  ProjectSlug: string;
  ProjectId: string;
  Releases: ReleaseUsageEntry[];
  RunbookSnapshots: RunbookSnapshotUsageEntry[];
}