import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AgendaCard } from "../../components/adenda-card";
import { InfoModal } from "../../components/info-modal";
import { processSessionData } from "../../helpers/api-functions";
import { Navigation } from "../../partials/Nav";
import { Loading } from "../../partials/agenda/loading";

const Page = () => {
  const [sessions, updateSessions] = useState([]);
  const [loaded, updateLoaded] = useState(false);
  const [showModal, updateShowModal] = useState(false);
  const [modalBody, updateModalBody] = useState({});

  useEffect(() => {
    fetch("/api/sessions/girls")
      .then((response) => response.json())
      .then((response) => updateSessions(processSessionData(response.data)));
    updateLoaded(true);
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
      <Container>
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

      <InfoModal
        show={showModal}
        onHide={() => updateShowModal(false)}
        content={modalBody}
      />
    </>
  );
};

export default Page;
