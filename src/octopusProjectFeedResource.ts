import type { Feed } from "./feed";
import type { FeedLinks } from "./feedLinks";
import type { FeedType } from "./feedType";
import type { ResourceWithId } from "./resource";

export interface OctopusProjectFeedResource
  extends Feed,
  ResourceWithId<FeedLinks> {
  FeedType: FeedType.OctopusProject;
  Name: string;
}