import React from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/homepage/hero";
import { InfoContainer } from "../partials/homepage/info";
import { Sponsors } from "../partials/homepage/sponsors";
import { Footer } from "../partials/footer";
import { Venue } from "../partials/homepage/venue";
import { AgendaLinks } from "../partials/homepage/agenda-link";

export const Page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <InfoContainer />
      <AgendaLinks />
      <Sponsors />
      <Venue />
      <Footer />
    </>
  );
};

export default Page;
