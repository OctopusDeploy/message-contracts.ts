export interface PermissionDescription {
  Description: string;
  SupportedRestrictions: string[];
  CanApplyAtSpaceLevel: boolean;
  CanApplyAtSystemLevel: boolean;
}
export type PermissionDescriptions = Record<string, PermissionDescription>;
