import type { ActivityLogElement } from "./taskDetailsResource";
import type { TimeSpanString } from "./timeSpan";

export interface MachineConnectionStatus {
  CurrentTentacleVersion: string;
  LastChecked: TimeSpanString;
  Logs: ActivityLogElement[];
  MachineId: string;
  Status: string;
}
