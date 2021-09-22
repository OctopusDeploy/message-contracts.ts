import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { OfflineDropDestinationResource } from "./offlineDropDestinationResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface OfflineDropEndpointResource extends AgentlessEndpointResource {
  ApplicationsDirectory: string;
  Destination: OfflineDropDestinationResource;
  OctopusWorkingDirectory: string;
  SensitiveVariablesEncryptionPassword: SensitiveValue;
}
