import type { ConnectivityPolicy } from "./deploymentSettingsResource";
import type { GuidedFailureMode } from "./deploymentSettingsResource";
import type { NamedResource } from "./namedResource";
import type { RunbookEnvironmentScope } from "./runbookEnvironmentScope";
import type { RunbookResourceLinks } from "./runbookResourceLinks";
import type { RunbookRetentionPeriod } from "./retentionPeriod";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface NonVcsRunbookResource
  extends NamedResource<RunbookResourceLinks> {
  ConnectivityPolicy: ConnectivityPolicy;
  DefaultGuidedFailureMode: GuidedFailureMode;
  Description: string;
  Environments: string[];
  EnvironmentScope: RunbookEnvironmentScope;
  MultiTenancyMode: TenantedDeploymentMode;
  RunbookProcessId: string;
  RunRetentionPolicy: RunbookRetentionPeriod;
  ProjectId: string;
  PublishedRunbookSnapshotId?: string;
  SpaceId: string;
}
