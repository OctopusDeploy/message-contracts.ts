import type ChannelVersionRuleResource from "./channelVersionRuleResource";
import type { ICommitCommand } from "./commitCommand";
import type { NamedResource } from "./namedResource";

export default interface ChannelResource extends NamedResource {
  Description: string;
  ProjectId: string;
  LifecycleId: string | null;
  IsDefault: boolean;
  SpaceId: string;
  Rules: ChannelVersionRuleResource[];
  TenantTags: string[];
}

export interface ChannelOclResource {
  Ocl: string;
}

export type ModifyChannelOclCommand = ChannelOclResource & ICommitCommand;
export type ModifyChannelCommand = ChannelResource & ICommitCommand;
export type CreateChannelCommand = ChannelResource & ICommitCommand;
