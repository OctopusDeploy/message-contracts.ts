import type { IdentityMetadataResource } from "./identityMetadataResource";
import type { ResourceWithId } from "./resource";

export interface UserIdentityMetadataResource extends ResourceWithId {
  Providers: IdentityMetadataResource[];
}
