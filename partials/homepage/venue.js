import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Venue = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col className="py-3">
          <h2>Expo Venue</h2>
          <p>Location of our 2nd Annual Waqf-e-Nau Expo</p>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        <Col xs={"auto"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.820028446385!2d-77.37670092407382!3d38.67600397177225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65781dfc2e567%3A0x31e5d688e5b51fa0!2sMasroor%20Mosque!5e0!3m2!1sen!2sus!4v1701580722661!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};
