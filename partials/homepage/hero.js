import React from "react";
import styled from "styled-components";
import { CountdownTimer } from "../../components/countdown";
import { Container, Row, Col } from "react-bootstrap";
import { WhiteText } from "../../components/Text";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("/images/hero.png");
  background-size: cover;
  background-position: center;

  box-shadow: inset 0 0 0 2000px rgba(14, 26, 42, 0.85);

  height: 500px;

  color: white;

  text-align: center;
`;

const StyledOverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-block: 16px;
  background-color: #2457b288;
  text-align: center;

  margin-top: 8px;

  > p {
    margin: 0;
  }
`;

export const Hero = () => {
  return (
    <StyledContainer fluid>
      <Row
        className="justify-content-center"
        style={{ maxWidth: "800px", margin: "auto" }}
      >
        <Col className="justify-content-center text-center">
          <WhiteText size={"sm"}>
            January 20th, 2023 (Boys) & January 21st, 2023 (Girls)
          </WhiteText>
          <h1 className="pb-3">2024 WAQF-E-NAU USA CAREER EXPO</h1>
          <WhiteText size={"md"} className="pb-5">
            Learn about different careers that a Waqf-e-Nau can pick to serve
            his/her faith. Open to Non-Waqifeen-e-Nau as well!
            <br />
            Please contact us at <a href="tel:425-298-6610">425-298-6610</a> if
            you have any questions
          </WhiteText>
          <CountdownTimer date={"Jan 20 2024 10:00:00 GMT-0500"} />
        </Col>
        <StyledOverlayContainer>
          <WhiteText size={"md"}>
            Register now for our two-day event! In-person attendance is
            preferred, with boys on January 20th and girls on January 21st.
            Ideal for ages 12-26.
          </WhiteText>
        </StyledOverlayContainer>
      </Row>
    </StyledContainer>
  );
};
