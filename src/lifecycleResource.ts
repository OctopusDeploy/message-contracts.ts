import ResourceWithId from "./resource";
import type RetentionPeriod from "./retentionPeriod";
import type { PhaseResource } from "./phaseResource";

interface LifecycleResourceLinks {
  Self: string;
  Preview: string;
  Projects: string;
}

export interface LifecycleResource
  extends ResourceWithId<LifecycleResourceLinks> {
  SpaceId: string;
  Phases: PhaseResource[];
  Name: string;
  ReleaseRetentionPolicy: RetentionPeriod;
  TentacleRetentionPolicy: RetentionPeriod;
  Description?: string;
}

export default LifecycleResource;
