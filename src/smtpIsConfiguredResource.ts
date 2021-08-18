import type { ResourceWithId } from "./resource";

export interface SmtpIsConfiguredResource extends ResourceWithId {
  IsConfigured: boolean;
}

export default SmtpIsConfiguredResource;
