import type { AccountResource } from "./accountResource";
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
