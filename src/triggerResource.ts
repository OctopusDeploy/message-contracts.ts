import type { NamedResource, NewNamedResource } from "./namedResource";
import type { CommonTriggerResource } from "./commonTriggerResource";

export type TriggerResource = NamedResource & CommonTriggerResource;
export type NewTriggerResource = NewNamedResource & CommonTriggerResource;

export function isExistingTriggerResource(
  resource: TriggerResource | NewTriggerResource
): resource is TriggerResource {
  return (resource as TriggerResource).Links !== undefined;
}