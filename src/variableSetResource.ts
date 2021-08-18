import type {
  ProcessReferenceDataItem,
  ReferenceDataItem,
} from "./referenceDataItem";
import type { ResourceWithId } from "./resource";
import type { VariableResource } from "./variableResource";

export interface VariableSetResource extends ResourceWithId<{ Self: string }> {
  OwnerId: string;
  ScopeValues: ScopeValues;
  Variables: VariableResource[];
  Version: number;
}

export interface ScopeValues {
  Actions: ReferenceDataItem[];
  Channels: ReferenceDataItem[];
  Environments: ReferenceDataItem[];
  Machines: ReferenceDataItem[];
  Roles: ReferenceDataItem[];
  TenantTags: ReferenceDataItem[];
  Processes: ProcessReferenceDataItem[];
}
