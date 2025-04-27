import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import AppBar from "@/components/Nav/AppBar";

export const PublicLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};