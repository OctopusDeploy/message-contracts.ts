import type { ResourceWithId } from "./resource";
import type { ActionProperties } from "./actionProperties";
import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import { FeedType } from "./feedType";
import type { PackageReference } from "./packageReference";

export interface ActionTemplateResource extends ResourceWithId {
  Name: string;
  Description: string;
  ActionType: string;
  Version: number;
  CommunityActionTemplateId: string;
  Properties: ActionProperties;
  Parameters: ActionTemplateParameterResource[];
  Packages: PackageReference[];
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
