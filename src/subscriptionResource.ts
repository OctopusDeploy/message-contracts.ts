/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { EmailPriority } from "./emailPriority";
import type { MixedSpaceResource } from "./mixedSpaceResource";
import type NamedResource from "./namedResource";
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

interface NewEventNotificationSubscription {
  Filter: EventNotificationSubscriptionFilter;
  EmailTeams: string[]; //TODO: ReferenceCollection
  EmailFrequencyPeriod: string; //TODO: timespan
  EmailShowDatesInTimeZoneId: string;
  EmailPriority: EmailPriority;
  WebhookURI: string;
  WebhookTeams: string[]; //TODO: ReferenceCollection
  WebhookTimeout: string; // TODO: timespan
  WebhookHeaderKey: string;
  WebhookHeaderValue: string;
}

export interface EventNotificationSubscription
  extends NewEventNotificationSubscription {
  EmailDigestLastProcessed?: string; //TODO: datetimeoffset
  EmailDigestLastProcessedEventAutoId?: number;
  WebhookLastProcessed?: string; //TODO: datetimeoffset
  WebhookLastProcessedEventAutoId?: number;
}

export interface EventNotificationSubscriptionFilter {
  Users: string[];
  Projects: string[];
  ProjectGroups: string[];
  Environments: string[];
  EventGroups: string[];
  EventCategories: string[];
  EventAgents: string[];
  Tenants: string[];
  Tags: string[];
  DocumentTypes: string[];
}

export function isExistingSubscriptionResource(
  T: SubscriptionResource | NewSubscriptionResource
): T is SubscriptionResource {
  return (T as SubscriptionResource).Links !== undefined;
}

export default SubscriptionResource;
