import type DashboardItemResource from "./dashboardItemResource";
import type DashboardProjectGroupResource from "./dashboardProjectGroupResource";
import type DashboardTenantResource from "./dashboardTenantResource";
import type DashboardProjectResource from "./dashboardProjectResource";
import type DashboardEnvironmentResource from "./dashboardEnvironmentResource";
import type { ResourceWithLinks } from "./resource";

export interface DashboardResource extends ResourceWithLinks {
  ProjectLimit?: number;
  IsFiltered: boolean;
  Items: DashboardItemResource[];
  PreviousItems: DashboardItemResource[] | null;
  Tenants: DashboardTenantResource[];
  Environments: DashboardEnvironmentResource[];
  ProjectGroups: DashboardProjectGroupResource[];
  Projects: DashboardProjectResource[];
}

export default DashboardResource;
