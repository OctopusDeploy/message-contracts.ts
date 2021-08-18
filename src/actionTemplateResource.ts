import type { Resource, ResourceWithId } from "./resource";
import type ActionProperties from "./actionProperties";
import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type { ActionsUpdateProcessResource } from "./actionsUpdateProcessResource";
import { FeedType } from "./feedType";
import type { PackageReference } from "./packageReference";
import type { ProcessType } from "./processType";

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

export interface ActionUpdateResource extends Resource {
  Version: number;
  DefaultPropertyValues: ActionProperties;
  Overrides: ActionProperties;
  ActionsToUpdate: ActionsUpdateProcessResource[];
}

export interface ActionTemplateUsageResource extends ResourceWithId {
  ActionTemplateId: string;
  DeploymentProcessId: string;
  ProcessType: ProcessType;
  ProcessId: string;
  RunbookId: string;
  ActionId: string;
  RunbookName: string;
  ActionName: string;
  StepId: string;
  StepName: string;
  ProjectId: string;
  ProjectName: string;
  ProjectSlug: string;
  Version: string;
}

export interface ActionUpdateResultResource {
  Id: string;
  Outcome: ActionUpdateOutcome;
  NamesOfNewParametersMissingDefaultValue: string[];
  ManualMergeRequiredReasonsByPropertyName: {};
  RemovedPackageUsages: ActionUpdateRemovedPackageUsage[];
}

export enum ActionUpdateOutcome {
  Success = "Success",
  ManualMergeRequired = "ManualMergeRequired",
  DefaultParamterValueMissing = "DefaultParamterValueMissing",
  RemovedPackageInUse = "RemovedPackageInUse",
}

export interface ActionUpdateRemovedPackageUsage {
  PackageReference: string;
  UsedBy: ActionUpdatePackageUsedBy;
  UsedById: string;
  UsedByName: string;
}

export enum ActionUpdatePackageUsedBy {
  ProjectVersionStrategy = "ProjectVersionStrategy",
  ProjectReleaseCreationStrategy = "ProjectReleaseCreationStrategy",
  ChannelRule = "ChannelRule",
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
