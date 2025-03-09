import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export function dateFormat(dateData: Date): string {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  
  const date = dayjs.tz(dateData, "UTC");
  const result = date.format("YYYY.MM.DD");
  return result;
};