import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router";

export const ProtectedLayout = () => {

  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/admin",
      },
    });
  };

  if(isLoading) return <p>Loading...</p>

  if(!isAuthenticated) handleLogin();

  return (
    <>
      <Outlet />
    </>
  )
}