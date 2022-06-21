import type { ActionProperties } from "./actionProperties";
import type { DeploymentActionResource } from "./deploymentActionResource";
import type { NewNamedResource } from "./namedResource";
import type { ResourceWithId } from "./resource";

export interface DeploymentStepResource extends ResourceWithId {
  Id: string;
  Name: string;
  Properties: ActionProperties;
  Condition: RunCondition;
  StartTrigger: StartTrigger;
  PackageRequirement: PackageRequirement;
  Actions: DeploymentActionResource[];
}

export interface NewDeploymentStepResource extends NewNamedResource {
  Properties: ActionProperties;
  Condition: RunCondition;
  StartTrigger: StartTrigger;
  PackageRequirement: PackageRequirement;
  Actions: DeploymentActionResource[];
}

export enum StartTrigger {
  StartWithPrevious = "StartWithPrevious",
  StartAfterPrevious = "StartAfterPrevious",
}

export enum RunCondition {
  Success = "Success",
  Failure = "Failure",
  Always = "Always",
  Variable = "Variable",
}

export enum PackageRequirement {
  LetOctopusDecide = "LetOctopusDecide",
  BeforePackageAcquisition = "BeforePackageAcquisition",
  AfterPackageAcquisition = "AfterPackageAcquisition",
}
