import type { Permission } from "./permission";
import type { ProjectedTeamReferenceDataItem } from "./projectedTeamReferenceDataItem";
import type { ResourceWithId } from "./resource";
import type { UserPermissionRestriction } from "./userPermissionRestriction";

export type Permissions = Record<string, UserPermissionRestriction[]>;

export interface UserPermissionSetResource extends ResourceWithId {
  SpacePermissions: Permissions;
  SystemPermissions: Permission[];
  Teams: ProjectedTeamReferenceDataItem[];
  IsTeamsComplete: boolean;
  IsPermissionsComplete: boolean;
}
