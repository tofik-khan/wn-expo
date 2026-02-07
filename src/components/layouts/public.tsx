import { Outlet } from "react-router";
import AppBar from "@/components/Nav/AppBar";

export const PublicLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
