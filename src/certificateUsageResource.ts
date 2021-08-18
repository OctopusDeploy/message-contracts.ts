import type { DeploymentTargetResource } from "./deploymentTargetResource";
import type { LibraryVariableSetResource } from "./libraryVariableSetResource";
import type { ProjectResource } from "./projectResource";
import type { TenantResource } from "./tenantResource";

export interface CertificateUsageResource {
  ProjectUsages: ProjectResource[];
  LibraryVariableSetUsages: LibraryVariableSetResource[];
  TenantUsages: TenantResource[];
  DeploymentTargetUsages: DeploymentTargetResource[];
}
