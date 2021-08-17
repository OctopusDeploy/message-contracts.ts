import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { OfflineDropDestinationResource } from "./offlineDropDestinationResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface OfflineDropEndpointResource extends AgentlessEndpointResource {
  Destination: OfflineDropDestinationResource;
  SensitiveVariablesEncryptionPassword: SensitiveValue;
  ApplicationsDirectory: string;
  OctopusWorkingDirectory: string;
}
