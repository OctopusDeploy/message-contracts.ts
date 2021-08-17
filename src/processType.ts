export enum ProcessType {
  Deployment = "Deployment",
  Runbook = "Runbook",
}

type Alias = {
  noun: string;
  verb: string;
  plural: string;
  pastTense: string;
  preposition: string;
};

type Process = {
  alias: Alias;
  manifest: "Release" | "Snapshot";
};

export const ProcessTypeAliasMap: Record<ProcessType, Process> = {
  [ProcessType.Deployment]: {
    alias: {
      noun: "deployment",
      verb: "deploy",
      plural: "deployments",
      pastTense: "deployed",
      preposition: "to",
    },
    manifest: "Release",
  },
  [ProcessType.Runbook]: {
    alias: {
      noun: "runbook",
      verb: "run",
      plural: "runs",
      pastTense: "ran",
      preposition: "on",
    },
    manifest: "Snapshot",
  },
};
