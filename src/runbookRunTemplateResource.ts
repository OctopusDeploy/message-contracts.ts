import type { DeploymentTemplateBaseResource } from "./deploymentTemplateResource";

export interface RunbookRunTemplateResource
  extends DeploymentTemplateBaseResource {
  IsRunbookProcessModified: boolean;
}