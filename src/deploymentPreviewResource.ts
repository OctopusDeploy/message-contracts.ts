/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { ResourceWithId, ResourceWithLinks } from "./resource";
import type { DeploymentTemplateStep } from "./deploymentTemplateStep";
import type { Form } from "./form";
import type { MachineModelHealthStatus } from "./machineResource";
import type { ReleaseChanges } from "./releaseChanges";
import { typeSafeHasOwnProperty } from "./utils";

export interface DeploymentPreviewRequests {
  DeploymentPreviews: DeploymentPreviewRequest[];
}

export interface DeploymentPreviewRequest {
  EnvironmentId: string;
  TenantId: string;
}

export interface MachineDeploymentPreview extends ResourceWithId {
  HasLatestCalamari: boolean;
  Name: string;
  HealthStatus?: MachineModelHealthStatus;
}

export interface DeploymentPreviewBaseResource extends ResourceWithLinks {
  StepsToExecute: DeploymentTemplateStep[];
  Form: Form;
  UseGuidedFailureModeByDefault: boolean;
}

export interface DeploymentPreviewResource
  extends DeploymentPreviewBaseResource {
  Changes: ReleaseChanges[];
  ChangesMarkdown: string;
}

export function isDeploymentPreviewResource(
  resource: NonNullable<DeploymentPreviewBaseResource>
): resource is DeploymentPreviewResource {
  const converted = resource as DeploymentPreviewResource;
  return (
    converted.Changes !== undefined &&
    typeSafeHasOwnProperty(converted, "Changes")
  );
}

export type RunbookRunPreviewResource = DeploymentPreviewResource;
