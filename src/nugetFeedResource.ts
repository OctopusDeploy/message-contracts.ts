import type { FeedType } from "./feedType";
import type { SensitiveValue } from "./propertyValueResource";
import type { RetryFeed } from "./retryFeed";

export interface NugetFeedResource extends RetryFeed {
  EnhancedMode: boolean;
  FeedType: FeedType.Nuget;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  Username?: string;
}
