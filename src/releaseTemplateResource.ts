import type { LinksCollection } from "./linksCollection";

export interface ReleaseTemplatePackage {
  ActionName: string;
  PackageReferenceName?: string;
  PackageId: string;
  ProjectName: string;
  FeedId: string;
  FeedName: string;
  VersionSelectedLastRelease: string;
  IsResolvable: boolean;
}

export interface ReleaseTemplateBaseResource<TLinks = {}> {
  Packages: ReleaseTemplatePackage[];
  Links: LinksCollection<TLinks>;
}

interface ReleaseTemplateLinks {
  Self: string;
  LastRelease?: string;
}

export interface ReleaseTemplateResource
  extends ReleaseTemplateBaseResource<ReleaseTemplateLinks> {
  DeploymentProcessId: string;
  LastReleaseVersion: string | null;
  NextVersionIncrement: string;
  VersioningPackageStepName: string | null;
  VersioningPackageReferenceName: string | null;
}