import type { NamedResource, NewNamedResource } from "./namedResource";
import type {
  NewSpaceScopedResource,
  SpaceScopedResource,
} from "./spaceScopedResource";

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

export interface TagTestResult {
  [key: string]: {
    IsMatched: boolean;
    Reason: string;
    MissingTags: string[];
  };
}
