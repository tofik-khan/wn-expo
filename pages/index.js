import React, { useEffect } from "react";
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
import Button from "../components/Button";
import { WhatsNewSection } from "../partials/homepage/whats-new";

export const Page = () => {
  /**
   * Page Analytics
   */
  useEffect(() => {
    fetch(
      `https://api.counterapi.dev/v1/wn-expo-site-${
        window.location.hostname
      }/pagelocation${window.location.pathname.replace(/\//, ".")}/up`
    );
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Container fluid className="py-5 my-3 bg-light">
        <Row className="justify-content-center text-center py-3">
          <Col>
            <h2>Jazakallah for Joining us! Please give us your suggestions</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={"auto"} className="text-center py-3">
            <Button
              variant={"primary"}
              href="https://docs.google.com/forms/u/5/d/e/1FAIpQLSdUO9C2Pygo-mcnxAtKRPrGIDIiewK2Ok6CjAVWhz_O00p1tw/viewform"
            >
              Expo 2025 Survey
            </Button>
          </Col>
        </Row>
      </Container>
      <InfoContainer />
      <AgendaLinks />
      <WhatsNewSection />
      <ImagesContainer />
      <Sponsors />
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <h2>2023 Career Report</h2>
            <p>
              Watch the MTA USA report of our first-ever Career Expo held in
              January 2023
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
