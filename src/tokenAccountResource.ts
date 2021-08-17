import type AccountResource from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface TokenAccountResource extends AccountResource {
  Token: SensitiveValue;
}
