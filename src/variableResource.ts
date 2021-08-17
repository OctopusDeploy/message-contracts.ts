import type { ControlType } from "./controlType";
import type { VariableType } from "./variableType";

export type VariableResource = VariableResourceBase<
  ScopeSpecification,
  VariablePromptOptions
>;

export interface VariableResourceBase<
  TScopeSpecification extends Readonly<ReadonlyArrays<ScopeSpecificationTypes>>,
  TVariablePromptOptions extends Readonly<VariablePromptOptions>
> {
  Id: string;
  Name: string;
  Value: string | null;
  Description: string | undefined;
  Scope: TScopeSpecification;
  IsEditable: boolean;
  Prompt: TVariablePromptOptions | null;
  Type: VariableType;
  IsSensitive: boolean; //false; // For backwards compatibility
}

type Arrays<T> = {
  [P in keyof T]: Array<T[P]>;
};

type ReadonlyArrays<T> = {
  [P in keyof T]: ReadonlyArray<T[P]>;
};

export type ScopeSpecification = Arrays<ScopeSpecificationTypes>;

export interface ScopeSpecificationTypes {
  Environment?: string;
  Machine?: string;
  Role?: string;
  Action?: string;
  Channel?: string;
  TenantTag?: string;
  ProcessOwner?: string;
}

export interface VariablePromptOptions {
  Label: string;
  Description: string;
  Required: boolean;
  DisplaySettings: VariablePromptDisplaySettings;
}

export interface VariablePromptDisplaySettings {
  "Octopus.ControlType"?: ControlType;
  "Octopus.SelectOptions"?: string;
}

export type ReferenceType =
  | VariableType.Certificate
  | VariableType.AmazonWebServicesAccount
  | VariableType.AzureAccount
  | VariableType.WorkerPool
  | VariableType.GoogleCloudAccount;
