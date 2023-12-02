import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const StyledIconContainer = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  margin-right: 50px;
`;

const SponsorImage = ({ image }) => {
  return (
    <>
      <StyledIconContainer>
        <Image
          src={image}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </StyledIconContainer>
    </>
  );
};

export const Sponsors = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col className="py-3">
            <h2>Partners/Sponsors</h2>
            <p>
              A huge thanks to all our amazing partners. We couldn't have a
              conference without you!
            </p>
          </Col>
        </Row>
        <Row>
          <Marquee>
            <SponsorImage image="/images/sponsors/amc.png" />
            <SponsorImage image="/images/sponsors/amla.png" />
            <SponsorImage image="/images/sponsors/amma.jpeg" />
            <SponsorImage image="/images/sponsors/ansar.png" />
            <SponsorImage image="/images/sponsors/atfal.png" />
            <SponsorImage image="/images/sponsors/lajna.png" />
            <SponsorImage image="/images/sponsors/awsa.jpeg" />
            <SponsorImage image="/images/sponsors/humanity-first.jpeg" />
            <SponsorImage image="/images/sponsors/iaaae.png" />
            <SponsorImage image="/images/sponsors/amc-usa.png" />
            <SponsorImage image="/images/sponsors/wn.png" />
          </Marquee>
        </Row>
      </Container>
    </>
  );
};
