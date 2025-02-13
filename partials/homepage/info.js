import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledHighlight = styled.h3`
  margin: unset;

  font-size: 32px;
  color: #2457b2;

  text-align: center;
`;

const StyledSubText = styled.p`
  margin: unset;

  font-size: 20px;
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

export const InfoContainer = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="align-items-stretch">
          <Col md={3}>
            <StyledBlock>
              <StyledHighlight>2 DAYS</StyledHighlight>
              <StyledSubText>
                April 19<sup>th</sup> &amp; 20<sup>th</sup>
              </StyledSubText>
            </StyledBlock>
          </Col>
          <Col md={3}>
            <StyledBlock>
              <StyledHighlight>25+</StyledHighlight>
              <StyledSubText>Careers</StyledSubText>
            </StyledBlock>
          </Col>
          <Col md={3}>
            <StyledBlock>
              <StyledHighlight>32+</StyledHighlight>
              <StyledSubText>Sessions</StyledSubText>
            </StyledBlock>
          </Col>
          <Col md={3}>
            <StyledBlock>
              <StyledHighlight>50+</StyledHighlight>
              <StyledSubText>Professionals</StyledSubText>
            </StyledBlock>
          </Col>
        </Row>
      </Container>
    </>
  );
};
