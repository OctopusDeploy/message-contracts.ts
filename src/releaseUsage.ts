import type { ReleaseUsageEntry } from "./releaseUsageEntry";

export interface ReleaseUsage {
  ProjectId: string;
  ProjectName: string;
  Releases: ReleaseUsageEntry[];
}
