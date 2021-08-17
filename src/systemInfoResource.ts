import ResourceWithId from "./resource";

export interface SystemInfoResource extends ResourceWithId {
  ClrVersion: string;
  OSVersion: string;
  ThreadCount: number;
  Uptime: string;
  Version: string;
  WorkingSetBytes: number;
}

export default SystemInfoResource;
