import type { Feed } from "./feed";
import type { FeedLinks } from "./feedLinks";
import type { FeedType } from "./feedType";
import type { SensitiveValue } from "./propertyValueResource";
import type { ResourceWithId } from "./resource";

export interface DockerFeedResource extends Feed, ResourceWithId<FeedLinks> {
  ApiVersion?: any;
  FeedType: FeedType.Docker;
  FeedUri: string;
  Name: string;
  Password?: SensitiveValue;
  RegistryPath: string;
  Username?: any;
}
