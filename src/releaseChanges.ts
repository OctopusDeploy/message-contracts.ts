import type { CommitDetail, WorkItemLink } from "./packageResource";
import type { ReleasePackageVersionBuildInformation } from "./releasePackageVersionBuildInformation";

export interface ReleaseChanges {
  Version: string;
  ReleaseNotes: string;
  WorkItems: WorkItemLink[];
  Commits: CommitDetail[];
  BuildInformation: ReleasePackageVersionBuildInformation[];
}
