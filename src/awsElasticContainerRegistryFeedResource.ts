import type { FeedType } from "./feedType";
import type { RetryFeed } from "./retryFeed";
import type { SensitiveValue } from "./propertyValueResource";

export interface AwsElasticContainerRegistryFeedResource extends RetryFeed {
  FeedType: FeedType.AwsElasticContainerRegistry;
  Name: string;
  FeedUri: string;
  Region: string;
  AccessKey: string;
  SecretKey: SensitiveValue;
}
