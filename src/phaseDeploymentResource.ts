import type DeploymentResource from "./deploymentResource";
import type { TaskResource } from "./taskResource";

export interface PhaseDeploymentResource {
  Task: TaskResource<any>;
  Deployment: DeploymentResource;
}
