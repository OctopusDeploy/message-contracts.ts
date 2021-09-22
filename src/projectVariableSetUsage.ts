import type { ReleaseUsageEntry } from "./releaseUsageEntry";

export interface ProjectVariableSetUsage {
  IsCurrentlyBeingUsedInProject: boolean;
  ProjectName: string;
  ProjectSlug: string;
  ProjectId: string;
  Releases: ReleaseUsageEntry[];
}
