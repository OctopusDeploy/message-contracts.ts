import type EndpointResource from "./endpointResource";
import type { NamedResource } from "./namedResource";
import type { NewEndpointResource } from "./endpointResource";

export interface MachineResource extends NamedResource {
  IsDisabled: boolean;
  MachinePolicyId: string;
  HealthStatus: MachineModelHealthStatus;
  HasLatestCalamari: boolean;
  StatusSummary: string;
  IsInProcess: boolean;
  Endpoint: EndpointResource;
}

export type NewMachineResource = {
  Endpoint: NewEndpointResource;
} & Omit<MachineResource, "Id" | "Links" | "Endpoint" | "StatusSummary">;

export enum MachineModelHealthStatus {
  Healthy = "Healthy",
  Unavailable = "Unavailable",
  Unknown = "Unknown",
  HasWarnings = "HasWarnings",
  Unhealthy = "Unhealthy",
}

// Emulating a resource so we can refer to this enum in dropdownlists easily etc.
export interface MachineModelHealthStatusResource {
  Id: MachineModelHealthStatus;
  Name: string;
}

export default MachineResource;
