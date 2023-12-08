import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;
  min-height: 200px;

  background-image: url("${(props) => props.url}");
  background-size: cover;

  border-radius: 4px;

  margin-block: 8px;
`;

export const ImagesContainer = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={3} sm={6}>
          <StyledImage url={"/images/info-1.jpeg"} />
        </Col>
        <Col lg={3} sm={6}>
          <StyledImage url={"/images/info-2.jpeg"} />
        </Col>
        <Col lg={3} sm={6}>
          <StyledImage url={"/images/info-3.jpg"} />
        </Col>
        <Col lg={3} sm={6}>
          <StyledImage url={"/images/info-4.jpeg"} />
        </Col>
      </Row>
    </Container>
  );
};
