import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";
import type { SpaceScopedResource } from "./spaceScopedResource";

export interface ProxyResource extends ResourceWithId, SpaceScopedResource {
  Name: string;
  Host: string;
  Port: number;
  ProxyType: string;
  Username: string;
  Password: SensitiveValue;
}