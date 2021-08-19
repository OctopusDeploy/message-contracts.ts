import type { AccountResource } from "./accountResource";
import type { SensitiveValue } from "./propertyValueResource";

export interface SshKeyPairAccountResource extends AccountResource {
  Username: string;
  PrivateKeyFile: SensitiveValue;
  PrivateKeyPassphrase: SensitiveValue;
}
