import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router";
import { AdminBar } from "../Nav/AdminBar";
import { AdminSideBar } from "../Nav/AdminSideBar";

export const ProtectedLayout = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/admin",
      },
    });
  };

  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated) handleLogin();

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