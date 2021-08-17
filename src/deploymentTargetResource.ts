import type { MachineResource } from "./machineResource";
import type { TenantedDeploymentMode } from "./tenantedDeploymentMode";
import type { NewMachineResource } from "./machineResource";

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

export function isDeploymentTarget(
  machine: MachineResource
): machine is DeploymentTargetResource {
  return (machine as DeploymentTargetResource).EnvironmentIds !== undefined;
}

export default DeploymentTargetResource;
