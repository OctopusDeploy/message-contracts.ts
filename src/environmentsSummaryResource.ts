import type { EnvironmentSummaryResource } from "./environmentSummaryResource";
import type { SummaryResource } from "./summaryResource";

export interface EnvironmentsSummaryResource extends SummaryResource {
  EnvironmentSummaries: EnvironmentSummaryResource[];
  MachineTenantSummaries: Record<string, number>;
  MachineTenantTagSummaries: Record<string, number>;
}