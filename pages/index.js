import React from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/homepage/hero";
import { InfoContainer } from "../partials/homepage/info";
import { Sponsors } from "../partials/homepage/sponsors";
import { Footer } from "../partials/footer";
import { Venue } from "../partials/homepage/venue";
import { AgendaLinks } from "../partials/homepage/agenda-link";
import { Container, Row, Col } from "react-bootstrap";
import { YoutubeEmbed } from "../components/youtube-embed";
import { ImagesContainer } from "../partials/homepage/images";

export const Page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <InfoContainer />
      <AgendaLinks />
      <ImagesContainer />
      <Sponsors />
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <h2>2023 Career Report</h2>
            <p>
              Watch the MTA USA report of our first-ever Career Expo held in
              February 2023
            </p>
          </Col>
        </Row>
        <Row>
          <YoutubeEmbed embedId={"xhnHhMD4Xk4?si=foulHVR-d642vLFN"} />
        </Row>
      </Container>
      <Venue />
      <Footer />
    </>
  );
};

export default Page;
