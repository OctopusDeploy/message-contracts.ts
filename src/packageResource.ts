import type { CommitDetail } from "./commitDetail";
import type { ResourceWithId } from "./resource";
import type { WorkItemLink } from "./workItemLink";

export interface PackageResource extends ResourceWithId {
  Description: string;
  FeedId: string;
  FileExtension: string;
  PackageId: string;
  PackageVersionBuildInformation?: OctopusPackageVersionBuildInformationMappedResource;
  Published: string;
  ReleaseNotes: string;
  Summary: string;
  Title: string;
  Version: string;
}

export interface OctopusPackageVersionBuildInformationMappedResource
  extends ResourceWithId {
  Branch: string;
  BuildEnvironment: string;
  BuildNumber: string;
  BuildUrl: string;
  Commits: CommitDetail[];
  Created?: string;
  Id: string;
  IncompleteDataWarning: string;
  IssueTrackerId: string;
  PackageId: string;
  VcsCommitNumber: string;
  VcsCommitUrl: string;
  VcsType: string;
  VcsRoot: string;
  Version: string;
  WorkItems: WorkItemLink[];
}