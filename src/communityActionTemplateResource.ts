import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type NamedResource from "./namedResource";
import type ActionProperties from "./actionProperties";

export interface CommunityActionTemplateResource extends NamedResource {
  Type: string;
  Description: string;
  Author: string;
  Website: string;
  HistoryUrl: string;
  Version: number;
  Properties: ActionProperties;
  Parameters: ActionTemplateParameterResource[];
}
