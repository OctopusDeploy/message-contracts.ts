import type { ResourceWithId } from "./resource";

export enum DashboardRenderMode {
  VirtualizeColumns = "VirtualizeColumns",
  VirtualizeRowsAndColumns = "VirtualizeRowsAndColumns",
}

export interface PerformanceConfigurationResource
  extends ResourceWithId<{ Self: string }> {
  DefaultDashboardRenderMode: DashboardRenderMode;
}