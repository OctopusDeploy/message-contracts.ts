/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { IdentityType } from "../identityType";
import type { LinksCollection } from "../linksCollection";
import type { ResourceWithId } from "../resource";

class AuthenticationProviderElement {
  Name: string = undefined!;
  IdentityType: keyof typeof IdentityType = undefined!;
  FormsLoginEnabled: boolean = undefined!;
  Links: LinksCollection<{}> = undefined!;
  JavascriptLinks: string[] = undefined!;
  CSSLinks: string[] = undefined!;
}

interface IdentityMetadataResource extends ResourceWithId {
  IdentityProviderName: string;
  ClaimDescriptors: { [name: string]: any };
}

interface UserIdentityMetadataResource extends ResourceWithId {
  Providers: IdentityMetadataResource[];
}

export {
  AuthenticationProviderElement,
  IdentityMetadataResource,
  UserIdentityMetadataResource,
};
