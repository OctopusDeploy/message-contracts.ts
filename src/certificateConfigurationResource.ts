import type { ResourceWithId } from "./resource";

export interface CertificateConfigurationResource
  extends ResourceWithId {
  Name: string;
  SignatureAlgorithm: string;
  Thumbprint: string;
}
