//import { lazy, Suspense } from "react";
import { ProtectedLayout } from "@/components/layouts/protected";
import { PublicLayout } from "@/components/layouts/public";
import { PageAdminDashboard } from "@/pages/admin";
import { PageHome } from "@/pages/home";
import { Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <>
      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<p>404 NOT FOUND</p>} />
        </Route>

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/admin" element={<PageAdminDashboard />}>
            {/* Admin Routes */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};