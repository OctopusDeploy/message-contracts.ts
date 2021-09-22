import type { DeploymentResource } from "./deploymentResource";
import type { TaskResource } from "./taskResource";

export interface PhaseDeploymentResource {
  Deployment: DeploymentResource;
  Task: TaskResource<any>;
}
