import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpoLogo from "@/assets/expo-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router";

export const AppBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const CTA = () => (
    <Button color="success" variant="contained">
      Register Now
    </Button>
  );

  const NavItems = () => (
    <>
      <Button fullWidth variant="contained">
        <Typography color="white">Day 1</Typography>
      </Button>
      <Button fullWidth variant="contained">
        <Typography color="white">Day 2</Typography>
      </Button>
      <Button fullWidth variant="contained">
        <Typography color="white">Speakers</Typography>
      </Button>
      <Button fullWidth variant="contained">
        <Typography color="white">FAQs</Typography>
      </Button>
    </>
  );

  return (
    <>
      <MUIAppBar
        component="nav"
        position="sticky"
        sx={(theme) => ({
          borderRadius: "0px",
          backgroundColor: theme.palette.primary.main,
          py: 1,
        })}
      >
        {/** Desktop NavBar */}
        <Container maxWidth="xl" sx={{ display: { md: "block", xs: "none" } }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{ "&:hover": { cursor: "pointer" } }}
                onClick={() => navigate("/")}
              >
                <img src={ExpoLogo} width={125} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: 4,
                }}
              >
                <NavItems />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <CTA />
              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/** Mobile NavBar */}
        <Container sx={{ display: { xs: "block", md: "none" } }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <img src={ExpoLogo} onClick={() => navigate("/")} width={125} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="outlined" color="secondary">
                  <MenuIcon
                    sx={{ color: "white" }}
                    onClick={() => setOpen(true)}
                  />
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </MUIAppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <Button>
            <Close sx={{ p: 2 }} onClick={() => setOpen(false)} />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "100%",
            gap: 4,
            px: 4,
          }}
        >
          <NavItems />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 50,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CTA />
        </Box>
      </Drawer>
    </>
  );
};

export default AppBar;
