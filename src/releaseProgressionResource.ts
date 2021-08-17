import type DashboardItemResource from "./dashboardItemResource";
import type ReleaseResource from "./releaseResource";
import type RetentionPeriod from "./retentionPeriod";
import type ChannelProgressionResource from "./channelProgressionResource";

export interface ReleaseProgressionResource {
  Release: ReleaseResource;
  Channel: ChannelProgressionResource;
  Deployments: { [index: string]: DashboardItemResource[] };
  NextDeployments: string[];
  HasUnresolvedDefect: boolean;
  ReleaseRetentionPeriod: RetentionPeriod;
  TentacleRetentionPeriod: RetentionPeriod;
}

export default ReleaseProgressionResource;
