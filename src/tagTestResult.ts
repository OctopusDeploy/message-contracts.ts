export interface TagTestResult {
  [key: string]: {
    IsMatched: boolean;
    Reason: string;
    MissingTags: string[];
  };
}
