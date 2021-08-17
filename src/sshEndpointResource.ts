import type { AgentlessEndpointResource } from "./agentlessEndpointResource";

export interface SshEndpointResource extends AgentlessEndpointResource {
  AccountId: string;
  Host: string;
  Port: number;
  Fingerprint: string;
  Uri: string;
  ProxyId: string | undefined;
  DotNetCorePlatform: string | undefined;
  HostKeyAlgorithm: string;
}
