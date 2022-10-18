import type { CreateExecutionCommandV1 } from "./createExecutionCommandV1";

export interface CreateRunbookRunCommandV1 extends CreateExecutionCommandV1 {
    runbookName: string;
    environmentNames: string[];
    tenants?: string[];
    tenantTags?: string[];
    snapshot?: string;
}
