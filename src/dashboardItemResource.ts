import type { TaskState } from "./taskState";

export interface DashboardItemResource {
  ChannelId: string;
  CompletedTime?: string;
  Created: string;
  DeploymentId: string;
  EnvironmentId: string;
  ErrorMessage?: string;
  HasPendingInterruptions: boolean;
  HasWarningsOrErrors: boolean;
  IsCurrent: boolean;
  IsPrevious: boolean;
  IsCompleted: boolean;
  ProjectId: string;
  QueueTime: string;
  ReleaseId: string;
  ReleaseVersion: string;
  StartTime: string;
  State: TaskState;
  TaskId: string;
  TenantId?: string;
}