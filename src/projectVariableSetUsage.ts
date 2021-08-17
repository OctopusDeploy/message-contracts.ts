import type { ReleaseUsageEntry } from "./releaseUsageEntry";

export interface ProjectVariableSetUsage {
  ProjectName: string;
  ProjectSlug: string;
  ProjectId: string;
  IsCurrentlyBeingUsedInProject: boolean;
  Releases: ReleaseUsageEntry[];
}
