import ResourceWithId from "./resource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface DashboardProjectResource extends ResourceWithId {
  Name: string;
  IsDisabled: boolean;
  Slug: string;
  ProjectGroupId: string;
  EnvironmentIds: string[];
  TenantedDeploymentMode: TenantedDeploymentMode;
  CanPerformUntenantedDeployment: boolean;
}

export default DashboardProjectResource;
