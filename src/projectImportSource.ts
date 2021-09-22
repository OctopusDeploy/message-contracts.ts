export interface ProjectImportFromSpaceSource {
  SpaceId: string;
  TaskId: string;
  Type: "space";
}

export interface ProjectImportFromUploadSource {
  Type: "upload";
  UploadedFileId: string;
}

export type ProjectImportSource =
  | ProjectImportFromSpaceSource
  | ProjectImportFromUploadSource;