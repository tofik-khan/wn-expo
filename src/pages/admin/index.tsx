import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useAppSelector } from "@/hooks";

export const PageAdminDashboard = () => {
  const { user, logout } = useAuth0();
  const currentUser = useAppSelector((state) => state.admin.currentUser);

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  return (
    <>
      <p>Authenticated</p>
      <p>User: {user.email}</p>
      <p>Current User: {JSON.stringify(currentUser)}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}