import { Presenter as TPresenter } from "@/types";
import { Avatar, Box, Chip, Typography } from "@mui/material";

export const Presenter = ({ data }: { data: TPresenter }) => {
  return (
    <>
      <Chip
        sx={(theme) => ({
          height: "auto",
          width: "100%",
          my: 1,
          p: 1,
          display: "flex",
          justifyContent: "flex-start",
          gap: 1,
          backgroundColor: theme.palette.grey[100],
        })}
        label={
          <Box>
            <Typography>{data.name}</Typography>
            <Typography color="text.secondary">{data.department}</Typography>
          </Box>
        }
        icon={
          <Avatar sx={{ width: "80px", height: "80px" }} src={data.image} />
        }
      />
    </>
  );
};
