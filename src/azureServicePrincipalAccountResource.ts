import { AccountType } from ".";
import type { AccountResource, NewAccountResource } from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface AzureServicePrincipalAccountResource extends AccountResource {
  ActiveDirectoryEndpointBaseUri: string;
  AzureEnvironment: string;
  ClientId: string;
  Password: SensitiveValue;
  ResourceManagementEndpointBaseUri: string;
  SubscriptionNumber: string;
  TenantId: string;
}

export interface NewAzureServicePrincipalAccountResource extends NewAccountResource {
  ActiveDirectoryEndpointBaseUri?: string;
  AzureEnvironment?: string;
  ClientId: string;
  Password: SensitiveValue;
  ResourceManagementEndpointBaseUri?: string;
  SubscriptionNumber: string;
  TenantId: string;
}

export function NewAzureServicePrincipalAccount(name: string, subscriptionId: string, tenantId: string, applicationId: string, applicationPassword: SensitiveValue): NewAzureServicePrincipalAccountResource {
  return {
    AccountType: AccountType.AzureServicePrincipal,
    ClientId: applicationId,
    Name: name,
    Password: applicationPassword,
    SubscriptionNumber: subscriptionId,
    TenantId: tenantId
  }
}