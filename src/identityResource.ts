import type IdentityType from "./identityType";

interface ClaimsBasedIdentity {
  Id: string; // to help in UI lists
  IdentityProviderName: string;
  Claims: {
    [key: string]: {
      Value?: string;
      IsIdentifyingClaim?: boolean;
    };
  };
}

interface IdentityResource {
  Provider: string;
  Type: IdentityType;
  IsExternal?: boolean;
  Id: string;
}

interface ExternalIdentityResource extends IdentityResource {
  IsExternal?: true;
  EmailAddress: string;
  IsNew?: boolean;
}

interface OAuthIdentityResource extends ExternalIdentityResource {
  Type: IdentityType.OAuth;
}

interface ActiveDirectoryIdentityResource extends ExternalIdentityResource {
  Type: IdentityType.ActiveDirectory;
  Upn?: string;
  SamAccountName?: string;
}

export {
  IdentityResource,
  ExternalIdentityResource,
  OAuthIdentityResource,
  ActiveDirectoryIdentityResource,
  ClaimsBasedIdentity,
};
