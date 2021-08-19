import type { Certificate } from "./certificate";
import type { CertificateDataFormat } from "./certificateDataFormat";
import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";
import type { SpaceScopedResource } from "./spaceScopedResource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface CertificateResource
  extends ResourceWithId,
  Certificate,
  SpaceScopedResource {
  Archived?: string;
  CertificateChain?: X509Certificate[];
  CertificateData: SensitiveValue;
  CertificateDataFormat?: CertificateDataFormat;
  EnvironmentIds: string[];
  HasPrivateKey?: boolean;
  IssuerCommonName?: string;
  IssuerOrganization?: string;
  Name: string;
  Notes?: string;
  Password: SensitiveValue;
  ReplacedBy?: string;
  SelfSigned?: boolean;
  SubjectAlternativeNames?: string[];
  SubjectCommonName?: string;
  SubjectOrganization?: string;
  TenantedDeploymentParticipation?: TenantedDeploymentMode;
  TenantIds: string[];
  TenantTags: string[];
}

export type X509Certificate = Certificate;
