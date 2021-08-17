import ResourceWithId from "./resource";

export default interface CertificateConfigurationResource
  extends ResourceWithId {
  Name: string;
  SignatureAlgorithm: string;
  Thumbprint: string;
}
