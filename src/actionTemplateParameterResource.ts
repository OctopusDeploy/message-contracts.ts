import type { ActionTemplateParameterDisplaySettings } from "./actionTemplateParameterDisplaySettings";
import type { PropertyValueResource } from "./propertyValueResource";
import type { ResourceWithId } from "./resource";

export interface ActionTemplateParameterResource extends ResourceWithId {
  Name: string;
  Label: string;
  HelpText: string;
  DefaultValue?: PropertyValueResource;
  DisplaySettings: ActionTemplateParameterDisplaySettings;
  AllowClear?: boolean;
}
