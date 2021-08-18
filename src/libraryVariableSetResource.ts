import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type { NamedResource } from "./namedResource";

export enum VariableSetContentType {
  Variables = "Variables",
  ScriptModule = "ScriptModule",
}

export interface LibraryVariableSetResource extends NamedResource {
  Description: string;
  VariableSetId: string;
  ContentType: VariableSetContentType;
  Templates: ActionTemplateParameterResource[];
}

export default LibraryVariableSetResource;
