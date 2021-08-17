import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { CommunicationStyle } from "./communicationStyle";

export interface AzureWebAppEndpointResource extends AgentlessEndpointResource {
  AccountId: string;
  CommunicationStyle: CommunicationStyle.AzureWebApp;
  DefaultWorkerPoolId: string | undefined;
  ResourceGroupName: string | undefined;
  WebAppName: string | undefined;
  WebAppSlotName: string | undefined;
}
