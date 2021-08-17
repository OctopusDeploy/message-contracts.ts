import type { OctopusError } from "./octopusError";

export interface Warnings {
  message: string;
  warnings: string[];
  parsedHelpLinks?: string[];
  helpText?: string;
  helpLink?: string;
  fieldWarnings: {
    [other: string]: string;
  };
  details?: {
    [key: string]: string;
  };
}

export interface OctopusValidationResponse {
  HasWarnings: boolean;
  Warnings: WarningGuidance;
  HasErrors: boolean;
  Errors: OctopusError;
}

export interface WarningGuidance {
  WarningMessage: string;
  Warnings: string[];
  ParsedHelpLinks?: string[];
  HelpText?: string;
  HelpLink?: string;
  Details?: WarningDetails;
}

export interface WarningDetails {
  [key: string]: WarningDetailEntry;
}

export interface WarningDetailEntry {
  [key: string]: string[];
}

export default OctopusValidationResponse;

export function createWarningsFromOctopusWarning(
  warning: WarningGuidance
): Warnings {
  return {
    message: warning.WarningMessage,
    warnings: warning.Warnings || [],
    parsedHelpLinks: warning.ParsedHelpLinks,
    helpLink: warning.HelpLink,
    helpText: warning.HelpText,
    fieldWarnings: {},
    details: flattenWarningDetails(warning.Details),
  };
}

function joinWarningEntries(
  parentKey: string,
  entry: WarningDetailEntry | undefined = {}
) {
  return Object.keys(entry).reduce(
    (prev, key) => ({
      ...prev,
      [`${parentKey}:${key}`]: entry[key].join(", "),
    }),
    {}
  );
}

function flattenWarningDetails(
  details: WarningDetails | undefined = {}
): Record<string, string> {
  return Object.keys(details).reduce(
    (prev, parentKey) => ({
      ...prev,
      ...joinWarningEntries(parentKey, details[parentKey]),
    }),
    {}
  );
}
