import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { CommunicationStyle } from "./communicationStyle";
import type { EndpointResource } from "./endpointResource";
import type { ObjectResourceInputs } from "@octopusdeploy/runtime-inputs";

export interface StepPackageEndpointResource extends AgentlessEndpointResource {
  CommunicationStyle: CommunicationStyle.StepPackage;
  DefaultWorkerPoolId?: string;
  DeploymentTargetTypeId: string;
  Inputs: ObjectResourceInputs<unknown>;
  StepPackageId: string;
  StepPackageVersion: string;
}

export function isStepPackageEndpointResource(
  resource: EndpointResource
): resource is StepPackageEndpointResource {
  return "StepPackageId" in resource && "DeploymentTargetTypeId" in resource;
}
