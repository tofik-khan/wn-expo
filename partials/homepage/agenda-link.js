import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

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
  background-size: cover;
  border-radius: 8px;
`;

export const AgendaLinks = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center py-3">
        <Col>
          <h2>Agenda</h2>
          <p>Find out what's in store for boys and girls</p>
        </Col>
      </Row>
      <LinkContainer>
        <LinkButton image="/images/graphics/boy.jpeg" href="/boys" />
        <LinkButton image="/images/graphics/girl.jpg" href="/girls" />
      </LinkContainer>
    </Container>
  );
};
