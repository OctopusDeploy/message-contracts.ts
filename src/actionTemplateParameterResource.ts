import type { ActionTemplateParameterDisplaySettings } from "./actionTemplateParameterDisplaySettings";
import type { PropertyValueResource } from "./propertyValueResource";
import ResourceWithId from "./resource";

export interface ActionTemplateParameterResource extends ResourceWithId {
  AllowClear?: boolean;
  DefaultValue?: PropertyValueResource;
  DisplaySettings: ActionTemplateParameterDisplaySettings;
  HelpText: string;
  Label: string;
  Name: string;
}
