import type DashboardEnvironmentResource from "./dashboardEnvironmentResource";
import type DashboardItemResource from "./dashboardItemResource";
import type DashboardProjectGroupResource from "./dashboardProjectGroupResource";
import type DashboardProjectResource from "./dashboardProjectResource";
import type DashboardTenantResource from "./dashboardTenantResource";
import type { ResourceWithLinks } from "./resource";

export default interface DashboardResource extends ResourceWithLinks {
  Environments: DashboardEnvironmentResource[];
  IsFiltered: boolean;
  Items: DashboardItemResource[];
  PreviousItems: DashboardItemResource[] | null;
  ProjectGroups: DashboardProjectGroupResource[];
  ProjectLimit?: number;
  Projects: DashboardProjectResource[];
  Tenants: DashboardTenantResource[];
}
