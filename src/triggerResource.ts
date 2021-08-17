/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { NewNamedResource } from "./namedResource";
import type NamedResource from "./namedResource";

interface CommonTriggerResource {
  ProjectId: string;
  IsDisabled: boolean;
  Filter: TriggerFilterResource;
  Action: TriggerActionResource;
  Description: string;
}

export type TriggerResource = NamedResource & CommonTriggerResource;

export type NewTriggerResource = NewNamedResource & CommonTriggerResource;

export interface TriggerResourceTyped<
  F extends TriggerFilterResource,
  A extends TriggerActionResource
> extends TriggerResource {
  Filter: F;
  Action: A;
}

export interface NewTriggerResourceTyped<
  F extends TriggerFilterResource,
  A extends TriggerActionResource
> extends NewTriggerResource {
  Filter: F;
  Action: A;
}

export abstract class TriggerFilterResource {
  FilterType: TriggerFilterType = undefined!;
}

export abstract class TriggerActionResource {
  ActionType: TriggerActionType = undefined!;
}

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

export enum TriggerFilterType {
  MachineFilter = "MachineFilter",
  DaysPerMonthSchedule = "DaysPerMonthSchedule",
  CronExpressionSchedule = "CronExpressionSchedule",
  ContinuousDailySchedule = "ContinuousDailySchedule",
  OnceDailySchedule = "OnceDailySchedule",
}

export enum TriggerActionType {
  AutoDeploy = "AutoDeploy",
  DeployLatestRelease = "DeployLatestRelease",
  DeployNewRelease = "DeployNewRelease",
  RunRunbook = "RunRunbook",
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
