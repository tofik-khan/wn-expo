import { Presenter } from "@/types";
import { ArrowRight } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";

export const FeaturedPresenter = ({
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
            backgroundColor: theme.palette.primary.main,
            borderRadius: "16px 16px 0px 0px",
          })}
        />
        <Box
          sx={{
            marginTop: "-75px",
            marginX: "auto",
            border: "5px solid white",
            width: "fit-content",
            borderRadius: "50%",
          }}
        >
          <Avatar
            src={presenter.image}
            sx={(theme) => ({
              width: "150px",
              height: "150px",
              border: `5px solid ${theme.palette.secondary.main}`,
            })}
          />
        </Box>
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
            variant="button"
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
