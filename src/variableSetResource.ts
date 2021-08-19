import type { ResourceWithId } from "./resource";
import type { ScopeValues } from "./scopeValues";
import type { VariableResource } from "./variableResource";

export interface VariableSetResource extends ResourceWithId<{ Self: string }> {
  OwnerId: string;
  ScopeValues: ScopeValues;
  Variables: VariableResource[];
  Version: number;
}