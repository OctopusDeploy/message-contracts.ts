import type { NamedResource, NewNamedResource } from "./namedResource";
import type { TeamResource } from "./teamResource";
import type { UserResource } from "./userResource";

interface SpaceResourceLinks {
  Self: string;
  SpaceHome: string;
  Web: string;
  Logo: string;
  Search: string;
}

export interface SpaceResource extends NamedResource<SpaceResourceLinks> {
  Description?: string;
  IsDefault: boolean;
  SpaceManagersTeamMembers: string[];
  SpaceManagersTeams: string[];
  TaskQueueStopped: boolean;
}

export interface NewSpaceResource extends NewNamedResource {
  Description?: string;
  IsDefault?: boolean;
  SpaceManagersTeams?: string[];
  TaskQueueStopped?: boolean;
  SpaceManagersTeamMembers?: string[];
}

export function NewSpace(
  name: string,
  spaceManagersTeams?: TeamResource[],
  spaceManagersTeamMembers?: UserResource[]
): NewSpaceResource {
  return {
    Name: name,
    SpaceManagersTeams: spaceManagersTeams?.map((t) => t.Id),
    SpaceManagersTeamMembers: spaceManagersTeamMembers?.map((u) => u.Id),
  };
}
