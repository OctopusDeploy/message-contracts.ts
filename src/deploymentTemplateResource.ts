import type { LinksCollection } from "./linksCollection";
import type { NamedResource } from "./namedResource";

export interface DeploymentTemplateResource
  extends DeploymentTemplateBaseResource {
  IsDeploymentProcessModified: boolean;
  DeploymentNotes: string | null;
}

export interface DeploymentTemplateBaseResource<TLinks = {}> {
  IsLibraryVariableSetModified: boolean;
  IsVariableSetModified: boolean;
  PromoteTo: DeploymentPromotionTarget[];
  TenantPromotions: DeploymentPromotionTenant[];
  Links: LinksCollection<TLinks>;
}

export interface DeploymentPromotionTenant extends NamedResource {
  PromoteTo: DeploymentPromotionTarget[];
}

// TODO: Add concrete Links to DeploymentPromotionTarget
//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeploymentPromotionTarget extends NamedResource { }
