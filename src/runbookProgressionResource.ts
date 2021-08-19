import type { ReferenceDataItem } from "./referenceDataItem";
import type { RunbooksDashboardItemResource } from "./runbooksDashboardItemResource";

export interface RunbookProgressionResource {
  Environments: ReferenceDataItem[];
  RunbookRuns: { [index: string]: RunbooksDashboardItemResource[] };
}