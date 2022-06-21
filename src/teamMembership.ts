import type { NamedReferenceItem } from "./namedReferenceItem";

export interface TeamMembership {
  UserId: string;
  TeamId: string;
  TeamName: string;
  IsDirectlyAssigned: boolean;
  ExternalSecurityGroups: NamedReferenceItem[];
  SpaceId?: string;
}
