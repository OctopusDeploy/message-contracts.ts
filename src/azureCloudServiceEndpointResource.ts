import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { AzureCloudServiceEndpointDeploymentSlot } from "./azureCloudServiceEndpointDeploymentSlot";
import type { CommunicationStyle } from "./communicationStyle";

export interface AzureCloudServiceEndpointResource
  extends AgentlessEndpointResource {
  CommunicationStyle: CommunicationStyle.AzureCloudService;
  AccountId: string;
  CloudServiceName: string;
  DefaultWorkerPoolId: string | undefined;
  StorageAccountName: string;
  Slot: AzureCloudServiceEndpointDeploymentSlot;
  SwapIfPossible: boolean;
  UseCurrentInstanceCount: boolean;
}
