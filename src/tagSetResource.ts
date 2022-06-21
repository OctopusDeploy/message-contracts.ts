import type { NamedResource } from "./namedResource";
import type { TagResource } from "./tagResource";

export interface TagSetResource extends NamedResource {
  Description: string;
  SortOrder: number;
  Tags: TagResource[];
}
