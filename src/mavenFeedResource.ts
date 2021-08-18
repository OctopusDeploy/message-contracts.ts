import type { FeedType } from "./feedType";
import type { RetryFeed } from "./retryFeed";
import type { SensitiveValue } from "./propertyValueResource";

export interface MavenFeedResource extends RetryFeed {
  FeedType: FeedType.Maven;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
