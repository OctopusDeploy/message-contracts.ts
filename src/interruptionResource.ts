import ResourceWithId from "./resource";
import type Form from "./form";

interface InterruptionResource extends ResourceWithId {
  Title: string;
  Created: string;
  IsPending: boolean;
  Form: Form;
  RelatedDocumentIds: string[];
  ResponsibleTeamIds: string[];
  ResponsibleUserId: string;
  CanTakeResponsibility: boolean;
  HasResponsibility: boolean;
  TaskId: string;
  IsLinkedToOtherInterruption: boolean;
  CorrelationId: string;
}

export default InterruptionResource;
