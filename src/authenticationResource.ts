import type { AuthenticationProviderElement } from "./authenticationProviderElement";
import type { ResourceWithId } from "./resource";

export interface AuthenticationResource extends ResourceWithId {
    AnyAuthenticationProvidersSupportPasswordManagement: boolean;
    AuthenticationProviders: AuthenticationProviderElement[];
    AutoLoginEnabled: boolean;
}
