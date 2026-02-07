import { Container, Typography } from "@mui/material";
import { DoNotDisturb } from "@mui/icons-material";

export const Page403 = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DoNotDisturb sx={{ width: "200px", height: "200px" }} color="error" />
        <Typography variant="h1" color="error">
          Error 403
        </Typography>
        <Typography variant="subtitle1">
          You do not have access to this section
        </Typography>
      </Container>
    </>
  );
};
