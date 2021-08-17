import { DefectStatus } from "./defectStatus";
import ResourceWithId from "./resource";

export interface DefectResource extends ResourceWithId {
  Description: string;
  Status?: DefectStatus;
}
