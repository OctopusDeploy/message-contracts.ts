export interface LibraryVariableSetUsageResource {
  Projects: ProjectUsage[];
  CountOfProjectsUserCannotSee: number;
  CountOfReleasesUserCannotSee: number;
  CountOfRunbookSnapshotsUserCannotSee: number;
}

export interface ProjectUsage {
  ProjectName: string;
  ProjectSlug: string;
  ProjectId: string;
  IsCurrentlyBeingUsedInProject: boolean;
  Releases: ReleaseUsageEntry[];
  RunbookSnapshots: RunbookSnapshotUsageEntry[];
}

export interface ReleaseUsageEntry {
  ReleaseId: string;
  ReleaseVersion: string;
}

export interface RunbookSnapshotUsageEntry {
  SnapshotId: string;
  SnapshotName: string;
}

export default LibraryVariableSetUsageResource;
