import ResourceWithId from "./resource";
import type { AuthenticationProviderElement } from "./authentication/authenticationProviderElement";

export interface UserAuthenticationResource extends ResourceWithId {
  AuthenticationProviders: AuthenticationProviderElement[];
  CanCurrentUserEditIdentitiesForUser: boolean;
}

export default UserAuthenticationResource;
