export interface ExternalSecurityGroupProviderResource {
  Id: string;
  Name: string;
  IsRoleBased: boolean;
  SupportsGroupLookup: boolean;
  LookupUri: string;
}

export default ExternalSecurityGroupProviderResource;
