import type { RunbookRunResource } from "./runbookRunResource"
// import type { Moment } from "moment";

export class RunbookRunParameters {
  EnvironmentId?: string
  EnvironmentIds?: string[] = []
  ExcludedMachineIds: string[] = []
  ForcePackageDownload: boolean = false
  FormValues: any
  ProjectId?: string
  QueueTime?: string
  QueueTimeExpiry?: string
  RunbookId?: string
  RunbookSnapshotNameOrId?: string
  SkipActions: string[] = []
  SpecificMachineIds: string[] = []
  TenantId?: string
  TenantIds?: string[]
  TenantTagNames?: string[]
  UseDefaultSnapshot: boolean = true
  UseGuidedFailure?: boolean

  public static MapFrom(runbookRun: RunbookRunResource): RunbookRunParameters {
    return {
      EnvironmentId: runbookRun.EnvironmentId,
      ExcludedMachineIds: runbookRun.ExcludedMachineIds != null ? runbookRun.ExcludedMachineIds : [],
      ForcePackageDownload: runbookRun.ForcePackageDownload,
      FormValues: runbookRun.FormValues ?? {},
      ProjectId: runbookRun.ProjectId,
      QueueTime: runbookRun.QueueTime?.toString(),
      QueueTimeExpiry: runbookRun.QueueTimeExpiry?.toString(),
      RunbookId: runbookRun.RunbookId,
      SkipActions: runbookRun.SkipActions != null ? runbookRun.SkipActions : [],
      SpecificMachineIds: runbookRun.SpecificMachineIds != null ? runbookRun.SpecificMachineIds : [],
      TenantId: runbookRun.TenantId,
      UseDefaultSnapshot: true,
      UseGuidedFailure: runbookRun.UseGuidedFailure,
    };
  }
}