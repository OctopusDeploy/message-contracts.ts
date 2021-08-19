/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { IVersionControlReference } from "./versionControlledResource";
import type { ReleasePackageVersionBuildInformationResource } from "./packageResource";
import type { ResourceWithId } from "./resource";
import type { RunbookSnapshotResource } from "./runbookSnapshotResource";
import type { SpaceScopedResource } from "./spaceScopedResource";
import { typeSafeHasOwnProperty } from "./utils";

export interface SelectedPackage {
  ActionName: string;
  PackageReferenceName?: string;
  Version: string;
}

// TODO: Add concrete links
export interface ReleaseResource
  extends ISnapshotResource,
  SpaceScopedResource,
  ResourceWithId {
  ChannelId: string;
  LifecycleId: string;
  Version: string;
  ReleaseNotes: string;
  IgnoreChannelRules: boolean;
  ProjectDeploymentProcessSnapshotId: string;
  BuildInformation: ReleasePackageVersionBuildInformationResource[];
}

export interface ISnapshotResource
  extends ResourceWithId,
  IVersionControlReference {
  Assembled: string;
  ProjectId: string;
  ProjectVariableSetSnapshotId: string;
  LibraryVariableSetSnapshotIds: string[];
  SelectedPackages: SelectedPackage[];
}

export function isReleaseResource(
  resource: ISnapshotResource
): resource is NonNullable<ReleaseResource> {
  if (resource === undefined || resource === null) {
    return false;
  }

  const converted = resource as ReleaseResource;
  return (
    converted.Version !== undefined &&
    typeSafeHasOwnProperty(converted, "Version")
  );
}

export function isRunbookSnapshotResource(
  resource: ISnapshotResource
): resource is NonNullable<RunbookSnapshotResource> {
  if (resource === undefined || resource === null) {
    return false;
  }

  const converted = resource as RunbookSnapshotResource;
  return (
    converted.Name !== undefined && typeSafeHasOwnProperty(converted, "Name")
  );
}