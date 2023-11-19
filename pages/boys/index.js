import React, { useState, useEffect } from "react";
import { AgendaCard } from "../../components/adenda-card";
import { InfoModal } from "../../components/info-modal";
import { processSessionData } from "../../helpers/api-functions";

const Page = () => {
  const [sessions, updateSessions] = useState([]);
  const [loaded, updateLoaded] = useState(false);
  const [showModal, updateShowModal] = useState(false);
  const [modalBody, updateModalBody] = useState({});

  useEffect(() => {
    fetch("/api/sessions/boys")
      .then((response) => response.json())
      .then((response) => updateSessions(processSessionData(response.data)));
    updateLoaded(true);
  }, []);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
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
      <InfoModal
        show={showModal}
        onHide={() => updateShowModal(false)}
        content={modalBody}
      />
    </>
  );
};

export default Page;
