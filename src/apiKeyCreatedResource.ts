import ResourceWithId from "./resource";

export interface ApiKeyCreatedResource extends ResourceWithId {
  ApiKey: string;
  Created: string;
  Expires: string;
  Purpose: string;
  UserId: string;
}
