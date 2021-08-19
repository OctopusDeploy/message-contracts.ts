import type { ProjectImportSource } from "./projectImportSource";
import type { SensitiveValue } from "./propertyValueResource";

export interface ProjectImportPreviewRequest {
  ImportSource: ProjectImportSource;
  Password: SensitiveValue;
}