import ResourceWithId from "./resource";
import type { DeploymentActionPackageResource } from "./deploymentActionPackageResource";

export interface ChannelVersionRuleResource extends ResourceWithId {
  Tag: string;
  VersionRange: string;
  ActionPackages: DeploymentActionPackageResource[];
}

export default ChannelVersionRuleResource;
