import type { SensitiveValue } from "./propertyValueResource";

export interface ProjectExportRequest {
  IncludedProjectIds: string[];
  Password: SensitiveValue;
}