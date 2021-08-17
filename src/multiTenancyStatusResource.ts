import type LinksCollection from "./linksCollection";

export interface MultiTenancyStatusResource {
  Enabled: boolean;
  Links: LinksCollection<{ Self: string }>;
}

export default MultiTenancyStatusResource;
