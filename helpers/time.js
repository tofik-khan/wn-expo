import moment from "moment-timezone";

export const isLive = (start, end, date) => {
  const startTime = moment.tz(
    `${date} ${start}`,
    "YYYY-MM-DD hh:mma",
    "America/New_York"
  );
  const endTime = moment.tz(
    `${date} ${end}`,
    "YYYY-MM-DD hh:mma",
    "America/New_York"
  );
  const currentTime = moment().tz("America/New_York");

  return currentTime.isAfter(startTime) && currentTime.isBefore(endTime);
};
