import type { ResourceWithId } from "./resource";
import type { ActionProperties } from "./actionProperties";
import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import { FeedType } from "./feedType";
import type { PackageReference } from "./packageReference";

export interface ActionTemplateResource extends ResourceWithId {
  ActionType: string;
  CommunityActionTemplateId: string;
  Description: string;
  Name: string;
  Packages: PackageReference[];
  Parameters: ActionTemplateParameterResource[];
  Properties: ActionProperties;
  Version: number;
}

export function getFeedTypesForActionType(actionType: string): FeedType[] {
  switch (actionType) {
    case "Octopus.DockerRun":
      return [FeedType.Docker, FeedType.AwsElasticContainerRegistry];
    case "Octopus.HelmChartUpgrade":
      return [FeedType.Helm];
    case "Octopus.JavaArchive":
    case "Octopus.TomcatDeploy":
    case "Octopus.WildFlyDeploy":
      return [FeedType.Nuget, FeedType.BuiltIn, FeedType.Maven];
    case "Octopus.TentaclePackage":
    case "Octopus.TransferPackage":
      return [
        FeedType.Nuget,
        FeedType.BuiltIn,
        FeedType.Maven,
        FeedType.GitHub,
      ];
  }

  return [];
}
