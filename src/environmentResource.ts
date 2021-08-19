import type { NamedResource, NewNamedResource } from "./namedResource";
import type {
  NewSpaceScopedResource,
  SpaceScopedResource,
} from "./spaceScopedResource";
import type { EnvironmentResourceLinks } from "./environmentResourceLinks";
import type { ExtensionSettingsValues } from "./extensionSettingsValues";

export interface EnvironmentResource
  extends NamedResource<EnvironmentResourceLinks>,
  SpaceScopedResource {
  AllowDynamicInfrastructure: boolean;
  Description: string;
  ExtensionSettings: ExtensionSettingsValues[];
  SortOrder: number;
  UseGuidedFailure: boolean;
}

export interface NewEnvironmentResource
  extends NewNamedResource,
  NewSpaceScopedResource {
  AllowDynamicInfrastructure: boolean;
  Description: string;
  ExtensionSettings: ExtensionSettingsValues[];
  SortOrder: number;
  UseGuidedFailure: boolean;
}
