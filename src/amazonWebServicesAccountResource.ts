import type { AccountResource } from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface AmazonWebServicesAccountResource extends AccountResource {
  AccessKey: string;
  SecretKey: SensitiveValue;
}
