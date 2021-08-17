import type DeploymentActionResource from "./deploymentActionResource";
import type ActionProperties from "./actionProperties";
import ResourceWithId from "./resource";

export interface DeploymentStepResource extends ResourceWithId {
  Id: string;
  Name: string;
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

export default DeploymentStepResource;
