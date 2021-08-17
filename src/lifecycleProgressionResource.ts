import type { DeploymentResource } from "./deploymentResource";
import type { TaskResource } from "./taskResource";
import type { IPhasedResource } from "./phaseResource";

export interface LifecycleProgressionResource {
  Phases: PhaseProgressionResource[];
  NextDeployments: string[];
  NextDeploymentsMinimumRequired: number;
}

export interface PhaseProgressionResource extends IPhasedResource {
  Blocked: boolean;
  Progress: PhaseProgress;
  Deployments: PhaseDeploymentResource[];
}

export enum PhaseProgress {
  Pending = "Pending",
  Current = "Current",
  Complete = "Complete",
}

export interface PhaseDeploymentResource {
  Task: TaskResource<any>;
  Deployment: DeploymentResource;
}

export default LifecycleProgressionResource;
