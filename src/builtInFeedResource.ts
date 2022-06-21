import type { BuiltInFeedLinks } from "./builtInFeedLinks";
import type { Feed } from "./feed";
import type { FeedType } from "./feedType";
import type { ResourceWithId } from "./resource";

export interface BuiltInFeedResource
  extends Feed,
    ResourceWithId<BuiltInFeedLinks> {
  DeleteUnreleasedPackagesAfterDays?: number;
  FeedType: FeedType.BuiltIn;
  IsBuiltInRepoSyncEnabled: boolean;
  Name: string;
}
