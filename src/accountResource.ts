import type { AccountResourceLinks } from "./accountResourceLinks";
import type { AccountType } from "./accountType";
import type NamedResource from "./namedResource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface AccountResource extends NamedResource<AccountResourceLinks> {
  AccountType: AccountType;
  Description: string;
  EnvironmentIds: string[];
  Name: string;
  TenantedDeploymentParticipation: TenantedDeploymentMode;
  TenantIds: string[];
  TenantTags: string[];
}

export default AccountResource;
