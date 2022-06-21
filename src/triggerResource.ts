import type { CommonTriggerResource } from "./commonTriggerResource";
import type { NamedResource, NewNamedResource } from "./namedResource";

export type TriggerResource = NamedResource & CommonTriggerResource;
export type NewTriggerResource = NewNamedResource & CommonTriggerResource;

export function isExistingTriggerResource(
  resource: TriggerResource | NewTriggerResource
): resource is TriggerResource {
  return (resource as TriggerResource).Links !== undefined;
}
