import type { ResourceWithId } from "./resource";

export interface InvitationResource extends ResourceWithId {
  AddToTeamIds: string[]; //TODO: ReferenceCollection
  Expires: string[]; //TODO: datetimeoffset
  InvitationCode: string;
}