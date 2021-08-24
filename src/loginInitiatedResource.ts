import type { ResourceWithId } from "./resource";

export interface LoginInitiatedResource extends ResourceWithId {
    WasLoginInitiated: boolean;
    ProviderName: string;
}
