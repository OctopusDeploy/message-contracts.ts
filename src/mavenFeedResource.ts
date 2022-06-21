import type { FeedType } from "./feedType";
import type { SensitiveValue } from "./propertyValueResource";
import type { RetryFeed } from "./retryFeed";

export interface MavenFeedResource extends RetryFeed {
  FeedType: FeedType.Maven;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
