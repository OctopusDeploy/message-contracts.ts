import type { TriggerActionType } from "./triggerActionType";

export abstract class TriggerActionResource {
  ActionType: TriggerActionType = undefined!;
}
