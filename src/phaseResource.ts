import type { IIdName } from "./resource";
import type RetentionPeriod from "./retentionPeriod";

export type PhaseResource = IPhasedResource & {
  ReleaseRetentionPolicy?: RetentionPeriod;
  TentacleRetentionPolicy?: RetentionPeriod;
};

export interface IPhasedResource extends IIdName {
  Id: string;
  Name: string;
  AutomaticDeploymentTargets: string[];
  OptionalDeploymentTargets: string[];
  MinimumEnvironmentsBeforePromotion: number;
  IsOptionalPhase: boolean;
}
