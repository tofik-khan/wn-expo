import { Box, Typography } from "@mui/material";
import { Countdown } from "../countdown";
import dayjs from "dayjs";

export const SectionHero = () => {
  return (
    <>
      <Box
        sx={() => ({
          background: `url(/images/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: `inset 0 0 0 2000px rgba(11, 29, 55, 0.8);`,
          width: "100%",
          minHeight: "600px",
          color: "white",
          position: "relative",
        })}
      >
        <Typography variant="h1" textAlign={"center"} pt={10}>
          2026 Waqf-e-Nau Career Expo
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign={"center"}
          maxWidth={"600px"}
          mx={"auto"}
          py={5}
          color="white"
        >
          Join us for the Waqf-e-Nau Career Expo -- a journey through
          professional excelence and spiritual dedication
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            my: 3,
          }}
        >
          <Countdown date={dayjs("Apr 19 2026 11:00:00 GMT-0500").format()} />
          <Typography my={2} variant="subtitle2">
            May X<sup>th</sup> Y<sup>th</sup> 2026
          </Typography>
        </Box>
        <Typography textAlign={"center"}>
          <Typography color="secondary" component={"span"} variant="h4">
            *
          </Typography>{" "}
          Open to Non-Waqfeen-e-Nau as well
        </Typography>
      </Box>
    </>
  );
};
