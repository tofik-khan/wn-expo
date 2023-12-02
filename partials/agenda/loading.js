import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../Nav";
import styled from "styled-components";

const Loader = styled.div`
  && {
    border: 16px solid #2457b244;
    border-radius: 50%;
    border-top: 16px solid #2457b2;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    margin-bottom: 8px;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <>
      <Navigation />
      <StyledContainer>
        <Loader />
        <p>
          <strong>Loading...</strong>
        </p>
      </StyledContainer>
    </>
  );
};
