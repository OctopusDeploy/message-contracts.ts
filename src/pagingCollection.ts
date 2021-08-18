import type { ResourceCollection } from ".";
export type PagingCollection<TResource> = Omit<
  ResourceCollection<TResource>,
  "Links"
>;
