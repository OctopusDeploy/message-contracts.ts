import type { NewSpaceScopedResource, SpaceScopedResource } from "./spaceScopedResource";
import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type { NamedResource } from "./namedResource";
import type { VariableSetContentType } from "./variableSetContentType";

export interface LibraryVariableSetResource extends NewLibraryVariableSetResource, SpaceScopedResource { }

export interface NewLibraryVariableSetResource extends NamedResource, NewSpaceScopedResource {
  Description: string;
  VariableSetId: string;
  ContentType: VariableSetContentType;
  Templates: ActionTemplateParameterResource[];
}