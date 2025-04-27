import { Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import ExpoLogo from "@/assets/expo-logo.png";

export const AdminSideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "200px",
          height: "100vh",
          border: `1px solid ${theme.palette.grey[300]}`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ "&:hover": { cursor: "pointer" }, mt: 3 }}
          onClick={() => navigate("/")}
        >
          <img src={ExpoLogo} width={125} height={43} />
        </Box>
      </Box>
    </>
  );
};
