import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { WhiteText } from "../components/Text";

const StyledFooter = styled.div`
  background-color: #19180a;
  width: 100%;
  padding-block: 32px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row className=" justify-content-center justify-content-lg-between align-items-center text-center text-lg-left">
          <Col
            sm={12}
            md="auto"
            className="order-last order-lg-first mt-4 mt-lg-0"
          >
            <a href="https://waqfenau.us" target="_blank" rel="noreferrer">
              <img
                src="/images/wn-logomark.png"
                width={200}
                style={{ paddingBlock: "8px" }}
              />
            </a>
            <div className="py-2 text-italic text-white">
              &copy; 2023 All rights reserved
            </div>
          </Col>
          <Col
            sm={12}
            md="auto"
            className="order-first order-lg-last text-white"
          >
            <WhiteText size="sm" className="py-2" style={{ maxWidth: "600px" }}>
              “It is quite easy to proclaim that you are loyal to Allah the
              Almighty and willing to tolerate everything for His sake, but true
              faith is actually demonstrated when a person is tested and where
              real sacrifice is required.”
              <br />– Hazrat Khalifatul Masih V (aba)
            </WhiteText>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};
