import type { IProcessResource } from "./deploymentProcessResource";

export interface RunbookProcessResource extends IProcessResource {
  RunbookId: string;
}

export default RunbookProcessResource;
