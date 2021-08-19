type LegacyLinks = {
  Logo: string;
};

type StepPackageLinks = {
  Logo: string;
  StepUI: string;
  Schema: string;
};

export interface ActionTemplateSearchResource {
  Id: string;
  Name: string;
  Version: string | null;
  Description: string;
  Keywords: string;
  Author: string;
  Website: string;
  IsInstalled: boolean;
  IsBuiltIn: boolean;
  Category: string; // Deprecated
  Categories: string[];
  Type: string;
  CommunityActionTemplateId?: string;
  HasUpdate: boolean;
  Links: LegacyLinks | StepPackageLinks;
}