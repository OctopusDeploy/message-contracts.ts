import type { ResourceWithId } from "./resource";
import type { SensitiveValue } from "./propertyValueResource";

export default interface ApiKeyResource extends ResourceWithId {
  ApiKey: SensitiveValue;
  Created: string; //TODO: datetimeoffset
  Expires: string;
  Purpose: string;
  UserId: string;
}
