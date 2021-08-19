import type { ActionProperties } from "./actionProperties";
import type { MixedSpaceResource } from "./mixedSpaceResource";
import type { NamedResource } from "./namedResource";
import type { ResourceWithId } from "./resource";
import type { ScriptingLanguage } from "./scriptingLanguage";
import type { TaskState } from "./taskState";

export interface ConfigureLetsEncryptArguments {
  DnsName: string;
  RegistrationEmailAddress: string;
  AcceptLetsEncryptTermsOfService: boolean;
  HttpsPort: number;
  IPAddress: string;
  Path: string;
}

export interface UpdateCalamariTaskArguments {
  MachineIds: string[];
}

export interface UpgradeTaskArguments {
  EnvironmentId?: string;
  WorkerPoolId?: string;
  MachineIds?: string[];
  RestrictedTo?: TaskRestrictedTo;
}

export interface HealthCheckTaskArguments {
  EnvironmentId?: string;
  WorkerPoolId?: string;
  MachinePolicyId?: string;
  MachineIds?: string[];
  RestrictedTo?: TaskRestrictedTo;
  Timeout?: string;
  MachineTimeout?: string;
  OnlyTestConnection: boolean;
}

export interface AdHocScriptTaskArguments {
  ActionTemplateId?: string;
  Properties?: ActionProperties;
  EnvironmentIds?: string[];
  MachineIds?: string[];
  TargetRoles?: string[];
  TenantIds?: string[];
  WorkerIds?: string[];
  WorkerPoolIds?: string[];
  ScriptBody?: string;
  Syntax?: ScriptingLanguage;
}

export type SystemIntegrityCheckTaskArguments = {};

export type SynchronizeCommunityActionTemplatesTaskArguments = {};

export type SynchronizeBuiltInPackageRepositoryIndexTaskArguments = {};

export interface TestEmailTaskArguments {
  EmailAddress: string;
}

export interface AccountTestTaskArguments {
  AccountId: string;
}

export enum TaskRestrictedTo {
  DeploymentTargets = "DeploymentTargets",
  Workers = "Workers",
  Policies = "Policies",
  Unrestricted = "Unrestricted",
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TaskTypeResource extends NamedResource { }

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

interface CommonTaskResource<TArguments> extends MixedSpaceResource {
  Name: string;
  Arguments: TArguments;
  Description: string;
}

export type NewTaskResource<TArguments> = CommonTaskResource<TArguments>;

export interface TaskResource<TArguments = {}>
  extends CommonTaskResource<TArguments>,
  ResourceWithId {
  State: TaskState;
  Completed?: string;
  QueueTime?: string;
  QueueTimeExpiry?: string;
  StartTime?: string | null;
  LastUpdatedTime?: string;
  CompletedTime?: string | null;
  ServerNode?: string;
  Duration?: string;
  ErrorMessage?: string;
  HasBeenPickedUpByProcessor?: boolean;
  IsCompleted: boolean;
  FinishedSuccessfully?: boolean;
  HasPendingInterruptions: boolean;
  CanRerun?: boolean;
  HasWarningsOrErrors: boolean;
}