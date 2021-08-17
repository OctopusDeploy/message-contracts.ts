import type { TaskState } from "./taskState";

export interface DashboardItemResource {
  ProjectId: string;
  EnvironmentId: string;
  ReleaseId: string;
  DeploymentId: string;
  TaskId: string;
  TenantId?: string;
  ChannelId: string;
  ReleaseVersion: string;

  Created: string;
  QueueTime: string;
  StartTime: string;
  CompletedTime?: string;

  State: TaskState;

  HasPendingInterruptions: boolean;
  HasWarningsOrErrors: boolean;
  ErrorMessage?: string;

  IsCurrent: boolean;
  IsPrevious: boolean;
  IsCompleted: boolean;
}

export default DashboardItemResource;
