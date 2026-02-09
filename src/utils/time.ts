import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Presenter, Session } from "@/types";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export const isSessionLive = (session: Session<Presenter>) => {
  if (!session) return false;
  const nowET = dayjs().tz("America/New_York");

  const start = dayjs
    .tz(
      // `${session.date} ${session.startTime}`,
      `${nowET.format("YYYY-MM-DD")} ${session.startTime}`,
      "YYYY-MM-DD h:mm a",
      "America/New_York",
    )
    .subtract(5, "minutes");

  const end = dayjs.tz(
    // `${session.date} ${session.endTime}`,
    `${nowET.format("YYYY-MM-DD")} ${session.endTime}`,
    "YYYY-MM-DD h:mm a",
    "America/New_York",
  );

  return nowET.isAfter(start) && nowET.isBefore(end);
};
