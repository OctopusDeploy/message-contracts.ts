import type { NamedReferenceItem } from "./namedReferenceItem";
import type { ReferenceDataItem } from "./referenceDataItem";

export interface ProjectedTeamReferenceDataItem
  extends ReferenceDataItem {
  ExternalSecurityGroups: NamedReferenceItem[];
  IsDirectlyAssigned: boolean;
  SpaceId?: string;
}
