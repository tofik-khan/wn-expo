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
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  color: white;
  margin-bottom: 0;

  text-decoration: underline rgba(255, 255, 255, 0);
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline rgba(255, 255, 255, 1) 2px;
    transition: text-decoration 500ms;
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
              <StyledLink href="/boys">Boys</StyledLink>
              <StyledLink href="/girls">Girls</StyledLink>
              <StyledLink
                href="https://www.youtube.com/playlist?list=PLTpYqC-wRAALgWS-xkbf0-IkO_S_22iv4"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                2023 Recording
              </StyledLink>
              <Nav.Link href="/" className="align-items-center">
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
