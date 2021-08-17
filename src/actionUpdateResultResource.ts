import type { ActionUpdateOutcome } from "./actionUpdateOutcome";
import type { ActionUpdateRemovedPackageUsage } from "./actionUpdateRemovedPackageUsage";

export interface ActionUpdateResultResource {
  Id: string;
  Outcome: ActionUpdateOutcome;
  NamesOfNewParametersMissingDefaultValue: string[];
  ManualMergeRequiredReasonsByPropertyName: {};
  RemovedPackageUsages: ActionUpdateRemovedPackageUsage[];
}
