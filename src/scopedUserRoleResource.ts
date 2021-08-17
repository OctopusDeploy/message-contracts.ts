import ResourceWithId from "./resource";
import type { MixedSpaceResource } from "./mixedSpaceResource";

export interface ScopedUserRoleResource
  extends CommonScopedUserRoleResource,
  ResourceWithId { }

export type NewScopedUserRoleResource = CommonScopedUserRoleResource;

interface CommonScopedUserRoleResource extends MixedSpaceResource {
  UserRoleId: string;
  TeamId: string;
  ProjectGroupIds: string[];
  ProjectIds: string[];
  EnvironmentIds: string[];
  TenantIds: string[];
}

export default ScopedUserRoleResource;
