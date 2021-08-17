import ResourceWithId from "./resource";
import type { SensitiveValue } from "./propertyValueResource";

export interface ApiKeyResource extends ResourceWithId {
  ApiKey: SensitiveValue;
  Created: string; //TODO: datetimeoffset
  Expires: string;
  Purpose: string;
  UserId: string;
}

export default ApiKeyResource;
