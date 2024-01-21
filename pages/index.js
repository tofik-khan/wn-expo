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
import Button from "../components/Button";
import { LightText } from "../components/Text";

export const Page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Container fluid className="py-5 my-3 bg-light">
        <Row className="justify-content-center text-center py-3">
          <Col>
            <h2>Jazakallah for joining us</h2>
            <LightText>
              Please tell us what went well and what we can improve for the next
              time
            </LightText>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={"auto"} className="text-center py-3">
            <Button
              variant={"primary"}
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfDBeguY1H7tPvko8ae4bg4vYRG5d8FLBEq61BCqyP-DrRSFQ/viewform"
            >
              Share your Feedback!
            </Button>
          </Col>
        </Row>
      </Container>
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
