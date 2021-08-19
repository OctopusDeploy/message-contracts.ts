import type { ResourceWithId } from "./resource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface DashboardProjectResource extends ResourceWithId {
  CanPerformUntenantedDeployment: boolean;
  EnvironmentIds: string[];
  IsDisabled: boolean;
  Name: string;
  ProjectGroupId: string;
  Slug: string;
  TenantedDeploymentMode: TenantedDeploymentMode;
}
