import type AccountResource from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface AzureSubscriptionAccountResource extends AccountResource {
  AzureEnvironment: string;
  CertificateBytes: SensitiveValue;
  CertificateThumbprint: string;
  ServiceManagementEndpointBaseUri: string;
  ServiceManagementEndpointSuffix: string;
  SubscriptionNumber: string;
}
