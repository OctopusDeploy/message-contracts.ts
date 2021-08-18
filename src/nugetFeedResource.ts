import type { FeedType } from "./feedType";
import type { RetryFeed } from "./retryFeed";
import type { SensitiveValue } from "./propertyValueResource";

export interface NugetFeedResource extends RetryFeed {
  EnhancedMode: boolean;
  FeedType: FeedType.Nuget;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
