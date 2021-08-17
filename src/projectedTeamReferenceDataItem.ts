import type ReferenceDataItem from "./referenceDataItem";
import type NamedReferenceItem from "./namedReferenceItem";

export interface ProjectedTeamReferenceDataItem extends ReferenceDataItem {
  IsDirectlyAssigned: boolean;
  ExternalSecurityGroups: NamedReferenceItem[];
  SpaceId?: string;
}

export default ProjectedTeamReferenceDataItem;
