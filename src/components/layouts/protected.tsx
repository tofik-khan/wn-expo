import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router";
import { AdminBar } from "../Nav/AdminBar";
import { AdminSideBar } from "../Nav/AdminSideBar";
import { useAdminsQuery } from "@/queries/admin";
import { useEffect } from "react";

export const ProtectedLayout = () => {
  const {
    isAuthenticated,
    user,
    isLoading: isLoadingAuth,
    logout,
    loginWithRedirect,
  } = useAuth0();
  const { data: adminData, isLoading: isLoadingAdmins } = useAdminsQuery();

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
    if (isLoadingAuth || isLoadingAdmins) {
      //pass
    } else {
      const currentUser = adminData.find((admin) => admin.email === user.email);
      if (!currentUser) {
        handleLogout();
      }
    }
  });

  if (isLoadingAuth || isLoadingAdmins) return <p>Loading...</p>;

  if (!isAuthenticated) handleLogin();

  const currentUser = adminData.find((admin) => admin.email === user.email);

  console.log(currentUser);

  return (
    <>
      <AdminSideBar />
      <AdminBar />
      <main style={{ marginLeft: "200px" }}>
        <Outlet />
      </main>
    </>
  );
};