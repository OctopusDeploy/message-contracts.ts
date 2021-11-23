import type { ChannelOclResource } from "./channelOclResource";
import type { ChannelVersionRuleResource } from "./channelVersionRuleResource";
import type { ICommitCommand } from "./commitCommand";
import type { NamedResource } from "./namedResource";
import type { NewSpaceScopedResource } from "./spaceScopedResource";

export interface ChannelResource extends NamedResource {
  Description: string;
  ProjectId: string;
  LifecycleId: string | null;
  IsDefault: boolean;
  SpaceId: string;
  Rules: ChannelVersionRuleResource[];
  TenantTags: string[];
}

export interface NewChannelResource extends NewSpaceScopedResource {
  Name: string;
  ProjectId: string;
}

export function NewChannel(name: string, projectId: string): NewChannelResource {
  return {
    Name: name,
    ProjectId: projectId
  }
}

export type ModifyChannelOclCommand = ChannelOclResource & ICommitCommand;
export type ModifyChannelCommand = ChannelResource & ICommitCommand;
export type CreateChannelCommand = ChannelResource & ICommitCommand;
