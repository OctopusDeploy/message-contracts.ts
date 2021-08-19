import type { TaskState } from "./taskState";

export interface RunbooksDashboardItemResource {
  Id: string;
  ProjectId: string;
  EnvironmentId: string;
  RunbookId: string;
  RunbookSnapshotId: string;
  RunbookSnapshotName: string;
  RunbookSnapshotNotes: string;
  RunBy: string;
  TaskId: string;
  TenantId?: string;
  Created: string;
  QueueTime: string;
  StartTime: string;
  CompletedTime?: string;
  State: TaskState;
  HasPendingInterruptions: boolean;
  HasWarningsOrErrors: boolean;
  ErrorMessage?: string;
  Duration?: string;
  IsCompleted: boolean;
}