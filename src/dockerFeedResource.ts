import type { Feed } from "./feed";
import type { FeedLinks } from "./feedLinks";
import type { FeedType } from "./feedType";
import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";

export interface DockerFeedResource extends Feed, ResourceWithId<FeedLinks> {
  ApiVersion?: any;
  FeedType: FeedType.Docker;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  RegistryPath: string;
  Username?: any;
}
