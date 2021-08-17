//public List<ReferenceDataItem> Environments { get; set; }
//public Dictionary<string, IEnumerable<ReferenceDataItem>> ChannelEnvironments { get; set; }
//public List<ReleaseProgressionResource> Releases { get; set; }
import type ReleaseProgresionResource from "./releaseProgressionResource";
import type ReferenceDataItem from "./referenceDataItem";

export interface ProgressionResource {
  Environments: ReferenceDataItem[];
  ChannelEnvironments: { [index: string]: ReferenceDataItem[] };
  LifecycleEnvironments: { [index: string]: ReferenceDataItem[] };
  Releases: ReleaseProgresionResource[];
}

export default ProgressionResource;
