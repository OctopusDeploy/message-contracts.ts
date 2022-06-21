import type { NewEndpointResource } from "./endpointResource";
import type { EnvironmentResource } from "./environmentResource";
import type { MachineResource, NewMachineResource } from "./machineResource";
import { MachineModelHealthStatus } from "./machineResource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";

export interface DeploymentTargetResource extends MachineResource {
  EnvironmentIds: string[]; //ReferenceCollection;
  Roles: string[]; //ReferenceCollection;
  TenantedDeploymentParticipation: TenantedDeploymentMode;
  TenantIds: string[]; //ReferenceCollection;
  TenantTags: string[]; //ReferenceCollection;
}

export interface NewDeploymentTargetResource extends NewMachineResource {
  EnvironmentIds: string[]; //ReferenceCollection;
  Roles: string[]; //ReferenceCollection;
  TenantedDeploymentParticipation: TenantedDeploymentMode;
  TenantIds: string[]; //ReferenceCollection;
  TenantTags: string[]; //ReferenceCollection;
}

export function NewDeploymentTarget(
  name: string,
  endpoint: NewEndpointResource,
  environments: EnvironmentResource[],
  roles: string[],
  tenantedDeploymentParticipation: TenantedDeploymentMode
): NewDeploymentTargetResource {
  return {
    IsDisabled: false,
    IsInProcess: false,
    Endpoint: endpoint,
    EnvironmentIds: environments.map((e) => e.Id),
    HasLatestCalamari: false,
    HealthStatus: MachineModelHealthStatus.Unknown,
    Name: name,
    MachinePolicyId: "",
    Roles: roles,
    TenantedDeploymentParticipation: tenantedDeploymentParticipation,
    TenantIds: [],
    TenantTags: [],
  };
}

export function isDeploymentTarget(
  machine: MachineResource
): machine is DeploymentTargetResource {
  return (machine as DeploymentTargetResource).EnvironmentIds !== undefined;
}
