import type { DeploymentServerTasks } from "./deploymentServerTask";

export interface CreateDeploymentTenantedResponseV1 {
    deploymentServerTasks: DeploymentServerTasks[];
}
