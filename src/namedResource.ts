import type { ResourceWithId } from "./resource";

export interface NamedResource<TLinks = {}> extends ResourceWithId<TLinks> {
  Name: string;
}

export interface NewNamedResource {
  Name: string;
}

export default NamedResource;
