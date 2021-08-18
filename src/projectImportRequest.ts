import type ProjectImportSource from "./projectImportSource";
import type { SensitiveValue } from "./propertyValueResource";

interface ProjectImportRequest {
  ImportSource: ProjectImportSource;
  Password: SensitiveValue;
}

export default ProjectImportRequest;
