export type StepPackageDeploymentTargetMetadata = {
  name: string;
  description: string;
  logoLink: string;
};

export type StepPackageDeploymentTargetTypeLinks = {
  Logo: string;
  UI: string;
  Schema: string;
};

export interface StepPackageDeploymentTargetType {
  Id: string;
  Name: string;
  Description: string;
  Version: string;
  Categories: string[];
  Links: StepPackageDeploymentTargetTypeLinks;
}
