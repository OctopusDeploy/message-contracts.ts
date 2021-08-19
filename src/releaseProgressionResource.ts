import type { ChannelProgressionResource } from "./channelProgressionResource";
import type { DashboardItemResource } from "./dashboardItemResource";
import type { ReleaseResource } from "./releaseResource";
import type { RetentionPeriod } from "./retentionPeriod";

export interface ReleaseProgressionResource {
  Release: ReleaseResource;
  Channel: ChannelProgressionResource;
  Deployments: { [index: string]: DashboardItemResource[] };
  NextDeployments: string[];
  HasUnresolvedDefect: boolean;
  ReleaseRetentionPeriod: RetentionPeriod;
  TentacleRetentionPeriod: RetentionPeriod;
}