/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import ResourceWithId from "./resource";
import type { SensitiveValue } from "./propertyValueResource";
import type { PackageAcquisitionLocation } from "./packageAcquisitionLocation";
import { every } from "lodash";

interface FeedLinks {
  Self: string;
  SearchPackagesTemplate: string;
  SearchPackageVersionsTemplate: string;
  BuiltInStatus: string;
  Packages: string;
  SearchTemplate: string;
  VersionsTemplate: string;
  NotesTemplate: string;
}

interface BuiltInFeedLinks extends FeedLinks {
  NuGetPush: string;
  ApiPush: string;
}

export enum FeedType {
  Nuget = "NuGet",
  Docker = "Docker",
  Maven = "Maven",
  GitHub = "GitHub",
  BuiltIn = "BuiltIn",
  OctopusProject = "OctopusProject",
  Helm = "Helm",
  AwsElasticContainerRegistry = "AwsElasticContainerRegistry",
}

export interface DockerFeedResource extends Feed, ResourceWithId<FeedLinks> {
  FeedType: FeedType.Docker;
  ApiVersion?: any;
  RegistryPath: string;
  Name: string;
  FeedUri: string;
  Username?: any;
  Password?: SensitiveValue;
}

export interface RetryFeed extends Feed, ResourceWithId<FeedLinks> {
  DownloadAttempts: number;
  DownloadRetryBackoffSeconds: number;
}

export interface NugetFeedResource extends RetryFeed {
  FeedType: FeedType.Nuget;
  EnhancedMode: boolean;
  Name: string;
  FeedUri: string;
  Username?: string;
  Password?: SensitiveValue;
}

export interface HelmFeedResource extends Feed, ResourceWithId<FeedLinks> {
  FeedType: FeedType.Helm;
  Name: string;
  FeedUri: string;
  Username?: string;
  Password?: SensitiveValue;
}

export interface MavenFeedResource extends RetryFeed {
  FeedType: FeedType.Maven;
  Name: string;
  FeedUri: string;
  Username?: string;
  Password?: SensitiveValue;
}

export interface GitHubFeedResource extends RetryFeed {
  FeedType: FeedType.GitHub;
  Name: string;
  FeedUri: string;
  Username?: string;
  Password?: SensitiveValue;
}

export interface Feed {
  FeedType: FeedType;
  PackageAcquisitionLocationOptions?: PackageAcquisitionLocation[];
  SpaceId?: string;
  LastModifiedOn?: string | null;
  LastModifiedBy?: string | null;
}

export interface AwsElasticContainerRegistryFeedResource extends RetryFeed {
  FeedType: FeedType.AwsElasticContainerRegistry;
  Name: string;
  FeedUri: string;
  Region: string;
  AccessKey: string;
  SecretKey: SensitiveValue;
}

export interface BuiltInFeedResource
  extends Feed,
  ResourceWithId<BuiltInFeedLinks> {
  FeedType: FeedType.BuiltIn;
  Name: string;
  IsBuiltInRepoSyncEnabled: boolean;
  DeleteUnreleasedPackagesAfterDays?: number;
}

export interface OctopusProjectFeedResource
  extends Feed,
  ResourceWithId<FeedLinks> {
  FeedType: FeedType.OctopusProject;
  Name: string;
}

type ExternalFeedResource =
  | NugetFeedResource
  | DockerFeedResource
  | MavenFeedResource
  | GitHubFeedResource
  | HelmFeedResource
  | AwsElasticContainerRegistryFeedResource;
type FeedResource =
  | ExternalFeedResource
  | BuiltInFeedResource
  | OctopusProjectFeedResource;

export { ExternalFeedResource };

export default FeedResource;

function feedTypeCanSearchEmpty(feed: FeedType): boolean {
  return ![
    FeedType.Docker,
    FeedType.AwsElasticContainerRegistry,
    FeedType.Maven,
    FeedType.GitHub,
  ].includes(feed);
}

function feedTypeSupportsExtraction(feed: FeedType): boolean {
  // Container images can not be extracted
  return ![FeedType.Docker, FeedType.AwsElasticContainerRegistry].includes(
    feed
  );
}

function isOctopusProjectFeed(feed: FeedType): boolean {
  return (feed as string) === "OctopusProject";
}

function containerRegistryFeedTypes(): FeedType[] {
  return [FeedType.Docker, FeedType.AwsElasticContainerRegistry];
}

function isContainerImageRegistry(feed: FeedType): boolean {
  return containerRegistryFeedTypes().includes(feed);
}

const getFeedTypeLabel = (feedType?: FeedType[]) => {
  const requiresContainerImageRegistryFeed =
    feedType &&
    feedType.length >= 1 &&
    every(feedType, (f) => isContainerImageRegistry(f));
  const requiresHelmChartFeed =
    feedType && feedType.length === 1 && feedType[0] === FeedType.Helm;

  if (requiresContainerImageRegistryFeed) {
    return "Container Image Registry";
  }
  if (requiresHelmChartFeed) {
    return "Helm Chart Repository";
  }
  return "Package";
};

export {
  feedTypeCanSearchEmpty,
  feedTypeSupportsExtraction,
  isOctopusProjectFeed,
  containerRegistryFeedTypes,
  isContainerImageRegistry,
  getFeedTypeLabel,
};
