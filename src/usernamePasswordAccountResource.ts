import type AccountResource from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface UsernamePasswordAccountResource extends AccountResource {
  Username: string;
  Password: SensitiveValue;
}
