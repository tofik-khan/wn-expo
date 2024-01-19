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
            <p>
              Click on the icon to join Expo on Zoom &amp; view agenda. Please
              Attend both days
            </p>
          </Col>
        </Row>
        <LinkContainer>
          <LinkButton image="/images/graphics/boy.jpeg" href="/boys" />
          <LinkButton image="/images/graphics/girl.jpg" href="/girls" />
        </LinkContainer>
      </Container>

      <Container fluid className="py-5 my-3 bg-light">
        <Row className="justify-content-center text-center py-3">
          <Col>
            <h2>Register Now!</h2>
            <Button
              variant={"primary"}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUWVwngRILWugN5eeVRO4yQHtpy7s4O1aMDCLvTabLKHp92g/viewform"
            >
              Click to Register
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
