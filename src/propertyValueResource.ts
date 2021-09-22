export type PropertyValueResource = string | SensitiveValue | null;

export interface SensitiveValue {
  HasValue: boolean;
  Hint?: string;
  // NewValue can also be null at runtime
  NewValue?: string;
}

export function isSensitiveValue(
  value: PropertyValueResource
): value is SensitiveValue {
  if (typeof value === "string" || value === null) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(value, "HasValue");
}
