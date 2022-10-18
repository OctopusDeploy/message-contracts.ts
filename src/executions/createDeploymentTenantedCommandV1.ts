import type { CreateExecutionCommandV1 } from "./createExecutionCommandV1";

export interface CreateDeploymentTenantedCommandV1 extends CreateExecutionCommandV1 {
    releaseVersion: string;
    environmentName: string;
    tenants: string[];
    tenantTags: string[];
    forcePackageRedeployment?: boolean;
    updateVariableSnapshot?: boolean;
}
