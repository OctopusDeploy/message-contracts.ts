/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type {
  IVersionControlReference,
  VcsRef,
} from "./versionControlledResource";
import type { DayOfWeek } from "./dayOfWeek";
import type { MonthlyScheduleType } from "./monthlyScheduleType";
import type { ScheduleIntervalType } from "./scheduleIntervalType";
import { TriggerActionResource } from "./triggerActionResource";
import { TriggerActionType } from "./triggerActionType";
import { TriggerFilterResource } from "./triggerFilterResource";
import { TriggerFilterType } from "./triggerFilterType";
import { TriggerScheduleIntervalType } from "./triggerScheduleIntervalType";

export abstract class TriggerScheduleResource extends TriggerFilterResource {
  Timezone: string = undefined!;
}

export class TriggerScheduleIntervalResource {
  Interval: TriggerScheduleIntervalType = TriggerScheduleIntervalType.OnceDaily;
  HourInterval?: number;
  MinuteInterval?: number;
}

export class OnceDailyTriggerScheduleResource extends TriggerScheduleResource {
  StartTime: Date = undefined!;

  DaysOfWeek: DayOfWeek[] = undefined!;

  constructor() {
    super();
    this.FilterType = TriggerFilterType.OnceDailySchedule;
  }
}

export class ContinuousDailyTriggerScheduleResource extends TriggerScheduleResource {
  RunAfter: Date = undefined!;
  RunUntil: Date = undefined!;

  Interval: TriggerScheduleIntervalType =
    TriggerScheduleIntervalType.OnceHourly;

  HourInterval?: number;
  MinuteInterval?: number;

  DaysOfWeek: DayOfWeek[] = undefined!;

  constructor() {
    super();
    this.FilterType = TriggerFilterType.ContinuousDailySchedule;
  }
}

export class DaysPerMonthTriggerScheduleResource extends TriggerScheduleResource {
  StartTime: Date = undefined!;
  MonthlyScheduleType: MonthlyScheduleType = undefined!;
  DateOfMonth?: string;
  DayNumberOfMonth?: string;
  DayOfWeek: DayOfWeek = undefined!;

  constructor() {
    super();
    this.FilterType = TriggerFilterType.DaysPerMonthSchedule;
  }
}

export class CronTriggerScheduleResource extends TriggerScheduleResource {
  CronExpression: string = undefined!;

  constructor() {
    super();
    this.FilterType = TriggerFilterType.CronExpressionSchedule;
  }
}

export abstract class ScopedDeploymentActionResource extends TriggerActionResource {
  ChannelId: string = undefined!;
  TenantIds: string[] = [];
  TenantTags: string[] = [];
  Variables: string = undefined!;
}

export class DeployLatestReleaseActionResource extends ScopedDeploymentActionResource {
  SourceEnvironmentIds: string[];
  DestinationEnvironmentId: string = undefined!;
  ShouldRedeployWhenReleaseIsCurrent: boolean;

  constructor() {
    super();
    this.ActionType = TriggerActionType.DeployLatestRelease;
    this.ShouldRedeployWhenReleaseIsCurrent = true;
    this.SourceEnvironmentIds = [];
  }
}

export class DeployNewReleaseActionResource
  extends ScopedDeploymentActionResource
  implements IVersionControlReference {
  EnvironmentId: string = undefined!;
  VersionControlReference: VcsRef = undefined!;

  constructor() {
    super();
    this.ActionType = TriggerActionType.DeployNewRelease;
  }
}

export class ScheduleIntervalResource {
  IntervalType: ScheduleIntervalType = undefined!;
  IntervalValue: number = undefined!;
}

export class RunRunbookActionResource extends TriggerActionResource {
  EnvironmentIds: string[] = undefined!;
  RunbookId: string = undefined!;
  TenantIds: string[] = [];
  TenantTags: string[] = [];
  constructor() {
    super();
    this.ActionType = TriggerActionType.RunRunbook;
  }
}
