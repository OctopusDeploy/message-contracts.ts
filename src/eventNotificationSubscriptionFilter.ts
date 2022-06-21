export interface EventNotificationSubscriptionFilter {
  DocumentTypes: string[];
  Environments: string[];
  EventGroups: string[];
  EventCategories: string[];
  EventAgents: string[];
  Projects: string[];
  ProjectGroups: string[];
  Tags: string[];
  Tenants: string[];
  Users: string[];
}
