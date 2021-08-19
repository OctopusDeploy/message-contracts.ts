/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { AwsElasticContainerRegistryFeedResource } from "./awsElasticContainerRegistryFeedResource";
import type { BuiltInFeedResource } from "./builtInFeedResource";
import type { DockerFeedResource } from "./dockerFeedResource";
import { FeedType } from "./feedType";
import type { GitHubFeedResource } from "./gitHubFeedResource";
import type { HelmFeedResource } from "./helmFeedResource";
import type { MavenFeedResource } from "./mavenFeedResource";
import type { NugetFeedResource } from "./nugetFeedResource";
import type { OctopusProjectFeedResource } from "./octopusProjectFeedResource";
import { every } from "lodash";

export type ExternalFeedResource =
  | NugetFeedResource
  | DockerFeedResource
  | MavenFeedResource
  | GitHubFeedResource
  | HelmFeedResource
  | AwsElasticContainerRegistryFeedResource;

export type FeedResource =
  | ExternalFeedResource
  | BuiltInFeedResource
  | OctopusProjectFeedResource;

export function feedTypeCanSearchEmpty(feed: FeedType): boolean {
  return ![
    FeedType.Docker,
    FeedType.AwsElasticContainerRegistry,
    FeedType.Maven,
    FeedType.GitHub,
  ].includes(feed);
}

export function feedTypeSupportsExtraction(feed: FeedType): boolean {
  // Container images can not be extracted
  return ![FeedType.Docker, FeedType.AwsElasticContainerRegistry].includes(
    feed
  );
}

export function isOctopusProjectFeed(feed: FeedType): boolean {
  return (feed as string) === "OctopusProject";
}

export function containerRegistryFeedTypes(): FeedType[] {
  return [FeedType.Docker, FeedType.AwsElasticContainerRegistry];
}

export function isContainerImageRegistry(feed: FeedType): boolean {
  return containerRegistryFeedTypes().includes(feed);
}

export const getFeedTypeLabel = (feedType?: FeedType[]) => {
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
