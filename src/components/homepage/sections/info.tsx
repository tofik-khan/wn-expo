import { Grid, Typography } from "@mui/material";

const Block = ({ value, title }) => {
  return (
    <>
      <Grid
        size={{ sm: 6, md: 3 }}
        sx={(theme) => ({
          padding: 5,
          backgroundColor: `${theme.palette.primary.main}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          width: "100%",
        })}
      >
        <Typography variant="subtitle2" fontSize={"32px"}>
          {value}
        </Typography>
        <Typography variant="subtitle2" fontSize={"32px"} color="white">
          {title}
        </Typography>
      </Grid>
    </>
  );
};

export const SectionInfo = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          my: 10,
          mx: 2,
        }}
      >
        <Block value={2} title={"Days"} />
        <Block value={"25+"} title={"Careers"} />
        <Block value={"32+"} title={"Sessions"} />
        <Block value={"50+"} title={"Presenters"} />
      </Grid>
    </>
  );
};
