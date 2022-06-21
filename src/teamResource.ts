import type { MixedSpaceResource } from "./mixedSpaceResource";
import type { NamedReferenceItem } from "./namedReferenceItem";
import type { NamedResource } from "./namedResource";

export interface TeamResource extends NamedResource, MixedSpaceResource {
  ExternalSecurityGroups: NamedReferenceItem[];
  MemberUserIds: string[];
  CanBeDeleted: boolean;
  CanBeRenamed: boolean;
  CanChangeMembers: boolean;
  Description: string;
  // can change exists at team level to support built in teams
  CanChangeRoles: boolean;
}

export interface TeamNameResource extends NamedResource {
  Name: string;
}
