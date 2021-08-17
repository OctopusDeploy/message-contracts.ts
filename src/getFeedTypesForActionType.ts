import { FeedType } from "./feedResource";

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
