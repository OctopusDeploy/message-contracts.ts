import ResourceWithId from "./resource";

export interface InvitationResource extends ResourceWithId {
  AddToTeamIds: string[]; //TODO: ReferenceCollection
  InvitationCode: string;
  Expires: string[]; //TODO: datetimeoffset
}

export default InvitationResource;
