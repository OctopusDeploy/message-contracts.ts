import type { SummaryResource } from "./summaryResource";
import type { WorkerPoolSummaryResource } from "./workerPoolSummaryResource";

export interface WorkerPoolsSummaryResource extends SummaryResource {
  WorkerPoolSummaries: WorkerPoolSummaryResource[];
}