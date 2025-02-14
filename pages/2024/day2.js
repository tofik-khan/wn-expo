import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AgendaCard } from "../../components/adenda-card";
import { processSessionData } from "../../helpers/api-functions";
import { Navigation } from "../../partials/Nav";
import { Loading } from "../../partials/agenda/loading";
import { Footer } from "../../partials/footer";
import { LightText } from "../../components/Text";
import styled from "styled-components";
import { ArchiveModal } from "../../components/archive-modal";

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

  useEffect(() => {
    fetch("/api/sessions/girls")
      .then((response) => response.json())
      .then((response) => updateSessions(processSessionData(response.data)))
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
            <LightText size="lg">Girls on-site / Boys on Zoom</LightText>
            <p>
              Sunday, January 21<sup>st</sup>, 2024
            </p>
          </Col>
        </Row>
      </StyledContainer>
      <Container className="py-5">
        <Row>
          <Col>
            <h2>Agenda</h2>
            <LightText>Please scroll down to view live tracks</LightText>
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
                    date={session.date}
                    startTime={session.startTime}
                    endTime={session.endTime}
                    presenters={session.presenters}
                    room={session.room}
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

      <ArchiveModal
        show={showModal}
        onHide={() => updateShowModal(false)}
        content={modalBody}
      />
    </>
  );
};

export default Page;
