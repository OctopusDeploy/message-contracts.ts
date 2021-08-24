import type { ResourceWithId } from "./resource";

export interface SettingsMetadataItemResource extends ResourceWithId {
    Id: string;
    Name: string;
    Description: string;
}
