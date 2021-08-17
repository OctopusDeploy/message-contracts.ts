import type { ActionUpdatePackageUsedBy } from "./actionUpdatePackageUsedBy";

export interface ActionUpdateRemovedPackageUsage {
  PackageReference: string;
  UsedBy: ActionUpdatePackageUsedBy;
  UsedById: string;
  UsedByName: string;
}
