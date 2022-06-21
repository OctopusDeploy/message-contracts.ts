export interface TimeSpan {
  Days: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
}

export class TimeSpanString extends String {
  public static Zero = "00:00:00";
  public static OneHour = "0.01:00:00";
  public static TenSeconds = "00:00:10";
}
