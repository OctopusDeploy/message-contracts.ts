import type { ClaimsBasedIdentity } from "./identityResource";
import type { ResourceWithId } from "./resource";

export interface UserResourceLinks {
  Self: string;
  Permissions: string;
  PermissionsConfiguration: string;
  Spaces: string;
  Teams: string;
  ApiKeys: string;
}

export interface UserResource extends ResourceWithId<UserResourceLinks> {
  DisplayName: string;
  Username: string;
  IsActive: boolean;
  IsService: boolean;
  EmailAddress?: string;
  CanPasswordBeEdited?: boolean;
  IsRequestor?: boolean;
  Identities: ClaimsBasedIdentity[];
  Password?: string;
}