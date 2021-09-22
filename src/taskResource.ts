import type { ActionProperties } from "./actionProperties";
import type { MixedSpaceResource } from "./mixedSpaceResource";
import type { NamedResource } from "./namedResource";
import type { ResourceWithId } from "./resource";
import type { ScriptingLanguage } from "./scriptingLanguage";
import type { TaskRestrictedTo } from "./taskRestrictedTo";
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

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TaskTypeResource extends NamedResource { }

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