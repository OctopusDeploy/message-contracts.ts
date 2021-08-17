import type { StepUsageEntry } from "./stepUsageEntry";

export interface StepUsage {
  ProjectName: string;
  ProjectSlug: string;
  ProjectId: string;
  Steps: StepUsageEntry[];
}
