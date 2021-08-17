type ProjectImportSource =
  | ProjectImportFromSpaceSource
  | ProjectImportFromUploadSource;

export interface ProjectImportFromSpaceSource {
  Type: "space";
  SpaceId: string;
  TaskId: string;
}
export interface ProjectImportFromUploadSource {
  Type: "upload";
  UploadedFileId: string;
}

export default ProjectImportSource;
