/* eslint-disable @typescript-eslint/no-explicit-any */

import type { VariablePromptDisplaySettings } from "./variableResource";

interface Checkbox extends Control {
  Text: string;
}

interface Paragraph extends Control {
  Text: string;
  ResolveLinks: boolean;
}

interface Button {
  Text: string;
  Value: any;
  RequiresConfirmation: boolean;
}

interface SubmitButtonGroup extends Control {
  Buttons: Button[];
}

interface TextArea extends Control {
  Label: string;
}

interface VariableValue extends Control {
  Name: string;
  Label: string;
  Description: string;
  Required: boolean;
  DisplaySettings: VariablePromptDisplaySettings;
}

enum ControlType {
  Checkbox = "Checkbox",
  Paragraph = "Paragraph",
  Button = "Button",
  SubmitButtonGroup = "SubmitButtonGroup",
  TextArea = "TextArea",
  VariableValue = "VariableValue",
}

interface Control {
  Type: ControlType;
}

interface FormElement {
  Name: string;
  Control: Control;
  IsValueRequired: boolean;
}

interface Form {
  Values: { [name: string]: string };
  Elements: FormElement[];
}

export {
  Form,
  FormElement,
  Control,
  ControlType,
  VariableValue,
  TextArea,
  Checkbox,
  Paragraph,
  SubmitButtonGroup,
  Button,
};
export default Form;
