import type ProjectImportSource from "./projectImportSource";
import type { SensitiveValue } from "./propertyValueResource";

interface ProjectImportPreviewRequest {
  ImportSource: ProjectImportSource;
  Password: SensitiveValue;
}

export default ProjectImportPreviewRequest;
