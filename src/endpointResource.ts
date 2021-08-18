import type { NamedResource, NewNamedResource } from "./namedResource";
import type { CommunicationStyle } from "./communicationStyle";

export type UnstructuredDeploymentTargetResourceInputs =
  | Record<string, unknown>
  | undefined;

// Emulating a resource so we can refer to this enum in dropdownlists easily etc.
export interface CommunicationStyleResource {
  Id: CommunicationStyle;
  Name: string;
}

export interface EndpointResource extends NamedResource {
  CommunicationStyle: CommunicationStyle;
}

export interface NewEndpointResource extends NewNamedResource {
  CommunicationStyle: CommunicationStyle;
}

export interface IEndpointWithMultipleAuthentication {
  AuthenticationType: string;
}

export default EndpointResource;
