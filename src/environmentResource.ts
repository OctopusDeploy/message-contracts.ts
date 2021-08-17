import type { NewNamedResource } from "./namedResource";
import type NamedResource from "./namedResource";
import type { ExtensionSettingsValues } from "./extensionSettingsValues";
import type {
  NewSpaceScopedResource,
  SpaceScopedResource,
} from "./spaceScopedResource";

export interface EnvironmentResourceLinks {
  Self: string;
  Machines: string;
  Metadata: string;
  SinglyScopedVariableDetails: string;
}

export interface EnvironmentResource
  extends NamedResource<EnvironmentResourceLinks>,
    SpaceScopedResource {
  Description: string;
  UseGuidedFailure: boolean;
  AllowDynamicInfrastructure: boolean;
  SortOrder: number;
  ExtensionSettings: ExtensionSettingsValues[];
}

export interface NewEnvironmentResource
  extends NewNamedResource,
    NewSpaceScopedResource {
  Description: string;
  UseGuidedFailure: boolean;
  AllowDynamicInfrastructure: boolean;
  SortOrder: number;
  ExtensionSettings: ExtensionSettingsValues[];
}

export default EnvironmentResource;
