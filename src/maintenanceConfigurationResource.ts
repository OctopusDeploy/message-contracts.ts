import type { ResourceWithId } from "./resource";

export interface MaintenanceConfigurationResource extends ResourceWithId {
  IsInMaintenanceMode: boolean;
}

export default MaintenanceConfigurationResource;
