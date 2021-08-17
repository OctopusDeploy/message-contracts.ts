export interface DynamicExtensionsFeaturesMetadataResource {
  Features: DynamicExtensionsFeatureMetadata[];
}

export interface DynamicExtensionsFeatureMetadata {
  Key: string;
  Name: string;
  Description: string;
  Options: Record<string, string>;
  Default: string;
}
