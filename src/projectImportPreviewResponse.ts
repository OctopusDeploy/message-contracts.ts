interface ProjectImportPreviewResponse {
  Accounts: AccountSummary[];
  Certificates: string[];
  Environments: string[];
  Feeds: FeedSummary[];
  Lifecycles: string[];
  Projects: ProjectSummary[];
  WorkerPools: WorkerPoolSummary[];
}

export interface DocumentSummary {
  Name: string;
  Type: string;
}

export type AccountSummary = DocumentSummary;
export type FeedSummary = DocumentSummary;
export interface WorkerPoolSummary extends DocumentSummary {
  IsDynamic: boolean;
}

export interface ProjectSummary {
  Name: string;
  Channels: string[];
  Runbooks: string[];
}

export default ProjectImportPreviewResponse;
