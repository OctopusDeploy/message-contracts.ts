import ResourceWithId from "./resource";
import type { ControlType } from "./controlType";
import type { LinksCollection } from "./linksCollection";
import type { PropertyValueResource } from "./propertyValueResource";

export interface TenantVariableTemplateDisplaySettings {
  "Octopus.SelectOptions"?: string;
  "Octopus.ControlType"?: ControlType;
}

export interface TenantVariableTemplateResource extends ResourceWithId {
  Name: string;
  Label: string;
  HelpText: string;
  DefaultValue?: PropertyValueResource;
  DisplaySettings: TenantVariableTemplateDisplaySettings;
  AllowClear?: boolean;
}

export interface TenantVariableResource extends ResourceWithId {
  TenantId: string;
  TenantName: string;
  LibraryVariables: { [libraryVariableSetId: string]: TenantLibraryVariable };
  ProjectVariables: { [projectId: string]: TenantProjectVariable };
  Links: LinksCollection<{}>;
}

export interface TenantLibraryVariable {
  LibraryVariableSetId: string;
  LibraryVariableSetName: string;
  Templates: TenantVariableTemplateResource[];
  Variables: { [variableId: string]: PropertyValueResource };
  Links: LinksCollection<{}>;
}

export interface TenantProjectVariable {
  ProjectId: string;
  ProjectName: string;
  Templates: TenantVariableTemplateResource[];
  Variables: {
    [environmentId: string]: { [variableId: string]: PropertyValueResource };
  };
  Links: LinksCollection<{}>;
}
