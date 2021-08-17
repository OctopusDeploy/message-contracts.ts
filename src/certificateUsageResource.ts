import type { DeploymentTargetResource } from "./deploymentTargetResource";
import type { ProjectResource } from "./projectResource";
import type { TenantResource } from "./tenantResource";
import type { LibraryVariableSetResource } from "./libraryVariableSetResource";

export interface CertificateUsageResource {
  ProjectUsages: ProjectResource[];
  LibraryVariableSetUsages: LibraryVariableSetResource[];
  TenantUsages: TenantResource[];
  DeploymentTargetUsages: DeploymentTargetResource[];
}
