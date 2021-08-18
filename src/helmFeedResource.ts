import type { Feed } from "./feed";
import type { FeedType } from "./feedType";
import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";

export interface HelmFeedResource extends Feed, ResourceWithId<FeedLinks> {
  FeedType: FeedType.Helm;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
