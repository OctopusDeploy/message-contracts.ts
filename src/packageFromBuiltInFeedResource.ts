import type { PackageResource } from "./packageResource";

export interface PackageFromBuiltInFeedResource extends PackageResource {
  Hash?: string;
  PackageSizeBytes?: number;
}