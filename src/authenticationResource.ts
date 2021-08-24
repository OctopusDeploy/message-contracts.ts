import type { AuthenticationProviderElement } from "./authenticationProviderElement";
import type { ResourceWithId } from "./resource";

export interface AuthenticationResource extends ResourceWithId {
    AuthenticationProviders: AuthenticationProviderElement[];
    AutoLoginEnabled: boolean;
    AnyAuthenticationProvidersSupportPasswordManagement: boolean;
}
