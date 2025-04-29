import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router";
import { AdminBar } from "../Nav/AdminBar";
import { AdminSideBar } from "../Nav/AdminSideBar";
import {
  useAdminImageMutation,
  useAdminLastLoginMutation,
  useAdminsQuery,
} from "@/queries/admin";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks";
import { setCurrentUser } from "@/reducers/admin";

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
  }, []);

  if (isLoadingAuth || isLoadingAdmins) return <p>Loading...</p>;

  if (!isAuthenticated) handleLogin();

  const currentUser = adminData.find((admin) => admin.email === user.email);

  // Check if user data in the data base needs to be updated
  if (currentUser.image !== user.picture)
    updateAdminImage({ _id: currentUser._id, image: user.picture });

  dispatch(setCurrentUser(currentUser));

  return (
    <>
      <AdminSideBar />
      <AdminBar />
      <main
        style={{
          marginLeft: "200px",
          padding: "20px",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};