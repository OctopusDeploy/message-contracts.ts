export interface DocumentCounts {
  [key: string]: number;
}

export interface DocumentCountGroup {
  [key: string]: DocumentCounts;
}

export interface GlobalDocumentCounts extends DocumentCounts {
  Spaces: number;
  Users: number;
  Teams: number;
}

export interface InfrastructureDocumentCounts extends DocumentCounts {
  Environments: number;
  Tenants: number;
  DeploymentTargets: number;
  Workers: number;
  WorkerPools: number;
}

export interface ProjectDocumentCounts extends DocumentCounts {
  Projects: number;
  Releases: number;
  Deployments: number;
  Runbooks: number;
  RunbookRuns: number;
}

export interface LibraryDocumentCounts extends DocumentCounts {
  Certificates: number;
  VariableSets: number;
  Packages: number;
}

export interface ServerDocumentCounts extends DocumentCountGroup {
  Global: GlobalDocumentCounts;
  Infrastructure: InfrastructureDocumentCounts;
  Project: ProjectDocumentCounts;
  Library: LibraryDocumentCounts;
}
