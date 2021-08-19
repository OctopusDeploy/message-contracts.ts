/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { EventNotificationSubscription, NewEventNotificationSubscription } from "./eventNotificationSubscription";
import type { MixedSpaceResource } from "./mixedSpaceResource";
import type { NamedResource } from "./namedResource";
import type { NewNamedResource } from "./namedResource";

interface CommonSubscriptionResource extends MixedSpaceResource {
  Type: SubscriptionType;
  IsDisabled: boolean;
}

export interface SubscriptionResource
  extends NamedResource,
  CommonSubscriptionResource {
  EventNotificationSubscription: EventNotificationSubscription;
}

export interface NewSubscriptionResource
  extends NewNamedResource,
  CommonSubscriptionResource {
  EventNotificationSubscription: NewEventNotificationSubscription;
}

export enum SubscriptionType {
  Event = "Event",
}
export function isExistingSubscriptionResource(
  T: SubscriptionResource | NewSubscriptionResource
): T is SubscriptionResource {
  return (T as SubscriptionResource).Links !== undefined;
}