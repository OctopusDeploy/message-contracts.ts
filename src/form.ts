/* eslint-disable @typescript-eslint/no-explicit-any */

import type { VariablePromptDisplaySettings } from "./variablePromptDisplaySettings";

export interface Checkbox extends Control {
  Text: string;
}

export interface Paragraph extends Control {
  Text: string;
  ResolveLinks: boolean;
}

export interface Button {
  Text: string;
  Value: any;
  RequiresConfirmation: boolean;
}

export interface SubmitButtonGroup extends Control {
  Buttons: Button[];
}

export interface TextArea extends Control {
  Label: string;
}

export interface VariableValue extends Control {
  Name: string;
  Label: string;
  Description: string;
  Required: boolean;
  DisplaySettings: VariablePromptDisplaySettings;
}

export enum ControlType {
  Checkbox = "Checkbox",
  Paragraph = "Paragraph",
  Button = "Button",
  SubmitButtonGroup = "SubmitButtonGroup",
  TextArea = "TextArea",
  VariableValue = "VariableValue",
}

export interface Control {
  Type: ControlType;
}

export interface FormElement {
  Name: string;
  Control: Control;
  IsValueRequired: boolean;
}

export interface Form {
  Values: { [name: string]: string };
  Elements: FormElement[];
}