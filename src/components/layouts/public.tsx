import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const PublicLayout = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth0();

  useEffect(() => {
    if(isAuthenticated) navigate('/admin');
  })

  return (
    <>
      <Outlet />
    </>
  )
}