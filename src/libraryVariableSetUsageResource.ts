import type { ProjectUsage } from "./projectUsage";

export interface LibraryVariableSetUsageResource {
  Projects: ProjectUsage[];
  CountOfProjectsUserCannotSee: number;
  CountOfReleasesUserCannotSee: number;
  CountOfRunbookSnapshotsUserCannotSee: number;
}