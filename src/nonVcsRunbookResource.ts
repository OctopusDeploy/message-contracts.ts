import type {
  ConnectivityPolicy,
  GuidedFailureMode,
} from "./deploymentSettingsResource";
import type { NamedResource } from "./namedResource";
import type { RunbookRetentionPeriod } from "./retentionPeriod";
import type { RunbookEnvironmentScope } from "./runbookEnvironmentScope";
import type { RunbookResourceLinks } from "./runbookResourceLinks";
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
