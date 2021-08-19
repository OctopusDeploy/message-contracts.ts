import type { ResourceWithId } from "./resource";

export interface DashboardConfigurationResource extends ResourceWithId {
  IncludedProjectGroupIds: string[];
  IncludedProjectIds: string[];
  IncludedEnvironmentIds: string[];
  IncludedTenantIds: string[];
  IncludedTenantTags: string[];
  ProjectLimit?: number;
}
