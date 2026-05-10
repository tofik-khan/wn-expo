import { Box, Button, Typography } from "@mui/material";

export const SectionSurvey = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          width: "100%",
          py: 5,
          backgroundColor: `${theme.palette.primary.main}`,
          textAlign: "center",
          gap: 3,
          color: "white",
        })}
      >
        <Typography variant="h4" marginY={2}>
          JazakaAllah for joining the Waqf-e-Nau Expo.
        </Typography>
        <Typography variant="body2" marginY={2}>
          We will greatly appreciate your input to make future events better
        </Typography>
        <Button
          sx={{ marginX: 1 }}
          color="success"
          variant="contained"
          href="https://forms.gle/ekugE1bQGVgprqao6"
          target="_blank"
        >
          Share your Feedback
        </Button>
      </Box>
    </>
  );
};
