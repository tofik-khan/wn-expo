import { Outlet } from "react-router";
import AppBar from "@/components/Nav/AppBar";
import { Footer } from "../Footer";

export const PublicLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Footer />
    </>
  );
};
