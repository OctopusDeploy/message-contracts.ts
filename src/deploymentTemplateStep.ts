import type { MachineDeploymentPreview } from "./deploymentPreviewResource";
import type { ReferenceDataItem } from "./referenceDataItem";

export interface DeploymentTemplateStep {
  ActionId: string;
  ActionName: string;
  ActionNumber: string;
  Roles: string[];
  Machines: MachineDeploymentPreview[];
  CanBeSkipped: boolean;
  IsDisabled: boolean;
  HasNoApplicableMachines: boolean;
  UnavailableMachines: ReferenceDataItem[];
  ExcludedMachines: ReferenceDataItem[];
}
