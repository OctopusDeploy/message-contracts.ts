import type { Certificate } from "./certificate";
import type { CertificateDataFormat } from "./certificateDataFormat";
import ResourceWithId from "./resource";
import type { SensitiveValue } from "./propertyValueResource";
import type { SpaceScopedResource } from "./spaceScopedResource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface CertificateResource
  extends ResourceWithId,
  Certificate,
  SpaceScopedResource {
  Name: string;
  Notes?: string;
  CertificateData: SensitiveValue;
  Password: SensitiveValue;
  EnvironmentIds: string[];
  TenantIds: string[];
  TenantTags: string[];
  CertificateDataFormat?: CertificateDataFormat;
  Archived?: string;
  ReplacedBy?: string;
  SubjectCommonName?: string;
  SubjectOrganization?: string;
  IssuerCommonName?: string;
  IssuerOrganization?: string;
  SelfSigned?: boolean;
  HasPrivateKey?: boolean;
  TenantedDeploymentParticipation?: TenantedDeploymentMode;
  SubjectAlternativeNames?: string[];
  CertificateChain?: X509Certificate[];
}

export type X509Certificate = Certificate;
