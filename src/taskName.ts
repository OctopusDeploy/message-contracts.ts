// used when the client needs to create or do something with a specific task type
// note: this list is incomplete - the proper list should be obtained via the TaskTypes api endpoint
export enum TaskName {
  Health = "Health",
  AdHocScript = "AdHocScript",
  ConfigureLetsEncrypt = "ConfigureLetsEncrypt",
  Upgrade = "Upgrade",
  TestEmail = "TestEmail",
  TestAccount = "TestAccount",
  SystemIntegrityCheck = "SystemIntegrityCheck",
  SyncCommunityActionTemplates = "SyncCommunityActionTemplates",
  SynchronizeBuiltInPackageRepositoryIndex = "SynchronizeBuiltInPackageRepositoryIndex",
  UpdateCalamari = "UpdateCalamari",
}