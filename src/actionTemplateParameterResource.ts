import type { ControlType } from "./controlType";
import type { PropertyValueResource } from "./propertyValueResource";
import type { ResourceWithId } from "./resource";

export interface ActionTemplateParameterDisplaySettings {
  "Octopus.SelectOptions"?: string;
  "Octopus.ControlType"?: ControlType;
}

export interface ActionTemplateParameterResource extends ResourceWithId {
  Name: string;
  Label: string;
  HelpText: string;
  DefaultValue?: PropertyValueResource;
  DisplaySettings: ActionTemplateParameterDisplaySettings;
  AllowClear?: boolean;
}
