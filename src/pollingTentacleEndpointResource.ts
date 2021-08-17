import type { CommunicationStyle } from "./communicationStyle";
import type { TentacleEndpointResource } from "./tentacleEndpointResource";

export interface PollingTentacleEndpointResource
  extends TentacleEndpointResource {
  CommunicationStyle: CommunicationStyle.TentacleActive;
  Uri: string;
}
