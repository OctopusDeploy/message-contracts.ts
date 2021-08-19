import type { ResourceWithId } from "./resource";

// TaskDetailsServerResource in Octopus.Server
export interface ArtifactResource extends ResourceWithId {
  Filename: string;
  Source: string;
  ServerTaskId: string;
  Created: string;
  LogCorrelationId: string;
}
