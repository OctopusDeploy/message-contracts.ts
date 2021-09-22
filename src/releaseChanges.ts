import type { CommitDetail } from "./commitDetail";
import type { ReleasePackageVersionBuildInformation } from "./releasePackageVersionBuildInformation";
import type { WorkItemLink } from "./workItemLink";

export interface ReleaseChanges {
  Version: string;
  ReleaseNotes: string;
  WorkItems: WorkItemLink[];
  Commits: CommitDetail[];
  BuildInformation: ReleasePackageVersionBuildInformation[];
}
