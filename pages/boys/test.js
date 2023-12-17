import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { AgendaCard } from "../../components/adenda-card";
import { InfoModal } from "../../components/info-modal";
import { processSessionData } from "../../helpers/api-functions";
import { Navigation } from "../../partials/Nav";
import { Loading } from "../../partials/agenda/loading";
import { Footer } from "../../partials/footer";
import { LightText } from "../../components/Text";

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

const Page = () => {
  const [sessions, updateSessions] = useState([]);
  const [loaded, updateLoaded] = useState(false);
  const [showModal, updateShowModal] = useState(false);
  const [modalBody, updateModalBody] = useState({});
  const [startTime, udpateStartTime] = useState("");
  const [endTime, updateEndTime] = useState("");

  useEffect(() => {
    fetch("/api/sessions/boys")
      .then((response) => response.json())
      .then((response) => updateSessions(processSessionData(response.data)))
      .then(() => updateLoaded(true));
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
            <LightText size="lg">Boys</LightText>
            <p>
              Saturday, January 20<sup>th</sup>, 2024
            </p>
          </Col>
        </Row>
      </StyledContainer>
      <Container>
        <Row>
          <Col>
            <h2>Agenda</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="startTime">StartTime</label>
            <input
              type="text"
              id="startTime"
              onChange={(e) => udpateStartTime(e.target.value)}
            />
            <label htmlFor="endTime">endTime</label>
            <input
              type="text"
              id="endTime"
              onChange={(e) => updateEndTime(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {sessions.map(
              (session, index) =>
                session.published && (
                  <AgendaCard
                    key={`session-id-${index}`}
                    title={session.title}
                    description={session.description}
                    thumbnail={session.thumbnail}
                    date={"2023-12-16"}
                    startTime={startTime}
                    endTime={endTime}
                    presenters={session.presenters}
                    onClick={() => {
                      updateModalBody(session);
                      updateShowModal(true);
                    }}
                  />
                )
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
      <InfoModal
        show={showModal}
        onHide={() => updateShowModal(false)}
        content={{ ...modalBody, startTime, endTime, date: "2023-12-16" }}
      />
    </>
  );
};

export default Page;
