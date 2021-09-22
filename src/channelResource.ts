import type { ChannelOclResource } from "./channelOclResource";
import type { ChannelVersionRuleResource } from "./channelVersionRuleResource";
import type { ICommitCommand } from "./commitCommand";
import type { NamedResource } from "./namedResource";

export interface ChannelResource extends NamedResource {
  Description: string;
  ProjectId: string;
  LifecycleId: string | null;
  IsDefault: boolean;
  SpaceId: string;
  Rules: ChannelVersionRuleResource[];
  TenantTags: string[];
}

export type ModifyChannelOclCommand = ChannelOclResource & ICommitCommand;
export type ModifyChannelCommand = ChannelResource & ICommitCommand;
export type CreateChannelCommand = ChannelResource & ICommitCommand;
