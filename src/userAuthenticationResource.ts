import type { AuthenticationProviderElement } from "./authentication/authenticationProviderElement";
import type { ResourceWithId } from "./resource";

export interface UserAuthenticationResource extends ResourceWithId {
  AuthenticationProviders: AuthenticationProviderElement[];
  CanCurrentUserEditIdentitiesForUser: boolean;
}