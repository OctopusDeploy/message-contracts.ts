import type { VersionControlledPersistenceSettings } from "./projectResource";

export interface ConvertProjectToVersionControlledCommand {
  CommitMessage: string;
  VersionControlSettings: VersionControlledPersistenceSettings;
}

export default ConvertProjectToVersionControlledCommand;
