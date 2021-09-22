import type { OfflineDropDestinationType } from "./offlineDropDestinationType";

export interface OfflineDropDestinationResource {
  DestinationType: OfflineDropDestinationType;
  DropFolderPath?: string;
}