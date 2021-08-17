import type { AADCredentialType } from "./aadCredentialType";
import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { AzureServiceFabricSecurityMode } from "./azureServiceFabricSecurityMode";
import type { CommunicationStyle } from "./communicationStyle";
import type { SensitiveValue } from "./propertyValueResource";

export interface AzureServiceFabricClusterEndpointResource
  extends AgentlessEndpointResource {
  AadClientCredentialSecret: string;
  AadCredentialType: AADCredentialType;
  AadUserCredentialUsername: string;
  AadUserCredentialPassword: SensitiveValue;
  ClientCertVariable: string;
  CertificateStoreLocation: string;
  CertificateStoreName: string;
  CommunicationStyle: CommunicationStyle.AzureServiceFabricCluster;
  ConnectionEndpoint: string;
  DefaultWorkerPoolId: string | undefined;
  SecurityMode: AzureServiceFabricSecurityMode;
  ServerCertThumbprint: string;
}
