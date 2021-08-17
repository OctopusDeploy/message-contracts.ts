import type { MetadataTypeCollection } from "./dynamicFormResources";

export interface ExtensionSettingsValues {
  ExtensionId: string;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  Values: Record<string, any>;
}

export interface EnvironmentSettingsMetadata {
  ExtensionId: string;
  Metadata: MetadataTypeCollection;
}
