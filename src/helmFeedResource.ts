import type { Feed } from "./feed";
import type { FeedLinks } from "./feedLinks";
import type { FeedType } from "./feedType";
import type { SensitiveValue } from "./propertyValueResource";
import type { ResourceWithId } from "./resource";

export interface HelmFeedResource extends Feed, ResourceWithId<FeedLinks> {
  FeedType: FeedType.Helm;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
