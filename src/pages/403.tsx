import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export const Page403 = () => {
  const { logout } = useAuth0();
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  return (
    <>
      <p>UnAuthorized Login</p>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}