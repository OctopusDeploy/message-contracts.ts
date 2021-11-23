import { AccountType } from ".";
import type { AccountResource, NewAccountResource } from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface GoogleCloudAccountResource extends AccountResource {
  JsonKey: SensitiveValue;
}

export interface NewGoogleCloudAccountResource extends NewAccountResource {
  JsonKey: SensitiveValue;
}

export function NewGoogleCloudAccount(name: string, jsonKey: SensitiveValue): NewGoogleCloudAccountResource {
  return {
    AccountType: AccountType.GoogleCloudAccount,
    JsonKey: jsonKey,
    Name: name
  }
}