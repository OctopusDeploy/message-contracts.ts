import type { FeedType } from "./feedType";
import type { PackageAcquisitionLocation } from "./packageAcquisitionLocation";

export interface Feed {
  FeedType: FeedType;
  PackageAcquisitionLocationOptions?: PackageAcquisitionLocation[];
  SpaceId?: string;
  LastModifiedOn?: string | null;
  LastModifiedBy?: string | null;
}
