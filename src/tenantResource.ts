import type { NewNamedResource } from "./namedResource";
import type NamedResource from "./namedResource";
import type { NewSpaceScopedResource } from "./spaceScopedResource";
import type SpaceScopedResource from "./spaceScopedResource";

interface TenantResourceShared {
  TenantTags: string[];
  ProjectEnvironments: { [projectId: string]: string[] };
}

export interface TenantResource
  extends NamedResource,
    TenantResourceShared,
    SpaceScopedResource {
  ClonedFromTenantId: string | null;
  Description: string | null;
}

export interface NewTenantResource
  extends NewNamedResource,
    NewSpaceScopedResource,
    TenantResourceShared {
  Description?: string;
}

export default TenantResource;
