import { TriggerFilterType } from "./triggerFilterType";
import { TriggerFilterResource } from "./triggerFilterResource";

export class MachineFilterResource extends TriggerFilterResource {
  EnvironmentIds: string[] = undefined!;
  Roles: string[] = undefined!;
  EventGroups: string[] = undefined!;
  EventCategories: string[] = undefined!;

  constructor() {
    super();
    this.FilterType = TriggerFilterType.MachineFilter;
  }
}