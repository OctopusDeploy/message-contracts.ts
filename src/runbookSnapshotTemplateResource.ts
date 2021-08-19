import type { ReleaseTemplateBaseResource } from "./releaseTemplateResource";

export interface RunbookSnapshotTemplateResource
  extends ReleaseTemplateBaseResource {
  RunbookProcessId: string;
  NextNameIncrement: string;
}