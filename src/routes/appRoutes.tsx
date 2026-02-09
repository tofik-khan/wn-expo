//import { lazy, Suspense } from "react";
import { PublicLayout } from "@/components/layouts/public";
import { Page403 } from "@/pages/403";
import { PageHome } from "@/pages/home";
import { PageSessions } from "@/pages/sessions";
import { Navigate, Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/403" element={<Page403 />} />
          <Route path="/sessions/*" element={<SessionRoutes />} />
          {/* <Route path="*" element={<p>404 NOT FOUND</p>} /> */}
        </Route>
      </Routes>
    </>
  );
};

const SessionRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to={"/"} />} />
        <Route path="/:date" element={<PageSessions />} />
      </Routes>
    </>
  );
};
