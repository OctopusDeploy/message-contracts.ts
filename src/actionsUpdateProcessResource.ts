import type { ProcessType } from "./processType";
import type { Resource } from "./resource";

export interface ActionsUpdateProcessResource extends Resource {
  ActionIds: string[];
  ProcessId: string;
  ProcessType: ProcessType;
}
