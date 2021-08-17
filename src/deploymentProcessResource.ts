/* eslint-disable @typescript-eslint/consistent-type-assertions */

import ResourceWithId from "./resource";
import type DeploymentStepResource from "./deploymentStepResource";
import type { RunbookProcessResource } from "./runbookProcessResource";
import { Permission } from "./permission";
import { typeSafeHasOwnProperty } from "./utils";
import type { ICanBeVersionControlled } from "./canBeVersionControlledResource";
import type { ICommitCommand } from "./commitCommand";

interface DeploymentProcessResourceLinks {
  Self: string;
  Project: string;
  Template: string;
  Validation: string;
}

export interface IProcessResource
  extends ResourceWithId<DeploymentProcessResourceLinks> {
  Id: string;
  SpaceId: string;
  ProjectId: string;
  Steps: DeploymentStepResource[];
  LastSnapshotId?: string;
  Version: number;
}
export type DeploymentProcessResource = IProcessResource &
  ICanBeVersionControlled;
export type ModifyDeploymentProcessCommand = DeploymentProcessResource &
  ICommitCommand;

export function isDeploymentProcessResource(
  resource: IProcessResource | null | undefined
): resource is NonNullable<IProcessResource> {
  if (resource === null || resource === undefined) {
    return false;
  }

  const converted = resource as DeploymentProcessResource;
  return (
    !isRunbookProcessResource(resource) &&
    converted.Version !== undefined &&
    typeSafeHasOwnProperty(converted, "Version")
  );
}

export function isRunbookProcessResource(
  resource: IProcessResource | null | undefined
): resource is NonNullable<RunbookProcessResource> {
  if (resource === null || resource === undefined) {
    return false;
  }

  const converted = resource as RunbookProcessResource;
  return (
    converted.RunbookId !== undefined &&
    typeSafeHasOwnProperty(converted, "RunbookId")
  );
}

export function processResourcePermission(
  resource: IProcessResource
): Permission {
  const isRunbook = isRunbookProcessResource(resource);
  return isRunbook ? Permission.RunbookEdit : Permission.ProcessEdit;
}

export interface DeploymentProcessOclResource {
  Ocl: string;
}

export type ModifyDeploymentProcessOclCommand = DeploymentProcessOclResource &
  ICommitCommand;

export default DeploymentProcessResource;
