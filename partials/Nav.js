import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";
import Hamburger from "hamburger-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ExpoLogo from "/public/images/expo-logo.png";
import Button from "../components/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
              <StyledLink href="/speakers">Speakers</StyledLink>
              <StyledLink href="/faq">FAQs</StyledLink>
              <StyledLink
                href="https://www.waqfenau.us/contact-us/"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                Contact Us
              </StyledLink>
              <NavDropdown
                title={
                  <div
                    style={{
                      display: "inline-block",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                      padding: "4px 8px",
                    }}
                  >
                    Archives
                  </div>
                }
                id="nav-info-dropdown"
              >
                <NavDropdown.Item
                  href="https://www.youtube.com/playlist?list=PLTpYqC-wRAALgWS-xkbf0-IkO_S_22iv4"
                  target="_blank"
                  rel="noreferrer"
                >
                  2023
                </NavDropdown.Item>
                <NavDropdown.Item href="/archives/2024/day1">
                  2024 (Day 1)
                </NavDropdown.Item>
                <NavDropdown.Item href="/archives/2024/day2">
                  2024 (Day 2)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
      <StyledSpacer />
    </>
  );
};
