import type NamedReferenceItem from "./namedReferenceItem";
import type ReferenceDataItem from "./referenceDataItem";

export default interface ProjectedTeamReferenceDataItem
  extends ReferenceDataItem {
  IsDirectlyAssigned: boolean;
  ExternalSecurityGroups: NamedReferenceItem[];
  SpaceId?: string;
}
