/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { DeploymentProcessResourceLinks } from "./deploymentProcessResourceLinks";
import type { DeploymentStepResource } from "./deploymentStepResource";
import type { ICanBeVersionControlled } from "./canBeVersionControlledResource";
import type { ICommitCommand } from "./commitCommand";
import { Permission } from "./permission";
import type { ResourceWithId } from "./resource";
import type { RunbookProcessResource } from "./runbookProcessResource";
import { typeSafeHasOwnProperty } from "./utils";

export interface IProcessResource
  extends ResourceWithId<DeploymentProcessResourceLinks> {
  Id: string;
  LastSnapshotId?: string;
  ProjectId: string;
  SpaceId: string;
  Steps: DeploymentStepResource[];
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