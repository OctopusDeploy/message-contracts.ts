import type { ResourceWithId } from "./resource";

export interface LicenseStatusResource
  extends ResourceWithId<{ Self: string }> {
  IsCompliant: boolean;
  HostingEnvironment: HostingEnvironment;
  ComplianceSummary: string;
  EffectiveExpiryDate: string;
  DaysToEffectiveExpiryDate: number;
  Messages: LicenseMessage[];
  Limits: LicenseLimitStatus[];
  EffectiveNodeTaskLimit: number;
  EffectiveClusterTaskLimit: number;
  IsNodeTaskLimitControlledByLicense: boolean;
  IsClusterTaskLimitControlledByLicense: boolean;
  PermissionsMode: PermissionsMode;
  DoesExpiryBlockKeyActivities: boolean;
}

export interface LicenseMessage {
  Message: string;
  Disposition: LicenseMessageDisposition;
}

export interface LicenseLimitStatus {
  Name: string;
  EffectiveLimit: number;
  EffectiveLimitDescription: string;
  IsUnlimited: boolean;
  CurrentUsage: number;
  Message: string;
  Disposition: LicenseMessageDisposition;
}

export enum HostingEnvironment {
  SelfHosted = "SelfHosted",
  OctopusCloud = "OctopusCloud",
}

export enum PermissionsMode {
  Unspecified = "Unspecified",
  Restricted = "Restricted",
  Full = "Full",
}

export enum LicenseMessageDisposition {
  Information = "Information",
  Warning = "Warning",
  Error = "Error",
}