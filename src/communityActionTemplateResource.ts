import type { ActionProperties } from "./actionProperties";
import type { ActionTemplateParameterResource } from "./actionTemplateParameterResource";
import type { NamedResource } from "./namedResource";

export interface CommunityActionTemplateResource extends NamedResource {
  Author: string;
  Description: string;
  HistoryUrl: string;
  Parameters: ActionTemplateParameterResource[];
  Properties: ActionProperties;
  Type: string;
  Version: number;
  Website: string;
}
