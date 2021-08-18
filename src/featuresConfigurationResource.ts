import type { ResourceWithId } from "./resource";

export interface FeaturesConfigurationResource
  extends ResourceWithId<{ Self: string }> {
  IsCommunityActionTemplatesEnabled: boolean;
  IsServiceMessageResourceCreationEnabled: boolean;
  IsBuiltInWorkerEnabled: boolean;
  IsHelpSidebarEnabled: boolean;
  HelpSidebarSupportLink?: string;
  IsConfigurationAsCodeEnabled: boolean;
  IsConfigurationAsCodeForRunbooksEnabled: boolean;
  IsStepUiFrameworkEnabled: boolean;
}

export default FeaturesConfigurationResource;
