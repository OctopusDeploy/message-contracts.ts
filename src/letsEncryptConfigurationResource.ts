import type { ResourceWithId } from "./resource";

export interface LetsEncryptConfigurationResource extends ResourceWithId {
  Enabled: boolean;
  RegistrationEmailAddress: string;
  DnsName: string;
  HttpsPort: number;
  IPAddress: string;
  AcceptLetsEncryptTermsOfService: boolean;
  CertificateExpiryDate: string;
  CertificateThumbprint: string;
  Path: string;
}