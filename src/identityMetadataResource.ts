import type { ResourceWithId } from "./resource";

export interface IdentityMetadataResource extends ResourceWithId {
  IdentityProviderName: string;
  ClaimDescriptors: { [name: string]: any };
}