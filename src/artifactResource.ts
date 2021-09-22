import type { ResourceWithId } from "./resource";

// TaskDetailsServerResource in Octopus.Server
export interface ArtifactResource extends ResourceWithId {
  Created: string;
  Filename: string;
  LogCorrelationId: string;
  ServerTaskId: string;
  Source: string;
}
