import type { ProcessReferenceDataItem } from "./referenceDataItem";
import type { ReferenceDataItem } from "./referenceDataItem";

export interface ScopeValues {
  Actions: ReferenceDataItem[];
  Channels: ReferenceDataItem[];
  Environments: ReferenceDataItem[];
  Machines: ReferenceDataItem[];
  Roles: ReferenceDataItem[];
  TenantTags: ReferenceDataItem[];
  Processes: ProcessReferenceDataItem[];
}
