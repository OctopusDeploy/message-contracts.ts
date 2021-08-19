export interface ProjectImportFromSpaceSource {
  Type: "space";
  SpaceId: string;
  TaskId: string;
}

export interface ProjectImportFromUploadSource {
  Type: "upload";
  UploadedFileId: string;
}

export type ProjectImportSource =
  | ProjectImportFromSpaceSource
  | ProjectImportFromUploadSource;