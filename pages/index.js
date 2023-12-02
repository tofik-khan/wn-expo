import React from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/homepage/hero";
import { InfoContainer } from "../partials/homepage/info";

export const Page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <InfoContainer />
    </>
  );
};

export default Page;
