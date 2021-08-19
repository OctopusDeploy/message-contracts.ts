import type { LinksCollection } from "./linksCollection";

export interface IId {
  Id: string;
}

export interface IIdName {
  Id: string;
  Name: string;
}

export type Resource = {};

export interface ResourceWithLinks<TLinks = {}> {
  Links: LinksCollection<TLinks>;
}

export interface ResourceWithId<TLinks = {}>
  extends ResourceWithLinks<TLinks>,
  IId {
  Id: string;
}