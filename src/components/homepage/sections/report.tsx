import { Box, Container, Typography } from "@mui/material";

export const SectionReport = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          width: "100%",
          background: `radial-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          my: 3,
        })}
      >
        <Container sx={{ p: 3, py: 5, color: "white" }}>
          <Typography variant="h2" textAlign={"center"} my={2}>
            Waqf-e-Nau Expo Report 2025
          </Typography>
          <Typography textAlign={"center"} my={3}>
            Watch our detailed report for the 2025 highlights
          </Typography>
          <Box
            sx={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <iframe
              width={"853"}
              height={"480"}
              style={{ borderRadius: "16px" }}
              src={`https://www.youtube.com/embed/Wy8wwvaZu8Y`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
