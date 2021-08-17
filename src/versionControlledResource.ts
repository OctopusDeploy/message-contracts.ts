export type GitRef = string;
export type GitCommit = string;

export interface VcsRef {
  GitRef?: GitRef;
  GitCommit?: GitCommit;
}

export interface IVersionControlReference {
  VersionControlReference: VcsRef;
}

// This value is the "default default" branch
//
// we had the magic string "master" showing up in a few places, which is not ideal.
// we need a "default default" to decide what will show up in the ui as a convenience when
// no other value has been selected, e.g: when choosing what your default branch will be
// in project version control settings.
//
// If possible, using this const should be avoided in favour of:
// - VersionControlSettings.DefaultBranch
// - ProjectContextState.branch
// whichever suits the context.
//
// TODO: decide if we want the user to be able to configure this at a server-wide level.
export const branchNameToShowByDefault = "main";

const getBasePathToShowByDefault = (projectName: String) => {
  return `.octopus/${projectName}`;
};

export { getBasePathToShowByDefault };
