import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { AgendaCard } from "../../components/adenda-card";
import { InfoModal } from "../../components/info-modal";
import { processSessionData } from "../../helpers/api-functions";
import { Navigation } from "../../partials/Nav";
import { Loading } from "../../partials/agenda/loading";
import { Footer } from "../../partials/footer";
import ExpoLogo from "/public/images/expo-logo.png";
import { LightText } from "../../components/Text";

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

  if (!loaded) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
      <Container className="py-5">
        <Row className="py-3">
          <Col md={6}>
            <div style={{ position: "relative", textAlign: "center" }}>
              <Image src={ExpoLogo} height={150} />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <h1>2024 Waqf-e-Nau Expo</h1>
            <LightText size="lg">Girls</LightText>
            <p>
              Sunday, January 21<sup>st</sup>, 2024
            </p>
          </Col>
        </Row>
        <Row className="py-3 text-center">
          <Col>
            Please reach us at{" "}
            <a href="tel:301-450-0001">
              <strong>301-450-0001</strong>
            </a>{" "}
            or{" "}
            <a href="wn.events@ahmadiyya.us">
              <strong>wn.events@ahmadiyya.us</strong>
            </a>{" "}
            if you are facing any issue.
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>Agenda</h2>
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
        content={modalBody}
      />
    </>
  );
};

export default Page;
