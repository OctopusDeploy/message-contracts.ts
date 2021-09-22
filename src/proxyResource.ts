import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";
import type { SpaceScopedResource } from "./spaceScopedResource";

export interface ProxyResource extends ResourceWithId, SpaceScopedResource {
  Host: string;
  Name: string;
  Password: SensitiveValue;
  Port: number;
  ProxyType: string;
  Username: string;
}