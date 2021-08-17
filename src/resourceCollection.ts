import type LinksCollection from "./linksCollection";

export interface ResourceCollection<TResource> {
  Items: TResource[];
  ItemsPerPage: number;
  ItemType: string;
  LastPageNumber: number;
  Links: LinksCollection<ResourceCollectionLinks>;
  NumberOfPages: number;
  TotalResults: number;
}

export default ResourceCollection;
