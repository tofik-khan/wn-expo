import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { LightText } from "../../components/Text";

const StyledHighlight = styled.h3`
  margin: unset;

  font-size: 24px;
  color: #2457b2;

  text-align: center;
`;

const StyledSubText = styled.p`
  margin: unset;

  font-size: 16px;
  text-align: center;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 8px;
  background-color: #f2ebee;

  margin-block: 8px;

  text-align: center;
`;

export const WhatsNewSection = () => {
  return (
    <>
      <Container className="py-5 text-center">
        <h2>What&apos;s New</h2>
        <LightText>
          Expo is now a two-day event for both Male and Female participants
          attending in-person and over Zoom on both days.
        </LightText>
        <Row className="align-items-stretch justify-content-center">
          <Col md={6}>
            <StyledBlock>
              <StyledHighlight>Male Participants</StyledHighlight>
              <StyledSubText>
                Attend in-person at{" "}
                <strong>Masjid Mubarak, North Virginia</strong>.
              </StyledSubText>
            </StyledBlock>
          </Col>
          <Col md={6}>
            <StyledBlock>
              <StyledHighlight>Female Participants</StyledHighlight>
              <StyledSubText>
                Attend in-person at{" "}
                <strong>Masjid Masroor, South Virginia</strong>.
              </StyledSubText>
            </StyledBlock>
          </Col>
          <Col md={12}>
            <StyledBlock>
              <StyledHighlight>Special Announcement</StyledHighlight>
              <StyledSubText>
                Hazrat Khalifatul Masih (aba) is sending a representative:{" "}
                <strong>Missionary Musharaf Ahmed Sahib </strong>
                of the International Waqf-e-Nau Department, UK.
              </StyledSubText>
            </StyledBlock>
          </Col>
        </Row>
      </Container>
    </>
  );
};
