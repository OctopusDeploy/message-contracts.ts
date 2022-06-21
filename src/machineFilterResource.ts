import { TriggerFilterResource } from "./triggerFilterResource";
import { TriggerFilterType } from "./triggerFilterType";

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
