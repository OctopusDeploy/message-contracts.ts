/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Moment } from "moment";
import type { ReleaseChanges } from "./releaseChanges";
import type { ResourceWithId } from "./resource";

// TODO: Add concrete Links
export interface DeploymentResource extends IExecutionResource {
  ReleaseId: string;
  DeploymentProcessId: string;
  ChannelId: string;
  ForcePackageRedeployment: boolean;
}

export interface IExecutionResource extends ResourceWithId {
  Changes: ReleaseChanges[];
  ChangesMarkdown: string;
  Comments: string;
  Created: string;
  EnvironmentId: string;
  ExcludedMachineIds: string[];
  ForcePackageDownload: boolean;
  FormValues: any;
  ManifestVariableSetId: string;
  Name: string;
  ProjectId: string;
  QueueTime?: Moment;
  QueueTimeExpiry?: Moment;
  SkipActions: string[];
  SpecificMachineIds: string[];
  TaskId: string;
  TenantId?: string;
  UseGuidedFailure: boolean;
}

export interface CreateDeploymentResource extends CreateDeploymentBaseResource {
  ReleaseId: string;
}

export interface CreateDeploymentBaseResource {
  EnvironmentId: string;
  ExcludedMachineIds: string[];
  ForcePackageDownload: boolean;
  ForcePackageRedeployment: boolean;
  FormValues: any;
  ProjectId: string;
  SkipActions: string[];
  SpecificMachineIds: string[];
  QueueTime?: Moment;
  QueueTimeExpiry?: Moment;
  TenantId?: string;
  UseGuidedFailure: boolean;
}
