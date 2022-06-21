import type { CommunicationStyle } from "./communicationStyle";
import type { NamedResource, NewNamedResource } from "./namedResource";

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

export function NewEndpoint(
  name: string,
  communicationStyle: CommunicationStyle
): NewEndpointResource {
  return {
    CommunicationStyle: communicationStyle,
    Name: name,
  };
}

export interface IEndpointWithMultipleAuthentication {
  AuthenticationType: string;
}
