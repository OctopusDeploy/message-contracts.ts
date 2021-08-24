import type { AuthenticationProviderElement } from "./authenticationProviderElement";
import type { ResourceWithId } from "./resource";

export interface UserAuthenticationResource extends ResourceWithId {
  AuthenticationProviders: AuthenticationProviderElement[];
  CanCurrentUserEditIdentitiesForUser: boolean;
}