import type { TriggerActionResource } from "./triggerActionResource";
import type { TriggerFilterResource } from "./triggerFilterResource";

export interface CommonTriggerResource {
  Action: TriggerActionResource;
  Description: string;
  Filter: TriggerFilterResource;
  IsDisabled: boolean;
  ProjectId: string;
}