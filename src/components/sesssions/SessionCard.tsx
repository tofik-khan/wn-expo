import { Presenter as TPresenter, Session } from "@/types";
import htmlParser from "@/utils/parseHTML";
import { Circle, MeetingRoomOutlined } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import { Presenter } from "./Presenter";
import { useEffect, useState } from "react";
import { isSessionLive } from "@/utils/time";

export const SessionCard = ({
  session,
  onClick,
}: {
  session: Session<TPresenter>;
  onClick: () => void;
}) => {
  const presenterCount = 2;
  const presentersToDisplay = session.presenters.slice(0, presenterCount);
  const addtionalPresentersCount = session.presenters.length - presenterCount;

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLive(isSessionLive(session));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
          backgroundColor: "white",
          padding: 2,
          border: `1px solid #eeee`,
          borderRadius: 2,
          my: 2,
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box>
          <img src={session.thumbnail} className="session-thumbnail" />
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                my={1}
              >{`${session.startTime} - ${session.endTime} (EST)`}</Typography>
              {isLive && (
                <Chip
                  label={<Typography>LIVE</Typography>}
                  variant="outlined"
                  color="error"
                  size="small"
                  icon={<Circle />}
                />
              )}
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                gap: 0.5,
                border: `1px solid ${theme.palette.grey[300]}`,
                py: 0.5,
                px: 1,
                width: "fit-content",
                borderRadius: 1,
              })}
            >
              <MeetingRoomOutlined />
              <Typography>{session.location}</Typography>
            </Box>
            <Typography variant="h5" my={0.5}>
              {session.title}
            </Typography>
            <Box
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {htmlParser({ html: session.description })}
            </Box>
          </Box>
          <Box>
            {presentersToDisplay.map((presenter) => (
              <Presenter key={presenter._id} data={presenter} />
            ))}
            {addtionalPresentersCount > 0 && (
              <Typography
                color="text.secondary"
                textAlign={"center"}
              >{`+${addtionalPresentersCount} more`}</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
