import type { PhaseProgressionResource } from "./phaseProgressionResource";

export default interface LifecycleProgressionResource {
  Phases: PhaseProgressionResource[];
  NextDeployments: string[];
  NextDeploymentsMinimumRequired: number;
}
