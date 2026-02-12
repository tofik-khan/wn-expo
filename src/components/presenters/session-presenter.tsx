import { Presenter } from "@/types";
import { ArrowRight } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";

export const SessionPresenter = ({
  presenter,
  onClick,
}: {
  presenter: Presenter;
  onClick: () => void;
}) => {
  return (
    <>
      <Box
        onClick={onClick}
        sx={(theme) => ({
          width: "100%",
          backgroundColor: "white",
          border: `1px solid ${theme.palette.grey[200]}`,
          borderRadius: 4,
          "&:hover": {
            cursor: "pointer",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            height: "100px",
            backgroundColor: theme.palette.secondary.light,
            borderRadius: "16px 16px 0px 0px",
          })}
        />
        <Avatar
          src={presenter.image}
          sx={() => ({
            width: "100px",
            height: "100px",
            marginTop: "-75px",
            marginX: "auto",
            border: `5px solid white`,
          })}
        />
        <Box sx={{ p: 2 }}>
          <Typography>
            <strong>{presenter.name}</strong>
          </Typography>
          <Typography variant="overline">{presenter.department}</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            borderTop: `1px solid ${theme.palette.grey[200]}`,
            display: "flex",
            justifyContent: "end",
          })}
        >
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
            }}
          >
            View Profile
            <ArrowRight />
          </Typography>
        </Box>
      </Box>
    </>
  );
};
