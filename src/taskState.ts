export enum TaskState {
  Queued = "Queued",
  Executing = "Executing",
  Failed = "Failed",
  Canceled = "Canceled",
  TimedOut = "TimedOut",
  Success = "Success",
  Cancelling = "Cancelling",
}

export default TaskState;
