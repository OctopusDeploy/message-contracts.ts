/* This resource represents a resource that always belongs to a space. */
export interface SpaceScopedResource {
  SpaceId: string;
}

export type NewSpaceScopedResource = {
  //Since SpaceId is correctly inferred when creating resources, we don't need to specify it.
};