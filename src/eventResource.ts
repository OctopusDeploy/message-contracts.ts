import type { NamedResource } from "./namedResource";
import type { OpPatch } from "json-patch";
import type { ResourceWithId } from "./resource";

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventCategoryResource extends NamedResource { }

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventAgentResource extends NamedResource { }

export interface EventReference {
  ReferencedDocumentId: string;
  StartIndex: number;
  Length: number;
}

export interface EventResource extends ResourceWithId {
  Category: string;
  UserId: string;
  Username: string;
  IdentityEstablishedWith: string;
  UserAgent: string;
  Message: string;
  MessageHtml: string;
  MessageReferences: EventReference[];
  Occurred: string;
  Comments: string;
  Details: string;
  SpaceId?: string;
  IsService: boolean;
  ChangeDetails: ChangeDetails;
}

export interface ChangeDetails {
  DocumentContext: object | null;
  Differences: OpPatch[] | null;
}

export interface EventGroupResource extends NamedResource {
  EventCategories: string[];
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DocumentTypeResource extends NamedResource { }
