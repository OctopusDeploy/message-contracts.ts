import type { ResourceWithId } from "./resource";

export enum UpgradeNotificationMode {
  AlwaysShow = "AlwaysShow",
  ShowOnlyMajorMinor = "ShowOnlyMajorMinor",
  NeverShow = "NeverShow",
}

export interface UpgradeConfigurationResource extends ResourceWithId {
  NotificationMode: UpgradeNotificationMode;
}

export default UpgradeConfigurationResource;
