import type { ResourceWithId } from "./resource";

export interface PackageDescriptionResource extends ResourceWithId {
  Description?: string;
  Id: string;
  LatestVersion?: string;
  Name: string;
}