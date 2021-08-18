import type { ResourceWithId } from "./resource";

export interface ServerConfigurationResource extends ResourceWithId {
  ServerUri: string;
}

export default ServerConfigurationResource;
