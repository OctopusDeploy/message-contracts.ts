import type { LinksCollection } from "./linksCollection";
import type { ResourceCollectionLinks } from "./resourceCollectionLinks";

export interface ResourceCollection<TResource> {
  Items: TResource[];
  ItemsPerPage: number;
  ItemType: string;
  LastPageNumber: number;
  Links: LinksCollection<ResourceCollectionLinks>;
  NumberOfPages: number;
  TotalResults: number;
}