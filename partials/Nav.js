import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ExpoLogo from "/public/images/expo-logo.png";
import Button from "../components/Button";

const StyledNavBar = styled(Navbar)`
  background-color: #2457b2;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledSpacer = styled.div`
  margin-bottom: 82px;
`;

const StyledLink = styled(Nav.Link)`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 8px;

  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 0;

  &:hover {
    background-color: #00000044;
    color: white;
    cursor: pointer;
  }
`;

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNavBar fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={ExpoLogo} width={120} />
          </Navbar.Brand>
          <Navbar.Toggle>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end align-items-center">
            <Nav>
              <StyledLink href="/boys">Boys Agenda</StyledLink>
              <StyledLink href="/girls">Girls Agenda</StyledLink>
              <StyledLink href="/speakers">Speakers</StyledLink>
              <StyledLink href="/faq">FAQs</StyledLink>
              <StyledLink
                href="https://www.youtube.com/playlist?list=PLTpYqC-wRAALgWS-xkbf0-IkO_S_22iv4"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                2023 Recording
              </StyledLink>
              <StyledLink
                href="https://www.waqfenau.us/contact-us/"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                Contact Us
              </StyledLink>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdUWVwngRILWugN5eeVRO4yQHtpy7s4O1aMDCLvTabLKHp92g/viewform"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                <Button variant="primary" size="small">
                  Register
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
      <StyledSpacer />
    </>
  );
};
