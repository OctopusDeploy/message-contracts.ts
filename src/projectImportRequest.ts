import type { SensitiveValue } from "./propertyValueResource";
import type ProjectImportSource from "./projectImportSource";

interface ProjectImportRequest {
  ImportSource: ProjectImportSource;
  Password: SensitiveValue;
}

export default ProjectImportRequest;
