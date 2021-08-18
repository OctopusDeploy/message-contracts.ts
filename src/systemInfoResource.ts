import type { ResourceWithId } from "./resource";

export interface SystemInfoResource extends ResourceWithId {
  Version: string;
  OSVersion: string;
  WorkingSetBytes: number;
  ClrVersion: string;
  ThreadCount: number;
  Uptime: string;
}

export default SystemInfoResource;
