/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type { DeploymentActionPackageResource } from "./deploymentActionPackageResource";
import type { MetadataTypeCollection } from "./dynamicFormResources";
import type { ExtensionSettingsValues } from "./extensionSettingsValues";
import type { LifecycleResource } from "./lifecycleResource";
import type { NamedResource } from "./namedResource";
import type { ProjectGroupResource } from "./projectGroupResource";
import type { SensitiveValue } from "./propertyValueResource";
import type { ResourceWithLinks } from "./resource";
import type {
  NewSpaceScopedResource,
  SpaceScopedResource,
} from "./spaceScopedResource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";
import type { GitRef } from "./versionControlledResource";

interface BaseProjectResourceLinks {
  Self: string;
  Releases: string;
  Channels: string;
  Triggers: string;
  ScheduledTriggers: string;
  OrderChannels: string;
  Variables: string;
  Progression: string;
  RunbookTaskRunDashboardItemsTemplate: string;
  DeploymentProcess: string;
  Web: string;
  Logo: string;
  Metadata: string;
  Runbooks: string;
  RunbookSnapshots: string;
  Summary: string;
  DeploymentSettings: string;
}

type VcsProjectResourceLinks = BaseProjectResourceLinks & {
  Branches: string;
};

type DatabaseProjectResourceLinks = BaseProjectResourceLinks & {
  ConvertToVcs: string;
};

type ProjectResourceLinks =
  | VcsProjectResourceLinks
  | DatabaseProjectResourceLinks;

export enum PersistenceSettingsType {
  VersionControlled = "VersionControlled",
  Database = "Database",
}

interface DatabasePersistenceSettings {
  Type: PersistenceSettingsType.Database;
}

export interface VersionControlledPersistenceSettings {
  Type: PersistenceSettingsType.VersionControlled;
  Credentials: AnonymousVcsCredentials | UsernamePasswordVcsCredentials;
  Url: string;
  DefaultBranch: string;
  BasePath: string;
}

export enum AuthenticationType {
  Anonymous = "Anonymous",
  UsernamePassword = "UsernamePassword",
}

export interface UsernamePasswordVcsCredentials {
  Type: AuthenticationType.UsernamePassword;
  Username: string;
  Password: SensitiveValue;
}

export interface AnonymousVcsCredentials {
  Type: AuthenticationType.Anonymous;
}

export function IsUsingUsernamePasswordAuth(
  T: AnonymousVcsCredentials | UsernamePasswordVcsCredentials
): T is UsernamePasswordVcsCredentials {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return (
    (T as UsernamePasswordVcsCredentials).Type ===
    AuthenticationType.UsernamePassword
  );
}

export function HasVcsProjectResourceLinks(
  links: ProjectResourceLinks
): links is VcsProjectResourceLinks {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return (links as VcsProjectResourceLinks).Branches !== undefined;
}

export function HasVersionControlledPersistenceSettings(
  T: VersionControlledPersistenceSettings | DatabasePersistenceSettings
): T is VersionControlledPersistenceSettings {
  return T.Type === PersistenceSettingsType.VersionControlled;
}

export interface ProjectResource
  extends NamedResource<ProjectResourceLinks>,
    SpaceScopedResource {
  VariableSetId: string;
  DeploymentProcessId: string;
  DiscreteChannelRelease: boolean;
  IncludedLibraryVariableSetIds: string[];
  TenantedDeploymentMode: TenantedDeploymentMode;
  ReleaseCreationStrategy: ReleaseCreationStrategy;
  Templates: ActionTemplateParameterResource[];
  AutoDeployReleaseOverrides: any[];
  LifecycleId: string;
  AutoCreateRelease: boolean;
  ClonedFromProjectId: string;
  ExtensionSettings: ExtensionSettingsValues[];
  IsVersionControlled: boolean;
  PersistenceSettings:
    | VersionControlledPersistenceSettings
    | DatabasePersistenceSettings;
  Slug: string;
  ProjectGroupId: string;
  Description: string;
  IsDisabled: boolean;
}

export type ProjectOrSummaryResource = ProjectResource | ProjectSummaryResource;

export interface ProjectSummaryResource
  extends NamedResource<BaseProjectResourceLinks>,
    SpaceScopedResource {
  Slug: string;
  ProjectGroupId: string;
  Description: string;
  IsDisabled: boolean;
}

export interface NewProjectResource extends NewSpaceScopedResource {
  Name: string;
  Description?: string;
  ProjectGroupId: string;
  LifecycleId: string;
}

export function NewProject(
  name: string,
  projectGroup: ProjectGroupResource,
  lifecycle: LifecycleResource
): NewProjectResource {
  return {
    LifecycleId: lifecycle.Id,
    Name: name,
    ProjectGroupId: projectGroup.Id,
  };
}

export interface ProjectSettingsMetadata {
  ExtensionId: string;
  Metadata: MetadataTypeCollection;
}

export interface ReleaseCreationStrategy {
  ReleaseCreationPackage: DeploymentActionPackageResource;
  ChannelId?: string;
  ReleaseCreationPackageStepId?: string;
}

export interface VersionControlCompatibilityResponse {
  Errors: string[];
  Warnings: string[];
  Notices: string[];
}

export interface ConvertProjectToVersionControlledResponse {
  Messages: string[];
}

export interface RecentlyViewedProjectIds {
  [key: string]: string[];
}

export function isVcsBranchResource(
  branch: unknown
): branch is VcsBranchResource {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return (branch as VcsBranchResource).Name !== undefined;
}

type VcsBranchResourceLinks = {
  DeploymentProcess: string;
  DeploymentSettings: string;
  Runbook: string;
  ReleaseTemplate: string;
  Channels: string;
};

export interface VcsBranchResource
  extends ResourceWithLinks<VcsBranchResourceLinks> {
  Name: GitRef;
}

export function getURISafeBranchName(branch: VcsBranchResource): string {
  return encodeURIComponent(branch.Name);
}

export function getBranchNameFromRouteParameter(
  routeParameter: string | undefined
): string | undefined {
  if (routeParameter) {
    return decodeURIComponent(routeParameter);
  }

  return undefined;
}
