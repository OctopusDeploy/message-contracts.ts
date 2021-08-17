import type { CommunicationStyle } from "./communicationStyle";
import type { TentacleEndpointResource } from "./tentacleEndpointResource";

export interface ListeningTentacleEndpointResource
  extends TentacleEndpointResource {
  CommunicationStyle: CommunicationStyle.TentaclePassive;
  Uri: string;
  ProxyId: string | undefined;
}
