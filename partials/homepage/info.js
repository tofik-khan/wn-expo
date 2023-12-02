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

export const InfoContainer = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2>Save the Date</h2>
          <p>
            Our 2nd Annual Career Expo, a one of a kind experience for both
            Waqifeen-e-Nau (boys) & Waqifaat-e-Nau (girls) across the country to
            come and learn about various careers based on the current Jama'at
            needs in a day-long interactive Expo. Registration & more details
            coming soon.
          </p>
          <p>
            <strong>Why Attend WN Expo?</strong>
          </p>
          <ul>
            <li>
              As a Waqf-e-Nau, is it enough to volunteer for Jama'at on a few
              occasions or serve in the Local, Regional, or National Amila of
              his / her auxiliary? <strong>No</strong>. Hazrat Khalifatul Masih
              V (aba) has repeatedly emphasized that Waqifeen-e-Nau are to study
              in the various fields a Khalifa-e-Waqt advises on. Once trained in
              one of those fields, Waqifeen-e-Nau should present themselves to
              Khalifa-e-Waqt who will then decide how the Waqf-e-Nau may be best
              utilized for Jama'at's aim to serve humanity.
            </li>
            <li>
              2024 Career Expo for Boys will be on Saturday, January 20, 2024
              while for Girls will be on Sunday, January 21, 2024.
            </li>
            <li>
              This Career Expo will introduce approximately 23+ different
              careers/fields in light of what Waqifeen can do for Jama'at when
              they pursue these careers rather than working in a corporate
              environment.
            </li>
            <li>
              Total of 34 sessions/tracks are being held with four parallel
              tracks running simultaneously for 30 minutes each.
            </li>
            <li>
              Presented by over 40 highly qualified and well-respected
              presenters.
            </li>
            <li>
              <strong>In-Person:</strong> Masjid Masroor, South Virginia for
              boys & fathers on Saturday, January 20th, 2024 & for girls &
              mothers on Sunday, January 21st, 2024
            </li>
            <li>
              <strong>Online</strong> for all USA Jama'at members who cannot
              attend in-person (though we highly encourage in-person
              attendance). Online programs can be attended by both genders on
              any day, however, certain topics are only relevant for the
              respective genders.
            </li>
            <li>
              Expo will run from 10:00 am est thru 5:30 pm est with various
              breaks. Please visit the website for the most up-to-date schedule
              and sessions.
            </li>
            <li>
              Interactive sessions will be conducted with recognition & gift
              cards for in-person & online attendees.
            </li>
          </ul>
          <p>
            <strong>Who is it for?</strong>
          </p>
          <ul>
            <li>
              Ideally, this Expo is for Waqifeen-e-Nau & Waqifaate-e-Nau between
              the ages of 12 & 26 years old as well as parents of Waqifeen.
            </li>
            <li>
              Four concurrent tracks will be going on with the ability for you
              to join the tracks you wish for
            </li>
            <li>
              Non-Waqifeen-e-Nau or those outside of the age bracket may also
              join
            </li>
            <li>How to register: Information is coming soon</li>
            <li>
              If you have any issues, please contact us at{" "}
              <a href="mailto:wn.events@ahmadiyya.us">wn.events@ahmadiyya.us</a>
            </li>
          </ul>
        </Col>
      </Row>
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
