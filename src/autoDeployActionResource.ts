import { TriggerActionResource } from "./triggerActionResource";
import { TriggerActionType } from "./triggerActionType";

export class AutoDeployActionResource extends TriggerActionResource {
  ShouldRedeployWhenMachineHasBeenDeployedTo: boolean = undefined!;

  constructor() {
    super();
    this.ActionType = TriggerActionType.AutoDeploy;
  }
}
