import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { LightText } from "./Text";

const StyledThumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;

  padding: 4px;

  border-radius: 16px;
`;

export const SpeakerModal = ({ show, onHide, content }) => {
  let columnWidth = 6;
  if (content.description && content.description.length > 500) columnWidth = 12;
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
        <Modal.Title>
          {content.name}
          <LightText>{content.subtitle}</LightText>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={columnWidth} className="d-flex justify-content-center">
              <StyledThumbnail src={content.image} />
            </Col>
            <Col
              md={columnWidth}
              className="d-flex justify-content-center py-5"
            >
              <p>{content.description}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
