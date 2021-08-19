import type { ProjectImportSource } from "./projectImportSource";
import type { SensitiveValue } from "./propertyValueResource";

export interface ProjectImportRequest {
  ImportSource: ProjectImportSource;
  Password: SensitiveValue;
}