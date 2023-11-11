import moment from "moment-timezone";

export const TIMEFORMAT = "YYYY-MM-DD hh:mma";

export const isLive = (start, current, end) => {
  const startTime = moment.tz(`${start}`, TIMEFORMAT, "America/New_York");
  const endTime = moment.tz(`${end}`, TIMEFORMAT, "America/New_York");
  const currentTime = moment.tz(`${current}`, TIMEFORMAT, "America/New_York");
  console.log(
    start,
    current,
    end,
    currentTime.isBetween(startTime.format(), endTime.format(), undefined, "[)")
  );
  return currentTime.isBetween(
    startTime.format(),
    endTime.format(),
    undefined,
    "[)"
  );
};
