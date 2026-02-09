import { Typography } from "@mui/material";

export const SESSION_INFO = [
  {
    title: (
      <Typography variant="h3" color="error">
        Invalid Date - Please make sure the entered date is correct
      </Typography>
    ),
    venue: "ERROR",
  },
  {
    date: "2026-05-09",
    title: (
      <Typography variant="h3" color="primary">
        Day 1 Agenda: Saturday, May 9<sup>th</sup>
      </Typography>
    ),
    venue: "NVA, SVA & Online",
  },
  {
    date: "2026-05-10",
    title: (
      <Typography variant="h3" color="primary">
        Day 2 Agenda: Sunday, May 10<sup>th</sup>
      </Typography>
    ),
    venue: "NVA, SVA & Online",
  },
];
