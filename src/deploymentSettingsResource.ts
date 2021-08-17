import type { SpaceScopedResource } from "./spaceScopedResource";
import type { DeploymentActionPackageResource } from "./deploymentActionPackageResource";
import ResourceWithId from "./resource";
import type { ICanBeVersionControlled } from "./canBeVersionControlledResource";
import type { ICommitCommand } from "./commitCommand";

interface DeploymentSettingsResourceLinks {
  Self: string;
}

export enum GuidedFailureMode {
  EnvironmentDefault = "EnvironmentDefault",
  Off = "Off",
  On = "On",
}

export interface ConnectivityPolicy {
  SkipMachineBehavior: string;
  TargetRoles: string[];
  AllowDeploymentsToNoTargets: boolean;
  ExcludeUnhealthyTargets: boolean;
}

export interface VersioningStrategy {
  Template: string;
  DonorPackage?: DeploymentActionPackageResource;
  DonorPackageStepId?: string;
}

export interface DeploymentSettingsResource
  extends ResourceWithId<DeploymentSettingsResourceLinks>,
  SpaceScopedResource,
  ICanBeVersionControlled {
  ProjectId: string;
  ConnectivityPolicy: ConnectivityPolicy;
  DefaultGuidedFailureMode: GuidedFailureMode;
  VersioningStrategy: VersioningStrategy;
  ReleaseNotesTemplate?: string;
  DefaultToSkipIfAlreadyInstalled: boolean;
  DeploymentChangesTemplate?: string;
}
export type ModifyDeploymentSettingsCommand = DeploymentSettingsResource &
  ICommitCommand;

export interface DeploymentSettingsOclResource {
  Ocl: string;
}
export type ModifyDeploymentSettingsOclCommand = DeploymentSettingsOclResource &
  ICommitCommand;

export default DeploymentSettingsResource;
