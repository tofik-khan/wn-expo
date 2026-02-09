import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

export const SectionCTA = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={(theme) => ({
          width: "100%",
          py: 5,
          backgroundColor: `${theme.palette.primary.main}`,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 3,
          color: "white",
        })}
      >
        <Button sx={{ marginX: 1 }} color="success" variant="contained">
          Register for the Expo
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ color: "white", marginX: 1 }}
          onClick={() => navigate("/sessions/2026-05-09")}
        >
          Day 1 Agenda
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ color: "white", marginX: 1 }}
          onClick={() => navigate("/sessions/2026-05-10")}
        >
          Day 2 Agenda
        </Button>
      </Box>
    </>
  );
};
