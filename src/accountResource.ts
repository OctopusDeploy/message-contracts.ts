import type { NamedResource, NewNamedResource } from "./namedResource";
import type { AccountResourceLinks } from "./accountResourceLinks";
import type { AccountType } from "./accountType";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface AccountResource extends NamedResource<AccountResourceLinks> {
  AccountType: AccountType;
  Description: string;
  EnvironmentIds: string[];
  TenantIds: string[];
  TenantTags: string[];
  TenantedDeploymentParticipation: TenantedDeploymentMode;
}

export interface NewAccountResource extends NewNamedResource {
  AccountType: AccountType;
  Description?: string;
  EnvironmentIds?: string[];
  TenantedDeploymentParticipation?: TenantedDeploymentMode;
  TenantIds?: string[];
  TenantTags?: string[];
}