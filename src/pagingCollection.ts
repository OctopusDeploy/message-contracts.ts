import type { ResourceCollection } from "./resourceCollection";

export type PagingCollection<TResource> = Omit<
    ResourceCollection<TResource>,
    "Links"
>;
