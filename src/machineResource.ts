import type { EndpointResource, NewEndpointResource } from "./endpointResource";
import type { NamedResource } from "./namedResource";

export interface MachineResource extends NamedResource {
  Endpoint: EndpointResource;
  IsDisabled: boolean;
  IsInProcess: boolean;
  HealthStatus: MachineModelHealthStatus;
  HasLatestCalamari: boolean;
  MachinePolicyId: string;
  StatusSummary: string;
}

export type NewMachineResource = {
  Endpoint: NewEndpointResource;
} & Omit<MachineResource, "Id" | "Links" | "Endpoint" | "StatusSummary">;

export function NewMachine(
  name: string,
  endpoint: NewEndpointResource
): NewMachineResource {
  return {
    IsDisabled: false,
    IsInProcess: false,
    Endpoint: endpoint,
    HealthStatus: MachineModelHealthStatus.Unknown,
    Name: name,
    HasLatestCalamari: false,
    MachinePolicyId: "",
  };
}

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
