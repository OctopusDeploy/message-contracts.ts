import type { StepUsage } from "./stepUsage";

export interface RunbookStepUsage extends StepUsage {
  ProcessId: string;
  RunbookId: string;
  RunbookName: string;
}
