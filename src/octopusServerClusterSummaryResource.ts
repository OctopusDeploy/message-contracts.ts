import type { LinksCollection } from "./linksCollection";
import type { OctopusServerNodeSummaryResource } from "./octopusServerNodeSummaryResource";

export interface OctopusServerClusterSummaryResource {
  Nodes: OctopusServerNodeSummaryResource[];
  Links: LinksCollection<{}>;
}