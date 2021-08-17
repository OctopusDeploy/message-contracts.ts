import type { ResourceWithLinks } from "./resource";
import type { OnboardingTaskResource } from "./onboardingTaskResource";

export interface OnboardingResource
  extends ResourceWithLinks<{ Self: string }> {
  Tasks: OnboardingTaskResource[];
}
