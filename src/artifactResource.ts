import type { ResourceWithId } from "./resource";

// TaskDetailsServerResource in Octopus.Server
export default interface ArtifactResource extends ResourceWithId {
  Filename: string;
  Source: string;
  ServerTaskId: string;
  Created: string;
  LogCorrelationId: string;
}
