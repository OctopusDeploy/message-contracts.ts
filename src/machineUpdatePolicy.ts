import type { CalamariUpdateBehavior } from "./calamariUpdateBehavior";
import type { TentacleUpdateBehavior } from "./tentacleUpdateBehavior";

export interface MachineUpdatePolicy {
  CalamariUpdateBehavior: CalamariUpdateBehavior;
  TentacleUpdateBehavior: TentacleUpdateBehavior;
  TentacleUpdateAccountId: string;
}

export default MachineUpdatePolicy;
