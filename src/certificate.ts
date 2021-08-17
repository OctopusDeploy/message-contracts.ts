export interface Certificate {
  IsExpired?: boolean;
  IssuerDistinguishedName?: string;
  NotAfter?: string;
  NotBefore?: string;
  SerialNumber?: string;
  SignatureAlgorithmName?: string;
  SubjectDistinguishedName?: string;
  Thumbprint?: string;
  Version?: number;
}
