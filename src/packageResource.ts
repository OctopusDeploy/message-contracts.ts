import type { ResourceWithId } from "./resource";

export interface PackageResource extends ResourceWithId {
  PackageId: string;
  FeedId: string;
  Title: string;
  Summary: string;
  Version: string;
  Description: string;
  Published: string;
  ReleaseNotes: string;
  PackageVersionBuildInformation?: OctopusPackageVersionBuildInformationMappedResource;
  FileExtension: string;
}

export interface PackageFromBuiltInFeedResource extends PackageResource {
  PackageSizeBytes?: number;
  Hash?: string;
}

export interface PackageDescriptionResource extends ResourceWithId {
  Id: string;
  Name: string;
  LatestVersion?: string;
  Description?: string;
}

export interface PackageVersionResource extends ResourceWithId {
  Id: string;
  Version: string;
  Title?: string;
  Published?: string;
  SizeBytes?: number;
  PackageId?: string;
  FeedId?: string;
  ReleaseNotes?: string;
}

export interface OctopusPackageVersionBuildInformationMappedResource
  extends ResourceWithId {
  Id: string;
  PackageId: string;
  Version: string;
  BuildEnvironment: string;
  IssueTrackerId: string;
  BuildNumber: string;
  BuildUrl: string;
  Branch: string;
  VcsType: string;
  VcsRoot: string;
  VcsCommitNumber: string;
  VcsCommitUrl: string;

  WorkItems: WorkItemLink[];
  Commits: CommitDetail[];

  IncompleteDataWarning: string;

  Created?: string;
}

export interface ReleasePackageVersionBuildInformationResource {
  Id: string;
  PackageId: string;
  Version: string;
  BuildEnvironment: string;
  IssueTrackerId: string;
  BuildNumber: string;
  BuildUrl: string;
  Branch: string;
  VcsType: string;
  VcsRoot: string;
  VcsCommitNumber: string;
  VcsCommitUrl: string;

  WorkItems: WorkItemLink[];
  Commits: CommitDetail[];
}

export interface WorkItemLink {
  Id: string;
  LinkUrl: string;
  Description: string;
}

export interface CommitDetail {
  Id: string;
  LinkUrl: string;
  Comment: string;
}