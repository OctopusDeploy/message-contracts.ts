import ResourceWithId from "./resource";
import type { ProcessType } from "./processType";

export interface ActionTemplateUsageResource extends ResourceWithId {
  ActionId: string;
  ActionName: string;
  ActionTemplateId: string;
  DeploymentProcessId: string;
  ProcessId: string;
  ProcessType: ProcessType;
  ProjectId: string;
  ProjectName: string;
  ProjectSlug: string;
  RunbookId: string;
  RunbookName: string;
  StepId: string;
  StepName: string;
  Version: string;
}
