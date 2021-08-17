import type TimeSpanString from "./timeSpan";
import type { ActivityLogElement } from "./taskDetailsResource";

export interface MachineConnectionStatus {
  MachineId: string;
  Logs: ActivityLogElement[];
  Status: string;
  CurrentTentacleVersion: string;
  LastChecked: TimeSpanString;
}

export default MachineConnectionStatus;
