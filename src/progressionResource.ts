//public List<ReferenceDataItem> Environments { get; set; }
//public Dictionary<string, IEnumerable<ReferenceDataItem>> ChannelEnvironments { get; set; }
//public List<ReleaseProgressionResource> Releases { get; set; }
import type { ReferenceDataItem } from "./referenceDataItem";
import type { ReleaseProgressionResource } from "./releaseProgressionResource";

export interface ProgressionResource {
  ChannelEnvironments: { [index: string]: ReferenceDataItem[] };
  Environments: ReferenceDataItem[];
  LifecycleEnvironments: { [index: string]: ReferenceDataItem[] };
  Releases: ReleaseProgressionResource[];
}
