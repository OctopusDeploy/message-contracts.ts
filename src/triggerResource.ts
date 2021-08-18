/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { NamedResource, NewNamedResource } from "./namedResource";
import { TriggerActionResource } from "./triggerActionResource";
import { TriggerActionType } from "./triggerActionType";
import { TriggerFilterResource } from "./triggerFilterResource";
import { TriggerFilterType } from "./triggerFilterType";

interface CommonTriggerResource {
  ProjectId: string;
  IsDisabled: boolean;
  Filter: TriggerFilterResource;
  Action: TriggerActionResource;
  Description: string;
}

export type TriggerResource = NamedResource & CommonTriggerResource;

export type NewTriggerResource = NewNamedResource & CommonTriggerResource;

export class MachineFilterResource extends TriggerFilterResource {
  EnvironmentIds: string[] = undefined!;
  Roles: string[] = undefined!;
  EventGroups: string[] = undefined!;
  EventCategories: string[] = undefined!;

  constructor() {
    super();
    this.FilterType = TriggerFilterType.MachineFilter;
  }
}

export class AutoDeployActionResource extends TriggerActionResource {
  ShouldRedeployWhenMachineHasBeenDeployedTo: boolean = undefined!;

  constructor() {
    super();
    this.ActionType = TriggerActionType.AutoDeploy;
  }
}

export enum TriggerActionCategory {
  Deployment = "Deployment",
  Runbook = "Runbook",
}

export function isExistingTriggerResource(
  resource: TriggerResource | NewTriggerResource
): resource is TriggerResource {
  return (resource as TriggerResource).Links !== undefined;
}

export default TriggerResource;
