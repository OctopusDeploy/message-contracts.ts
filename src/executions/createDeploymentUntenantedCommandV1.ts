import type { CreateExecutionCommandV1 } from "./createExecutionCommandV1";

export interface CreateDeploymentUntenantedCommandV1 extends CreateExecutionCommandV1 {
    releaseVersion: string;
    environmentNames: string[];
    forcePackageRedeployment?: boolean;
    updateVariableSnapshot?: boolean;
}
