import type { NamedResource } from "./namedResource";
import type { OpPatch } from "json-patch";
import type { ResourceWithId } from "./resource";

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventCategoryResource extends NamedResource { }

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventAgentResource extends NamedResource { }

export interface EventReference {
  Length: number;
  ReferencedDocumentId: string;
  StartIndex: number;
}

export interface EventResource extends ResourceWithId {
  Category: string;
  ChangeDetails: ChangeDetails;
  Comments: string;
  Details: string;
  IdentityEstablishedWith: string;
  IsService: boolean;
  Message: string;
  MessageHtml: string;
  MessageReferences: EventReference[];
  Occurred: string;
  SpaceId?: string;
  UserAgent: string;
  UserId: string;
  Username: string;
}

export interface ChangeDetails {
  Differences: OpPatch[] | null;
  DocumentContext: object | null;
}

export interface EventGroupResource extends NamedResource {
  EventCategories: string[];
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DocumentTypeResource extends NamedResource { }
