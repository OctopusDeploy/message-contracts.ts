import type { LibraryVariableSetUsageEntry } from "./libraryVariableSetUsageEntry";
import type { ProjectVariableSetUsage } from "./projectVariableSetUsage";
import type { ReleaseUsage } from "./releaseUsage";
import type { RunbookSnapshotUsage } from "./runbookSnapshotUsage";
import type { RunbookStepUsage } from "./runbookStepUsage";
import type { StepUsage } from "./stepUsage";
import type { TargetUsageEntry } from "./targetUsageEntry";

export interface AccountUsageResource {
  DeploymentProcesses: StepUsage[];
  LibraryVariableSets: LibraryVariableSetUsageEntry[];
  ProjectVariableSets: ProjectVariableSetUsage[];
  Releases: ReleaseUsage[];
  RunbookProcesses: RunbookStepUsage[];
  RunbookSnapshots: RunbookSnapshotUsage[];
  Targets: TargetUsageEntry[];
}
