import type { EmailPriority } from "./emailPriority";
import type { EventNotificationSubscriptionFilter } from "./eventNotificationSubscriptionFilter";

export interface EventNotificationSubscription
  extends NewEventNotificationSubscription {
  EmailDigestLastProcessed?: string; //TODO: datetimeoffset
  EmailDigestLastProcessedEventAutoId?: number;
  WebhookLastProcessed?: string; //TODO: datetimeoffset
  WebhookLastProcessedEventAutoId?: number;
}

export interface NewEventNotificationSubscription {
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
