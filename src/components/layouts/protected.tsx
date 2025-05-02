import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router";
import { AdminBar } from "../Nav/AdminBar";
import { AdminSideBar } from "../Nav/AdminSideBar";
import {
  useAdminImageMutation,
  useAdminLastLoginMutation,
  useAdminsQuery,
} from "@/queries/admin";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { setCurrentUser } from "@/reducers/admin";
import { Alert, Box, CircularProgress, Snackbar } from "@mui/material";

export const ProtectedLayout = () => {
  const {
    isAuthenticated,
    user,
    isLoading: isLoadingAuth,
    logout,
    loginWithRedirect,
  } = useAuth0();
  const { data: adminData, isLoading: isLoadingAdmins } = useAdminsQuery();
  const adminImageMutation = useAdminImageMutation();
  const adminLastLoginMutation = useAdminLastLoginMutation();
  const [openLoginSnackbar, setOpenLoginSnackbar] = useState(false);

  const updateAdminImage = async ({ _id, image }) => {
    await adminImageMutation.mutateAsync({
      _id,
      image,
    });
  };

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: `${window.location.protocol}//${window.location.host}/403`,
      },
    });
  };

  useEffect(() => {
    if (!(isLoadingAuth || isLoadingAdmins)) {
      const currentUser = adminData.find((admin) => admin.email === user.email);
      if (!currentUser || !currentUser.isAuthorized) {
        handleLogout();
      }

      adminLastLoginMutation.mutate({ _id: currentUser._id });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // Check if user data in the data base needs to be updated
    if (isAuthenticated && currentUser.image !== user.picture)
      updateAdminImage({ _id: currentUser._id, image: user.picture });
  }, []);

  if (isLoadingAuth || isLoadingAdmins)
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (!isAuthenticated) handleLogin();

  const currentUser = adminData.find((admin) => admin.email === user.email);

  if (!currentUser) {
    handleLogout();
    return <></>;
  }

  dispatch(setCurrentUser(currentUser));

  return (
    <>
      <Snackbar
        open={openLoginSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenLoginSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenLoginSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Login Successful!
        </Alert>
      </Snackbar>
      <AdminSideBar />
      <AdminBar />
      <Box
        component={"main"}
        sx={{
          ml: "200px",
          px: "20px",
          pt: "40px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};