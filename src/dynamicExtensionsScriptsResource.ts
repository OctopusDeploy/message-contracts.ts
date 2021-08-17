export interface DynamicExtensionsScriptsResource {
  ConfigurationRetrieved: boolean;
  Scripts: DynamicExtensionsJsFile[];
  InstallationId: string;
  SerialHash: string;
  ServerVersion: string;
  ServerApiVersion: string;
}

export interface DynamicExtensionsJsFile {
  Url: string;
  SriHash: string;
}
