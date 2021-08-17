import type SummaryResource from "./summaryResource";
import type EnvironmentSummaryResource from "./environmentSummaryResource";

export interface EnvironmentsSummaryResource extends SummaryResource {
  EnvironmentSummaries: EnvironmentSummaryResource[];
  MachineTenantSummaries: Record<string, number>;
  MachineTenantTagSummaries: Record<string, number>;
}

export default EnvironmentsSummaryResource;
