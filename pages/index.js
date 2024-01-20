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

export const Page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Container fluid className="py-5 my-3 bg-light">
        <Row className="justify-content-center text-center py-3">
          <Col>
            <h2>Register/Join Now!</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={"auto"} className="text-center py-3">
            <Button
              variant={"primary"}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUWVwngRILWugN5eeVRO4yQHtpy7s4O1aMDCLvTabLKHp92g/viewform"
            >
              Click to Register
            </Button>
          </Col>
          <Col md={"auto"} className="text-center py-3">
            <Button variant={"secondary"} href="/boys">
              Join Jan 20 Session
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
