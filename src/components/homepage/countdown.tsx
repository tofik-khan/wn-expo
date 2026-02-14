import { Box, Typography } from "@mui/material";
import Counter from "react-countdown";

const Block = ({ value, title }) => {
  return (
    <Box
      sx={(theme) => ({
        border: `5px solid ${theme.palette.secondary.main}`,
        borderRadius: "50%",
        padding: 0.5,
      })}
    >
      <Box
        sx={(theme) => ({
          width: {
            xs: "75px",
            md: "100px",
          },
          height: {
            xs: "75px",
            md: "100px",
          },

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: "50%",
        })}
      >
        <Typography variant="h3">{value}</Typography>
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

const renderer = ({ days, hours, minutes, seconds }) => {
  const DD = days < 10 ? `0${days}` : days;
  const HH = hours < 10 ? `0${hours}` : hours;
  const MM = minutes < 10 ? `0${minutes}` : minutes;
  const SS = seconds < 10 ? `0${seconds}` : seconds;
  // Render a countdown
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Block value={DD} title={"DAYS"} />
      <Block value={HH} title={"HOURS"} />
      <Block value={MM} title={"MINS"} />
      <Block value={SS} title={"SECS"} />
    </Box>
  );
};

export const Countdown = ({ date }) => {
  return <Counter date={date} renderer={renderer} />;
};
