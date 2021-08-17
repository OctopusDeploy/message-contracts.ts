import type ActionProperties from "./actionProperties";
import type { ActionsUpdateProcessResource } from "./actionsUpdateProcessResource";
import type { Resource } from "./resource";

export interface ActionUpdateResource extends Resource {
  ActionsToUpdate: ActionsUpdateProcessResource[];
  DefaultPropertyValues: ActionProperties;
  Overrides: ActionProperties;
  Version: number;
}
