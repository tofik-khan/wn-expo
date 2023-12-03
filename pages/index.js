import React from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/homepage/hero";
import { InfoContainer } from "../partials/homepage/info";
import { Sponsors } from "../partials/homepage/sponsors";

export const Page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <InfoContainer />
      <Sponsors />
    </>
  );
};

export default Page;
