import type { AgentlessEndpointResource } from "./agentlessEndpointResource";

export interface CloudRegionEndpointResource extends AgentlessEndpointResource {
  DefaultWorkerPoolId: string | undefined;
}
