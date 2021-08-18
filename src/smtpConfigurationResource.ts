import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";

export interface SmtpConfigurationResource extends ResourceWithId {
  SmtpHost: string;
  SmtpPort?: number;
  SendEmailFrom: string;
  EnableSsl: boolean;
  SmtpLogin?: string;
  SmtpPassword: SensitiveValue;
  Timeout?: number;
}

export default SmtpConfigurationResource;
