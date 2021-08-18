import type { DeploymentActionPackageResource } from "./deploymentActionPackageResource";
import type { ResourceWithId } from "./resource";

export default interface ChannelVersionRuleResource extends ResourceWithId {
  Tag: string;
  VersionRange: string;
  ActionPackages: DeploymentActionPackageResource[];
}
