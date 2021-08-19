import type { NamedReferenceItem } from "./namedReferenceItem";
import type { ReferenceDataItem } from "./referenceDataItem";

export interface ProjectedTeamReferenceDataItem
  extends ReferenceDataItem {
  IsDirectlyAssigned: boolean;
  ExternalSecurityGroups: NamedReferenceItem[];
  SpaceId?: string;
}
