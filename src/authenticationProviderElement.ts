import type { IdentityType } from "./identityType";
import type { LinksCollection } from "./linksCollection";

export class AuthenticationProviderElement {
  CSSLinks: string[] = undefined!;
  FormsLoginEnabled: boolean = undefined!;
  IdentityType: keyof typeof IdentityType = undefined!;
  JavascriptLinks: string[] = undefined!;
  Links: LinksCollection<{}> = undefined!;
  Name: string = undefined!;
}