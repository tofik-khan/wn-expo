import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Navigation } from "../../partials/Nav";
import { Footer } from "../../partials/footer";
import { LightText } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { processSpeakerData } from "../../helpers/api-functions";
import { Loading } from "../../partials/agenda/loading";
import { SpeakerModal } from "../../components/speaker-modal";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("/images/expo-logo.png");
  background-size: fit;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0 0 0 2000px rgba(14, 26, 42, 0.85);

  height: 350px;

  color: white;

  text-align: center;
`;

const AmeerSb = {
  name: "Sahibzada Mirza Maghfoor Ahmad",
  subtitle: "Ameer Jama'at USA",
  image: "/images/presenters/ameer-sahib.jpeg",
  description:
    "Respected Ameer Sahib USA will be presiding over the closing session of the Career Expo and will lead the closing Dua (Silent Prayers) on Saturday, January, 20, 2024",
};

const SadrLajna = {
  name: "Dhiya Tahira Bakr",
  subtitle: "Sadr Sahiba Lajna USA",
  image: "/images/graphics/girl3.jpg",
  description:
    "Respected Sadr Sahiba Lajna USA will be presiding over the closing session of the Career Expo and will lead the closing Dua (Silent Prayers) on Sunday, January, 21, 2024",
};

const Page = () => {
  const [speakers, updateSpeakers] = useState([]);
  const [loaded, updateLoaded] = useState(false);
  const [showModal, updateShowModal] = useState(false);
  const [modalBody, updateModalBody] = useState({});

  useEffect(() => {
    fetch("/api/speakers")
      .then((response) => response.json())
      .then((response) => updateSpeakers(processSpeakerData(response.data)))
      .then(() => updateLoaded(true));
  }, []);

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

  if (!loaded) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
      <StyledContainer className="py-5">
        <Row className="py-3">
          <Col className="text-center">
            <h1>2024 Waqf-e-Nau Expo</h1>
            <LightText size="lg">Speakers</LightText>
          </Col>
        </Row>
      </StyledContainer>
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h2>Featured Speakers</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex justify-content-center py-3">
            <Avatar
              name={AmeerSb.name}
              image={AmeerSb.image}
              subtitle={AmeerSb.subtitle}
              onClick={() => {
                updateModalBody(AmeerSb);
                updateShowModal(true);
              }}
              size={"xxl"}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-center py-3">
            <Avatar
              name={SadrLajna.name}
              image={SadrLajna.image}
              subtitle={SadrLajna.subtitle}
              onClick={() => {
                updateModalBody(SadrLajna);
                updateShowModal(true);
              }}
              size={"xxl"}
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-3">
        <Row className="text-center">
          <Col>
            <h2>Session Speakers</h2>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-start">
          {speakers.map((speaker) => (
            <Col md={2} xs={6} className="d-flex justify-content-center py-3">
              <Avatar
                key={`speaker-${speaker.id}`}
                name={speaker.name}
                image={speaker.image}
                subtitle={speaker.subtitle}
                size={"xl"}
                onClick={() => {
                  updateModalBody(speaker);
                  updateShowModal(true);
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />

      <SpeakerModal
        show={showModal}
        onHide={() => updateShowModal(false)}
        content={modalBody}
      />
    </>
  );
};

export default Page;
