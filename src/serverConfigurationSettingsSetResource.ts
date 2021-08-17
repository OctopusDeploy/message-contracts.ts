import ResourceWithId from "./resource";

export interface ServerConfigurationSettingsValueResource {
  Key: string;
  Value: string;
  Description: string;
}

export interface ServerConfigurationSettingsSetResource extends ResourceWithId {
  ConfigurationSet: string;
  ConfigurationValues: ServerConfigurationSettingsValueResource[];
}

export default ServerConfigurationSettingsSetResource;
