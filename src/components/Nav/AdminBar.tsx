import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { Airplay, CoPresent } from "@mui/icons-material";
import { useSessionsCountQuery } from "@/queries/session";
import { usePresentersCountQuery } from "@/queries/presenters";

const Sessions = ({ count, isLoading }) => {
  const theme = useTheme();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          borderColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
        }}
      >
        <Airplay />
        {count} sessions
      </Card>
    </>
  );
};

const Presenters = ({ count, isLoading }) => {
  const theme = useTheme();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          borderColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
        }}
      >
        <CoPresent />
        {count} Presenters
      </Card>
    </>
  );
};

export const AdminBar = () => {
  const { user } = useAuth0();
  const { data: sessionCount, isLoading: isLoadingSessionCount } =
    useSessionsCountQuery();
  const { data: presentersCount, isLoading: isLoadingPresenterCount } =
    usePresentersCountQuery();
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          left: "202px",
          backgroundColor: "white",
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: "4px",
          borderLeft: 0,
          borderTop: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: `calc(100% - 210px)`,
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <Sessions count={sessionCount} isLoading={isLoadingSessionCount} />
          <Presenters
            count={presentersCount}
            isLoading={isLoadingPresenterCount}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            gap: 2,
            color: "black",
            mx: 3,
          }}
        >
          <Avatar src={user.picture} />
          <Typography>{`${user.given_name} ${user.family_name}`}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: 70 }}></Box>
    </>
  );
};
