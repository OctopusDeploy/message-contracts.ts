import type { ResourceWithId } from "./resource";

export interface LicenseResource extends ResourceWithId<{ Self: string }> {
  LicenseText: string;
  SerialNumber: string;
}
