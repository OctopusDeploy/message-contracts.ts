/* eslint-disable @typescript-eslint/no-explicit-any */

import ResourceWithId from "./resource";
import type { Moment } from "moment";
import type { CommitDetail, WorkItemLink } from "./packageResource";

// TODO: Add concrete Links
export interface DeploymentResource extends IExecutionResource {
  ReleaseId: string;
  DeploymentProcessId: string;
  ChannelId: string;
  ForcePackageRedeployment: boolean;
}

export interface IExecutionResource extends ResourceWithId {
  EnvironmentId: string;
  TenantId?: string;
  ForcePackageDownload: boolean;
  SkipActions: string[];
  SpecificMachineIds: string[];
  ExcludedMachineIds: string[];
  UseGuidedFailure: boolean;
  FormValues: any;
  QueueTime?: Moment;
  QueueTimeExpiry?: Moment;
  ManifestVariableSetId: string;
  TaskId: string;
  ProjectId: string;
  Comments: string;
  Name: string;
  Created: string;
  Changes: ReleaseChanges[];
  ChangesMarkdown: string;
}

export interface CreateDeploymentResource extends CreateDeploymentBaseResource {
  ReleaseId: string;
}

export interface CreateDeploymentBaseResource {
  EnvironmentId: string;
  ProjectId: string;
  TenantId?: string;
  ForcePackageDownload: boolean;
  ForcePackageRedeployment: boolean;
  SkipActions: string[];
  SpecificMachineIds: string[];
  ExcludedMachineIds: string[];
  UseGuidedFailure: boolean;
  FormValues: any;
  QueueTime?: Moment;
  QueueTimeExpiry?: Moment;
}

export interface ReleaseChanges {
  Version: string;
  ReleaseNotes: string;
  WorkItems: WorkItemLink[];
  Commits: CommitDetail[];
  BuildInformation: ReleasePackageVersionBuildInformation[];
}

export interface ReleasePackageVersionBuildInformation {
  PackageId: string;
  Version: string;
  BuildNumber: string;
  BuildUrl: string;
  VcsType: string;
  VcsRoot: string;
  VcsCommitNumber: string;
}

export default DeploymentResource;
