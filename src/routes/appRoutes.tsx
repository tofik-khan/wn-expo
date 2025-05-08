//import { lazy, Suspense } from "react";
import { PublicLayout } from "@/components/layouts/public";
import { Page403 } from "@/pages/403";
import { PageHome } from "@/pages/home";
import { Route, Routes } from "react-router";
import { ProtectedRoutes } from "./protectedRoutes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/403" element={<Page403 />} />
          {/* <Route path="*" element={<p>404 NOT FOUND</p>} /> */}
        </Route>
        <Route path="admin/*" element={<ProtectedRoutes />} />
      </Routes>
    </>
  );
};