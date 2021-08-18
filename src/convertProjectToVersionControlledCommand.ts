import type { VersionControlledPersistenceSettings } from "./projectResource";

export default interface ConvertProjectToVersionControlledCommand {
  CommitMessage: string;
  VersionControlSettings: VersionControlledPersistenceSettings;
}
