import type { FeedType } from "./feedType";
import type { PackageAcquisitionLocation } from "./packageAcquisitionLocation";

export interface Feed {
  FeedType: FeedType;
  LastModifiedOn?: string | null;
  LastModifiedBy?: string | null;
  PackageAcquisitionLocationOptions?: PackageAcquisitionLocation[];
  SpaceId?: string;
}
