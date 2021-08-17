import type AccountResource from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface GoogleCloudAccountResource extends AccountResource {
  JsonKey: SensitiveValue;
}
