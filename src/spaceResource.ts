import type NamedResource from "./namedResource";
import type { NewNamedResource } from "./namedResource";

interface SpaceResourceLinks {
  Self: string;
  SpaceHome: string;
  Web: string;
  Logo: string;
  Search: string;
}

export interface SpaceResource
  extends NamedResource<SpaceResourceLinks>,
    CommonSpaceResource {}

export interface NewSpaceResource
  extends NewNamedResource,
    CommonSpaceResource {}

interface CommonSpaceResource {
  Description?: string;
  SpaceManagersTeams: string[];
  IsDefault: boolean;
  TaskQueueStopped: boolean;
  SpaceManagersTeamMembers: string[];
}
