import type { OnboardingTaskResource } from "./onboardingTaskResource";
import type { ResourceWithLinks } from "./resource";

export interface OnboardingResource
  extends ResourceWithLinks<{ Self: string }> {
  Tasks: OnboardingTaskResource[];
}
