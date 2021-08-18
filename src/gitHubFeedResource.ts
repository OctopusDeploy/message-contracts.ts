import type { FeedType } from "./feedType";
import type { RetryFeed } from "./retryFeed";
import type { SensitiveValue } from "./propertyValueResource";

export interface GitHubFeedResource extends RetryFeed {
  FeedType: FeedType.GitHub;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
