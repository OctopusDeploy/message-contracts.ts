export interface VersionRuleTestResponse {
  Errors: string[];
  SatisfiesVersionRange: boolean;
  SatisfiesPreReleaseTag: boolean;
}
