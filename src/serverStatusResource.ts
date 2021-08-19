import type { LinksCollection } from "./linksCollection";

interface ServerStatusResourceLinks {
  GCCollect: string;
  Health: string;
  RecentLogs: string;
  Self: string;
  SystemInfo: string;
  SystemReport: string;
}

export interface ServerStatusResource {
  IsDatabaseEncrypted: boolean;
  IsInMaintenanceMode: boolean;
  IsMajorMinorUpgrade: boolean;
  IsUpgradeAvailable: boolean;
  Links: LinksCollection<ServerStatusResourceLinks>;
  MaintenanceExpires: string;
  MaximumAvailableVersion: string;
  MaximumAvailableVersionCoveredByLicense: string;
}