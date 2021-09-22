import type { IIdName } from "./resource";
import type { RetentionPeriod } from "./retentionPeriod";

export type PhaseResource = IPhasedResource & {
  ReleaseRetentionPolicy?: RetentionPeriod;
  TentacleRetentionPolicy?: RetentionPeriod;
};

export interface IPhasedResource extends IIdName {
  AutomaticDeploymentTargets: string[];
  Id: string;
  IsOptionalPhase: boolean;
  MinimumEnvironmentsBeforePromotion: number;
  Name: string;
  OptionalDeploymentTargets: string[];
}
