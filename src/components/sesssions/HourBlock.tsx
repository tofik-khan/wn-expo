import { HourSession } from "@/types";
import { Box, Divider, Typography } from "@mui/material";
import { SessionCard } from "./SessionCard";
export const HourBlock = ({
  data,
  onClick,
}: {
  data: HourSession;
  onClick: (session) => void;
}) => {
  return (
    <>
      <Box>
        <Divider sx={{ my: 3 }}>
          <Typography color="text.secondary" variant="h5">
            {data._id}
          </Typography>
        </Divider>
        {data.sessions.map((session) => (
          <SessionCard
            onClick={() => onClick(session)}
            key={session._id}
            session={session}
          />
        ))}
      </Box>
    </>
  );
};
