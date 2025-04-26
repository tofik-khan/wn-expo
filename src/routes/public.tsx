//import { lazy, Suspense } from "react";
import { PageHome } from "@/pages/home";
import { Route, Routes } from "react-router";

export const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<p>404 NOT FOUND</p>} />
        </Route>
      </Routes>
    </>
  )
}