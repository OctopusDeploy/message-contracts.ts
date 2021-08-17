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
