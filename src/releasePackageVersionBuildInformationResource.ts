import type { CommitDetail } from "./commitDetail";
import type { WorkItemLink } from "./workItemLink";

export interface ReleasePackageVersionBuildInformationResource {
  Branch: string;
  BuildEnvironment: string;
  BuildNumber: string;
  BuildUrl: string;
  Commits: CommitDetail[];
  Id: string;
  IssueTrackerId: string;
  PackageId: string;
  VcsCommitNumber: string;
  VcsCommitUrl: string;
  VcsRoot: string;
  VcsType: string;
  Version: string;
  WorkItems: WorkItemLink[];
}