import type { DocumentSummary } from "./documentSummary";
import type { WorkerPoolSummary } from "./workerPoolSummary";

interface ProjectSummary {
  Channels: string[];
  Name: string;
  Runbooks: string[];
}

export interface ProjectImportPreviewResponse {
  Accounts: AccountSummary[];
  Certificates: string[];
  Environments: string[];
  Feeds: FeedSummary[];
  Lifecycles: string[];
  Projects: ProjectSummary[];
  WorkerPools: WorkerPoolSummary[];
}

export type AccountSummary = DocumentSummary;
export type FeedSummary = DocumentSummary;
