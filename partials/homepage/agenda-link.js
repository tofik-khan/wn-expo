import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/Button";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const AgendaLinks = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center text-center py-3">
          <Col>
            <h2>Agenda</h2>
            <p>Attend Both days &amp; Join Expo on Zoom</p>
          </Col>
        </Row>
        <LinkContainer>
          <Button variant="secondary" href={"/2025/day1"}>
            Day1
            <br />
            April 19th
          </Button>
          <Button variant="secondary" href={"/2025/day2"}>
            Day2
            <br />
            April 20th
          </Button>
        </LinkContainer>
      </Container>
    </>
  );
};
