import type ActionProperties from "./actionProperties";
import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type { PackageReference } from "./packageReference";
import ResourceWithId from "./resource";

export interface ActionTemplateResource extends ResourceWithId {
  ActionType: string;
  CommunityActionTemplateId: string;
  Description: string;
  Name: string;
  Packages: PackageReference[];
  Parameters: ActionTemplateParameterResource[];
  Properties: ActionProperties;
  Version: number;
}
