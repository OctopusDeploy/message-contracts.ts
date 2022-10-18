import type { ResourceWithId } from "../resource";
import type { SpaceScopedResource } from "../spaceScopedResource";

export type Variables = Record<string, string>;

export interface CreateExecutionCommandV1 extends SpaceScopedResource, ResourceWithId {
    spaceIdOrName: string;
    projectName: string;
    forcePackageDownload?: boolean;
    specificMachineNames?: string[];
    excludedMachineNames?: string[];
    skipStepNames?: string[];
    useGuidedFailure: boolean;
    runAt?: string;
    noRunAfter?: string;
    variables: Variables;
}
