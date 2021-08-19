import type { NamedResource } from "./namedResource";

export interface ServerTimezoneResource extends NamedResource {
  Name: string;
  IsLocal: boolean;
}