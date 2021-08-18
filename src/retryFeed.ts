import type { Feed } from "./feed";
import type { ResourceWithId } from "./resource";

export interface RetryFeed extends Feed, ResourceWithId<FeedLinks> {
  DownloadAttempts: number;
  DownloadRetryBackoffSeconds: number;
}
