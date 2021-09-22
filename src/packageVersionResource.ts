import type { ResourceWithId } from "./resource";

export interface PackageVersionResource extends ResourceWithId {
  FeedId?: string;
  Id: string;
  PackageId?: string;
  Published?: string;
  ReleaseNotes?: string;
  SizeBytes?: number;
  Title?: string;
  Version: string;
}