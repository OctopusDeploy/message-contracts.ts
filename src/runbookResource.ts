import type NamedResource from "./namedResource";
import type TenantedDeploymentMode from "./tenantedDeploymentMode";
import type {
  ConnectivityPolicy,
  GuidedFailureMode,
} from "./deploymentSettingsResource";
import type { ICommitCommand } from "./commitCommand";
import type { NonVcsRunbookResource } from "./nonVcsRunbookResource";
import type { RunbookEnvironmentScope } from "./runbookEnvironmentScope";
import type { VcsRunbookResourceLinks } from "./vcsRunbookResourceLinks";

export type RunbookResource = NonVcsRunbookResource | VcsRunbookResource;
export type ModifyRunbookCommand = RunbookResource & ICommitCommand;

// We have to use this type assertion instead of "IsVcsRunbook", because a VcsRunbook is structurally a NonVcsRunbookResource
// I.e. they share all the same properties. This causes typescript to fail to narrow the type.
// However, if you do it this way, then it works :shrug:
export function IsNonVcsRunbook(
  runbook: NonVcsRunbookResource | VcsRunbookResource
): runbook is NonVcsRunbookResource {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return (runbook as NonVcsRunbookResource).ProjectId !== undefined;
}

export interface VcsRunbookResource
  extends NamedResource<VcsRunbookResourceLinks> {
  Description: string;
  ConnectivityPolicy: ConnectivityPolicy;
  MultiTenancyMode: TenantedDeploymentMode;
  EnvironmentScope: RunbookEnvironmentScope;
  Environments: string[];
  DefaultGuidedFailureMode: GuidedFailureMode;
}

export type NewVcsRunbookResource = Omit<
  VcsRunbookResource,
  "Id" | "Links" | "ConnectivityPolicy" | "Environments"
>;

export type NewNonVcsRunbookResource = Omit<
  NonVcsRunbookResource,
  | "Id"
  | "Links"
  | "SpaceId"
  | "RunbookProcessId"
  | "PublishedRunbookSnapshotId"
  | "ConnectivityPolicy"
  | "Environments"
>;
