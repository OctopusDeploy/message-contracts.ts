import type { AccountResource, NewAccountResource } from "./accountResource";
import { AccountType } from "./accountType";
import type { SensitiveValue } from "./propertyValueResource";

export interface AmazonWebServicesAccountResource extends AccountResource {
  AccessKey: string;
  AccountType: AccountType.AmazonWebServicesAccount;
  SecretKey: SensitiveValue;
}

export interface NewAmazonWebServicesAccountResource extends NewAccountResource {
  AccessKey: string;
  AccountType: AccountType.AmazonWebServicesAccount;
  SecretKey: SensitiveValue;
}

export function NewAmazonWebServicesAccount(name: string, accessKey: string, secretKey: SensitiveValue): NewAmazonWebServicesAccountResource {
  return {
    AccessKey: accessKey,
    AccountType: AccountType.AmazonWebServicesAccount,
    Name: name,
    SecretKey: secretKey
  }
}