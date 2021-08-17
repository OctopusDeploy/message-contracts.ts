import type { SensitiveValue } from "./propertyValueResource";

interface ProjectExportRequest {
  IncludedProjectIds: string[];
  Password: SensitiveValue;
}

export default ProjectExportRequest;
