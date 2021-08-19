import type { VariablePromptDisplaySettings } from "./variablePromptDisplaySettings";

export interface VariablePromptOptions {
  Label: string;
  Description: string;
  Required: boolean;
  DisplaySettings: VariablePromptDisplaySettings;
}