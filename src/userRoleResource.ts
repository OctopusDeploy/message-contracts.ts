import type NamedResource from "./namedResource";
import type { Permission } from "./permission";

export const UserRoleConstants = {
  SpaceManagerRole: "userroles-spacemanager",
};

export interface UserRoleResource extends NamedResource {
  Description: string;
  SupportedRestrictions: string[];
  SpacePermissionDescriptions: string[];
  SystemPermissionDescriptions: string[];
  CanBeDeleted: boolean;
  GrantedSpacePermissions: Permission[];
  GrantedSystemPermissions: Permission[];
}

export default UserRoleResource;
