import type LinksCollection from "./linksCollection";

interface ServerStatusHealthResourceLinks {
  Self: string;
  Index: string;
}

export interface ServerStatusHealthResource {
  IsOperatingNormally: boolean;
  Description: string;
  IsEntireClusterReadOnly: boolean;
  IsEntireClusterDrainingTasks: boolean;
  IsCompliantWithLicense: boolean;
  Links: LinksCollection<ServerStatusHealthResourceLinks>;
}

export default ServerStatusHealthResource;
