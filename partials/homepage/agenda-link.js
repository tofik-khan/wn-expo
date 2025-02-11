import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/Button";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const LinkButton = styled(Link)`
  width: 200px;
  height: 200px;

  background: url("${(props) => props.image}");
  background-size: 100%;
  background-position: center;
  transition: all 0.3s ease-in-out;

  border-radius: 8px;

  &:hover {
    background-size: 110%;
  }
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
          <Button variant="secondary">
            Day1
            <br />
            Live from NVA
          </Button>
          <Button variant="secondary">
            Day2
            <br />
            Live from SVA
          </Button>
        </LinkContainer>
      </Container>
    </>
  );
};
