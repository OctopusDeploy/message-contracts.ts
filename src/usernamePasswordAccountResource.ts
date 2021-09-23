import type { AccountResource, NewAccountResource } from "./accountResource";
import type { AccountType } from "./accountType";
import type { SensitiveValue } from "./propertyValueResource";

export interface UsernamePasswordAccountResource extends AccountResource {
  AccountType: AccountType.UsernamePassword;
  Password: SensitiveValue;
  Username: string;
}

export interface NewUsernamePasswordAccountResource extends NewAccountResource {
  AccountType: AccountType.UsernamePassword;
  Password: SensitiveValue;
  Username: string;
}