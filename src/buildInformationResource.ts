import type { CommitDetail } from "./commitDetail";

export interface NewOctopusPackageVersionBuildInformationResource {
    PackageId: string;
    Version: string;
    OctopusBuildInformation: OctopusBuildInformationResource;
}

export interface OctopusBuildInformationResource {
    Branch: string;
    BuildEnvironment: string;
    BuildNumber: string;
    BuildUrl: string;
    Commits: Omit<CommitDetail, "LinkUrl">[];
    VcsCommitNumber: string;
    VcsType: string;
    VcsRoot: string;
}
