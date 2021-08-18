import type { DefectStatus } from "./defectStatus";
import type { ResourceWithId } from "./resource";

export interface DefectResource extends ResourceWithId {
  Description: string;
  Status?: DefectStatus;
}
