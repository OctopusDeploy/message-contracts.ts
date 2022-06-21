import type { AccountResource, NewAccountResource } from "./accountResource";
import { AccountType } from "./accountType";
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

export function NewUsernamePasswordAccount(
  name: string,
  username: string,
  password: SensitiveValue
): NewUsernamePasswordAccountResource {
  return {
    AccountType: AccountType.UsernamePassword,
    Name: name,
    Password: password,
    Username: username,
  };
}
