/* eslint-disable @typescript-eslint/consistent-type-assertions */

import type { ProcessType } from "./processType";
import { isPropertyDefinedAndNotNull } from "./utils";

export interface ReferenceDataItem {
  Id: string;
  Name: string;
}

export interface ProcessReferenceDataItem extends ReferenceDataItem {
  ProcessType: ProcessType;
}

export function isProcessReferenceDataItem(
  item: ReferenceDataItem
): item is NonNullable<ProcessReferenceDataItem> {
  if (!item) {
    return false;
  }

  const converted = item as ProcessReferenceDataItem;
  return isPropertyDefinedAndNotNull(converted, "ProcessType");
}

export default ReferenceDataItem;
