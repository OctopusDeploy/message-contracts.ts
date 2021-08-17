export interface OfflineDropDestinationResource {
  DestinationType: OfflineDropDestinationType;
  DropFolderPath?: string;
}

export enum OfflineDropDestinationType {
  Artifact = "Artifact",
  FileSystem = "FileSystem",
}
