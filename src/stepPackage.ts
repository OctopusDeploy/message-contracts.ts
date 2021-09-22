import type { InputJsonSchema } from "@octopusdeploy/runtime-inputs";

export type StepUI = unknown;

export interface StepPackage {
  name: string;
  description: string;
  version: string;
  stepUI: StepUI;
  schema: InputJsonSchema;
  prerelease: boolean;
}
