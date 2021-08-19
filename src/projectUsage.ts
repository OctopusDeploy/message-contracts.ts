import type { ReleaseUsageEntry } from "./releaseUsageEntry";
import type { RunbookSnapshotUsageEntry } from "./runbookSnapshotUsageEntry";

export interface ProjectUsage {
  ProjectName: string;
  ProjectSlug: string;
  ProjectId: string;
  IsCurrentlyBeingUsedInProject: boolean;
  Releases: ReleaseUsageEntry[];
  RunbookSnapshots: RunbookSnapshotUsageEntry[];
}