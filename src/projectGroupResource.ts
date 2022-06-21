import type { NamedResource } from "./namedResource";

export interface ProjectGroupResource
  extends NamedResource<{ Self: string; Projects: string }> {
  Description?: string;
  EnvironmentIds: string[];
  RetentionPolicyId: string | null;
  SpaceId?: string;
}
