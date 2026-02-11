import { Session } from "@/types";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

export const SessionCard = ({ session }: { session: Session }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
          backgroundColor: "white",
          padding: 2,
          border: `1px solid #eeee`,
          borderRadius: 2,
          my: 1,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "200px" } }}>
          <img
            src={session.thumbnail}
            style={{
              width: "100%",
              minHeight: "100px",
              objectFit: "cover",
            }}
            className="session-thumbnail"
          />
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
              <Typography>{`${dayjs(session.date).format("dddd MMM DD")} ${session.startTime} - ${session.endTime} (EST)`}</Typography>
            </Box>
            <Typography variant="h5" my={0.5}>
              {session.title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
