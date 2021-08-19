import type { ResourceWithId } from "./resource";

export interface DashboardTenantResource extends ResourceWithId {
  Name: string;
  ProjectEnvironments: { [projectId: string]: string[] };
  TenantTags: string[];
}
