import type { ResourceWithId } from "./resource";

export default interface BuiltInFeedStatsResource extends ResourceWithId {
  TotalPackages: number;
}
