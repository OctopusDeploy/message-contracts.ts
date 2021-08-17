import type { LinksCollection } from "./linksCollection";

export interface TenantMissingVariableResource {
  TenantId: string;
  MissingVariables: MissingVariableResource[];
  Links: LinksCollection<{}>;
}

export interface MissingVariableResource {
  Links: LinksCollection<{}>;
  ProjectId?: string;
  EnvironmentId?: string;
  LibraryVariableSetId?: string;
  VariableTemplateName: string;
  VariableTemplateId: string;
}
