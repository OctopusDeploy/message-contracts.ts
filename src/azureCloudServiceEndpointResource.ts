import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { AzureCloudServiceEndpointDeploymentSlot } from "./azureCloudServiceEndpointDeploymentSlot";
import type { CommunicationStyle } from "./communicationStyle";

export interface AzureCloudServiceEndpointResource
  extends AgentlessEndpointResource {
  AccountId: string;
  CloudServiceName: string;
  CommunicationStyle: CommunicationStyle.AzureCloudService;
  DefaultWorkerPoolId: string | undefined;
  Slot: AzureCloudServiceEndpointDeploymentSlot;
  StorageAccountName: string;
  SwapIfPossible: boolean;
  UseCurrentInstanceCount: boolean;
}
