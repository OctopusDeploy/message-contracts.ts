import type { IPhasedResource } from "./phaseResource";
import type { PhaseDeploymentResource } from "./phaseDeploymentResource";
import type { PhaseProgress } from "./phaseProgress";

export interface PhaseProgressionResource extends IPhasedResource {
  Blocked: boolean;
  Deployments: PhaseDeploymentResource[];
  Progress: PhaseProgress;
}
