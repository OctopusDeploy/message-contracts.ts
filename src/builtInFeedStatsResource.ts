import type { ResourceWithId } from "./resource";

export interface BuiltInFeedStatsResource extends ResourceWithId {
  TotalPackages: number;
}
