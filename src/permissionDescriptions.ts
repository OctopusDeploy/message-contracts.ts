export interface PermissionDescription {
  CanApplyAtSpaceLevel: boolean;
  CanApplyAtSystemLevel: boolean;
  Description: string;
  SupportedRestrictions: string[];
}

export type PermissionDescriptions = Record<string, PermissionDescription>;
