import type { PhaseProgressionResource } from "./phaseProgressionResource";

export interface LifecycleProgressionResource {
  Phases: PhaseProgressionResource[];
  NextDeployments: string[];
  NextDeploymentsMinimumRequired: number;
}
