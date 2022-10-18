import type { ResourceWithId } from "../resource";
import type { SpaceScopedResource } from "../spaceScopedResource";

export interface CreateReleaseCommandV1 extends SpaceScopedResource, ResourceWithId {
    spaceIdOrName: string;
    projectName: string;
    packageVersion: string;
    gitCommit?: string;
    gitRef?: string;
    releaseVersion?: string;
    channelName?: string;
    packages?: string[];
    releaseNotes?: string;
    ignoreIfAlreadyExists: boolean;
    ignoreChannelRules: boolean;
    packagePrerelease?: string;
}
