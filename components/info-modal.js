import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { Avatar } from "./Avatar";
import { currentTime, isLive } from "../helpers/time";
import Button from "./Button";
import { LightText } from "./Text";

const StyledThumbnail = styled.img`
  width: 100%;
  min-height: 170px;
  object-fit: cover;

  padding: 4px;

  border-radius: 16px;
`;

const SessionLiveContainer = ({ content }) => {
  return content.link !== "" ? (
    isLive(
      `${content.date} ${content.startTime}`,
      currentTime(),
      `${content.date} ${content.endTime}`
    ) ? (
      <Button
        variant={"primary"}
        href={content.link}
        target="_blank"
        rel="noreferrer"
      >
        Join Now!
      </Button>
    ) : (
      <LightText size={"md"}>
        This session is not live yet, please check back here when it goes live
      </LightText>
    )
  ) : (
    <></>
  );
};

export const InfoModal = ({ show, onHide, content }) => {
  return (
    <Modal
      size="lg"
      fullscreen={"lg-down"}
      show={show}
      onHide={onHide}
      aria-labelledby={"session-info-modal"}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id={"session-info-modal"}>
          <div
            style={{
              fontWeight: "normal",
              fontSize: "16px",
              fontFamily: "cursive",
            }}
          >
            {content.startTime} - {content.endTime}
          </div>
          {content.title}
          <br />
          <SessionLiveContainer content={content} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledThumbnail src={content.thumbnail} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            gap: "8px",
            marginBlock: "8px",
          }}
        >
          {content.presenters &&
            content.presenters.map((presenter, index) => (
              <Avatar
                key={`modal-presenter-avatar-${index}`}
                name={presenter.name}
                image={presenter.image}
                size={"lg"}
              />
            ))}
        </div>
        <p style={{ marginBlock: "16px" }}>{content.description}</p>
        <SessionLiveContainer content={content} />
      </Modal.Body>
    </Modal>
  );
};
