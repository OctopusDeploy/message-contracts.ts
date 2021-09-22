import type { LegacyLinks } from "./legacyLinks";
import type { StepPackageLinks } from "./stepPackageLinks";

export interface ActionTemplateSearchResource {
  Author: string;
  Category: string; // Deprecated
  Categories: string[];
  CommunityActionTemplateId?: string;
  Description: string;
  HasUpdate: boolean;
  Id: string;
  IsBuiltIn: boolean;
  IsInstalled: boolean;
  Keywords: string;
  Links: LegacyLinks | StepPackageLinks;
  Name: string;
  Type: string;
  Version: string | null;
  Website: string;
}