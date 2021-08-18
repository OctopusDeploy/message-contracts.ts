import type Form from "./form";
import type { ResourceWithId } from "./resource";

export default interface InterruptionResource extends ResourceWithId {
  CanTakeResponsibility: boolean;
  CorrelationId: string;
  Created: string;
  Form: Form;
  HasResponsibility: boolean;
  IsLinkedToOtherInterruption: boolean;
  IsPending: boolean;
  RelatedDocumentIds: string[];
  ResponsibleTeamIds: string[];
  ResponsibleUserId: string;
  TaskId: string;
  Title: string;
}
