//import { lazy, Suspense } from "react";
import { ProtectedLayout } from "@/components/layouts/protected";
import { PageAdminDashboard } from "@/pages/admin";
import { PageAdmins } from "@/pages/admin/admins";
import { Route, Routes } from "react-router";

export const ProtectedRoutes = () => {
  return (
    <>
      <Routes>
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="admins" element={<PageAdmins />} />
          <Route path="/" element={<PageAdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};