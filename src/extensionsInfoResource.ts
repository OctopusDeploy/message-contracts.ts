import type { ResourceWithId } from "./resource";

export interface ExtensionsInfoResource extends ResourceWithId {
  Name: string;
  AssemblyName: string;
  Author: string;
  Version: string;
  IsCustom: boolean;
}

export default ExtensionsInfoResource;
